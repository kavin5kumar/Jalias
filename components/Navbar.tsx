'use client'

import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react"
import React, { useEffect, useRef, useState } from 'react'
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";
import { Button } from "./ui/button";
import SignInBtn from "./SignInBtn";
import Image from "next/image";




const Navbar = () => {

  const [onScreenLogin, setOnScreenLogin] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null)
  const { status, data:session } = useSession()

  const loginToggle =  () => {
    if (onScreenLogin) {
      setOnScreenLogin(false)
    } else {
      setOnScreenLogin(true)
    }
  }
  useEffect(() => {
    const handleClickOutside = (e : MouseEvent) => {
      if(popRef.current && !popRef.current.contains(e.target as Node)) {
        setOnScreenLogin(false);
      }
    }
    document.addEventListener("click", handleClickOutside)

    if(!onScreenLogin) {
      document.removeEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [onScreenLogin])

  

  return (
    <div>
       <section className={`z-50 fixed h-full w-full t-0 bg-opacity-20 l-0 r-0 flex items-center justify-center bg-white  text-white dark:text-black ${!onScreenLogin ? "hidden" : ""}`}>
          <div ref={popRef} className={`h-[50%] w-[50%] max-sm:h-[80%] max-sm:w-[80%] bg-black dark:bg-gray-200 shadow-2xl dark:text-black rounded-md grid grid-rows-[20px_1fr] ${!onScreenLogin ? "hidden" : ""}`}>
            <Button variant='ghost' className="bg-white dark:bg-black text-black justify-self-start self-start dark:text-white" onClick={() => loginToggle()}>X</Button>
            <div className="flex flex-col justify-center items-center gap-10">
              <h1 className="font-bold text-3xl">Login</h1>
              <div className="images flex flex-col gap-5">
                <SignInBtn name="Github" loc="/github-mark.svg"/>
                <SignInBtn name="Google" loc="/icons8-google.svg"/>
              </div>
            </div>
            
          </div>
      </section>
        <header className={cn('flex fixed top-0 left-0 right-0 items-center justify-between px-6 dark:bg-[#1f1f1f] mb-10')}>
          <section className={cn("left h-full")}>
              <Logo />
          </section>
          <section className="right flex items-center gap-5">
          {status === 'authenticated' ? (
          
          <div className="flex gap-5 items-center justify-center border">
            <div className="flex items-center justify-center w-full h-full gap-5">
                <Image src={session.user?.image || ""} width={30} height={30} alt="adm" className={cn("cursor-pointer rounded-full")} />
                <h1>{session.user?.name}</h1>
            </div>
            <Button onClick={() => signOut({ callbackUrl: '/' })} className={cn("hover:underline")}>Sign Out</Button>
          </div>

          
          ) : (
            
            <LoginBtn st={loginToggle}/>
              
          
  
        )}
        <button className={cn('bg-white border w-14 h-14 grid place-content-center')}>
               <ModeToggle/>
        </button>
        </section>
        </header>
    </div>
  )
}
type Propz = {
  st: () => void,
}

export const LoginBtn = ({st}: Propz) => {

  return (
    <>
      <Button onClick={() => st()} className={cn("hover:underline")}>Log In</Button>
    </>
            
   
  )
}

export default Navbar