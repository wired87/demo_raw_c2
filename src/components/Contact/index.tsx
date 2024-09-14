"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";

import {MailT} from "@/types/contact";

import {Spinner} from "@nextui-org/spinner";
import CModal from "@/components/Modal";
import axios from "axios";


const Contact = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const updateSuccessError = () => {
    setError(false);
    setSuccess(false);
  }

  const [formData, setFormData] = useState<MailT>({
    name: '',
    email: '',
    subject: '',
    phone: '', // Optional
    message: '',
    preferredServices: selected, // Array for multiple checkboxes
    time: 0, // Slider value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log("formData",formData);
  }, [formData]);
  useEffect(() => {
    console.log("selected",selected);
  }, [selected]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    setSuccess(false);
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      try { // 'http://localhost:3000/api/' 'https://www.bestbrain.tech/api/contact/'
        const res = await axios.post('http://localhost:3000/api/contact/', formData);
        console.log("res: ",res);
        if (res.data.ok) {
          setSuccess(true);
          setError(false);
          setSelected([]);
          setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
            preferredServices: selected,
            time: 0,
          });
        } else {
          setError(true);
          setSuccess(false);
        }

      } catch(e:unknown) {
        if (e instanceof Error) {
          console.log("Error occurred:", e);
          setError(true);
        }
      }finally {
        setLoading(false);

      }
    }
  };
  const getModal = useCallback(() => {
    if (error) {
      return <CModal state={false} updateState={updateSuccessError} />
    } else if (success) {
      return <CModal state={true} updateState={updateSuccessError} />
    }
  }, [error, success]);

  const btnContent = () => {
    if (loading) {
      return(
        <Spinner size={"sm"} color="primary" labelColor="foreground"/>
      )
    }

    return(
      <svg
        className="fill-white"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
          fill=""
        />
      </svg>
    )
  }

  return (
    <>
      <section className="px-4 bg-white relative md:px-8 2xl:px-0 my-15 w-full h-full border-1 dark:border-strokedark">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.954213807517!2d13.695810876795147!3d51.03546637170986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c57778bb2587%3A0x203281e8cb8c69b1!2sKlingestra%C3%9Fe%2022%2C%2001159%20Dresden!5e0!3m2!1sde!2sde!4v1724592625371!5m2!1sde!2sde"
            width="100%" height="100%" className={"top-0 left-0"}  loading="lazy"
           ></iframe>
        </div>
        <div className="relative  mx-auto max-w-c-1390 px-7.5 py-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div
            className="flex flex-col-revers  flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{duration: 1, delay: 0.1}}
              viewport={{once: true}}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8
              dark:border-strokedark md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black xl:text-sectiontitle2">
                Lets get in touch!
              </h2>
              <form
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    required
                    name={"name"}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border-b text-black placeholder-dark border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    required
                    name={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border-b text-black placeholder-dark border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name={"subject"}
                    value={formData.subject}

                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full border-b text-black placeholder-dark border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name={"phone"}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                    className="w-full border-b text-black placeholder-dark border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex flex-col">
                  <h3 className={"bold text-black mb-8 mt-4 underline-offset-2"}>How we can help?</h3>
                  <textarea
                    placeholder="Hi!"
                    required
                    value={formData.message}
                    name={"message"}
                    onChange={handleChange}
                    className="w-full border-b text-black placeholder-dark border-stroke bg-transparent focus:border-waterloo
                      focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark
                      dark:focus:border-manatee dark:focus:placeholder:text-white min-h-[150px]"
                  >
                    </textarea>
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-between ">

                  <button
                    type={"submit"}
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send
                    {
                      btnContent()
                    }
                  </button>

                </div>

              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{duration: 2, delay: 0.1}}
              viewport={{once: true}}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >

            </motion.div>
          </div>
        </div>
      </section>
      {
        getModal()
      }
    </>
  );
};

export default Contact;
