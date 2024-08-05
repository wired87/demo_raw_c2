import {signOut} from "next-auth/react";
import Link from "next/link";
import React from "react";

interface AuthBT {
  user?: any;
  pathUrl: string;
  sticky: any;
}

export const AuthButtons: React.FC<AuthBT> = ({user, sticky, pathUrl}) => {
  if ( user ) {
    return(
      <>
        <p
          className={`loginBtn px-7 py-3 text-base font-medium ${
            !sticky && pathUrl === "/" ? "text-white" : "text-dark"
          }`}
        >
          {user?.name}
        </p>
        {pathUrl !== "/" || sticky ? (
          <button
            onClick={() => signOut()}
            className="signUpBtn rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-20 hover:text-dark"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="signUpBtn rounded-lg bg-white bg-opacity-20 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
          >
            Sign Out
          </button>
        )}
      </>
    )
  } else if (pathUrl !== "/") {
    return(
      <>
        <Link
          href="/signin"
          className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20"
        >
          Sign Up
        </Link>
      </>
    )
  }
  return(
    <>
      <Link
        href="/signin"
        className={`px-7 py-3 text-base font-medium hover:opacity-70 ${
          sticky ? "text-dark dark:text-white" : "text-white"
        }`}
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out ${
          sticky
            ? "bg-primary hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        Sign Up
      </Link>
    </>
  )
}