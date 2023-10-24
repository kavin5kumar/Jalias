"use client"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useSession } from "next-auth/react"
import { LoginBtn } from "./Navbar"
import { FaArrowRight } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import SignInBtn from "./SignInBtn"
import Link from "next/link"

export const MiddleBtn = () => {
  const [onScreenLogin, setOnScreenLogin] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null)
    const { status } = useSession()
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
      <>
        {status == 'authenticated' ? (
          <Link href="/documents">
            <button className={cn('border bg-black text-white dark:bg-white dark:text-black p-3 rounded-md flex justify-center items-center gap-3')}>Enter Jotion <FaArrowRight/></button>
          </Link>
        ) : (
         <LoginBtn st={loginToggle}/>
        )}
        <div className="flex items-center justify-center h-[100%] w-[100%]">
         <section className={`z-50 h-screen w-screen bg-opacity-20 flex items-center justify-center bg-white border text-white dark:text-black ${!onScreenLogin ? "hidden" : ""}`}>
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
        </div>
        
      </>
              
     
    )
  }