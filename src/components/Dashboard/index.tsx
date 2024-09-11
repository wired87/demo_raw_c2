"use client"
import {useCallback, useEffect, useState} from "react";
import axios from "axios";


import {UserInterface,} from "../../interfaces/userInterface";

import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

import {useUser} from "@/hooks/useUser";


const Dashboard = () => {

  const { user, saveUser, updateUser, checkUserAvailability } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("");

  // todo if true systemerror modal pop up - refresh
  const [e, setE] = useState<string>("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setUserData()
      .then(() => {
        console.log("User set...");
      })
      .catch((e) => {
        console.log("Error occurred:", e);
      });
  }, []);

  const setUserData = async (): Promise<void> => {
    setLoading(true);


    try {
      const localUser = checkUserAvailability();
      const uid = localUser?.auth?.uid
      if ( localUser && localUser.auth && uid && uid.length > 0 ) {
        await getDashboard(localUser);
      } else {
        navigate("/login"); // todo ///////////////////////////////////////////////////////////////////////
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log("Error occurred:", e);
      }
    } finally {
      console.log("Finished...");
      setLoading(false);
    }
  };

  const getDashboard = async (localUser: UserInterface) => {
    console.log("Current user:", localUser);

    try {
      const res = await axios.post(
        "https://wired66.pythonanywhere.com/dashboard/info/",
        {
          user_id: localUser?.auth?.uid,
        }
      );

      if (res.data?.status_code === 200) {
        console.log("Data:", res.data);
        const r = res.data.userData;
        console.log("User data:", r);

        localUser.bots = r.bots

        localUser.plan = r.plan

        if (localUser && localUser.auth) {
          localUser.auth.email = r.email;
        }

        console.log("Received user data:", localUser);
        updateUser(localUser);
        saveUser(localUser);
        setUid(localUser?.auth?.uid || "");
        dispatch(authActions.Login({ user: localUser }));

      } else {
        console.log("Invalid request...")
        setE(res.data.message)
      }

    } catch ( e:unknown ) {
      if ( e instanceof Error ) {
        console.log("Something unexpected occurred:", e);
        setE("The connection was getting lost. Please try gian.");
      }
    } finally {
      setLoading(false);
    }
  };

  const botTableContent = useCallback(() => {
    console.log("uid:", uid);
    return(
      <BotsTable bots={user?.bots} user={user} loading={loading} error={e} />
    )
  }, [user, loading, e, user?.bots, user?.bots]);


  const planCard = (  ) => {
    if ( user?.plan ) {
      return(
        <div className="px-4 justify-between min-w-[300px] bg-white
         flex flex-row items-center shadow-sm overflow-x-hidden
         bg-gradient-to-r from-cyan-500 to-blue-500
         py-4 rounded-lg text-gray-800
          sm:w-full">
          <div>
            <div className="text-5xl font-semibold text-white text-bold">
              {user?.auth?.email}
            </div>
            <div className="text-3xl font-semibold text-white text-bold">
              {user?.plan.name}
            </div>
            <div className="text-2xl text-white">Chats remaining: { user?.plan.chatsLeft }</div>
            <div className="text-2xl text-white">Unused Bots: { user?.plan.totalBotsIncluded }</div>
            <div className="text-2xl text-white">Subscription status: { user?.plan?.status }</div>
          </div>
          <div className={"flex items-center justify-center"}>
            <Lottie options={defaultOptions(sub)} height={100} width={100} />
          </div>
        </div>
      )
    } else if ( loading ) {
      return(
        <div className="px-6 justify-between bg-white  flex flex-row items-center shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500
         py-4 rounded-lg text-gray-800">
          <LoadingIndicator loading={loading}/>
        </div>
      )
    } else if (e && e.length > 0 ) {
      return <h3 className={"text-blue-950"}>Something went wrong. . .</h3>
    }
    return( // Get plan ad cards
      <div className="px-6 justify-between w-[500px]  bg-white
      flex flex-row items-center shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500
         py-4 rounded-lg text-gray-800">

        <div >
          <div className="text-5xl font-semibold text-white text-bold">
            {user?.auth?.email}
          </div>
          <div className="text-5xl font-semibold text-white text-bold">
            No active Plan currently . . .
          </div>
          <div className="text-2xl mt-4 mb-2 text-white">Upgrade to an Plan to explore our features!</div>
        </div>
        <div className={"flex h-full items-end justify-center"}>
          <Button onClick={() => navigate("/pricing")} className={"text-white"}>Upgrade!</Button>
        </div>
      </div>
    )
  }

  return (
    <Sidebar>
      <div className="
      lg:px-[150px]

      md:px-[0]

      sm:px-[0]

      relative flex w-full mx-auto mb-12">
        {
          planCard()
        }
      </div>

      <div className="px-4 max-w-7xl mx-auto sm:px-6 bg-white lg:px-8">
        {
          botTableContent()
        }
      </div>
    </Sidebar>
  );
};

export default Dashboard;
