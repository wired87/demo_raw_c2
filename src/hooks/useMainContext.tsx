import {useUser} from "./useUser";
import React, {Dispatch, memo, SetStateAction, useCallback} from "react";
import {useLoading} from "./useLoading";
import {useJwt} from "./useJwt";
import {useShowModal, useUpperLinkBarVisible} from "./useUpperLinkBar";
import {useNavigate} from "react-router-dom";

const MainContextProvider: React.FC<any> = (
  {
    children
  }
) => {
  const {jwtToken} = useJwt();
  const {loading, updateLoading} = useLoading();

  const {upperLinkBarVisible, updateLinkBarVisible} = useUpperLinkBarVisible();
  const {show, updateShow} = useShowModal();

  const navigate = useNavigate();

  const {
    checkSessionData,
    user,
    updateUser
  } = useUser();

  const defaultPostRequest = useCallback(async (
    postUrl: string,
    postObject: any,
    setError: Dispatch<SetStateAction<string>>,
  ):Promise<any> => {

    if (!jwtToken) {
      navigate("/login") // todo
    }

    updateLoading(true);
    setError("");

    let response;

    if (jwtToken?.refresh && jwtToken?.access && user?.auth?.uid) {
      try {
        console.log("Data sent:", postObject);

      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          console.error("Error while contact submit occurred:", e.message);
        }
        return null;
      } finally {
        console.log("Application request finished...");
        updateLoading(false);
      }
    }
  }, [jwtToken, user]);




  const elements = {
    checkSessionData,
    user,
    updateUser,
    upperLinkBarVisible, updateLinkBarVisible,
    show, updateShow,defaultPostRequest,
    loading, updateLoading
  }




  return(
    <>
      {children}
    </>

  );
}

export default memo(MainContextProvider);