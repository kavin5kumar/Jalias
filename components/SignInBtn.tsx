
'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { signIn } from "next-auth/react";

type Props = {
    name: string,
    loc: string,
}

const SignInBtn = ({name, loc}: Props) => {
  return (
    <>
        <button onClick={() => signIn(`${name.toLowerCase()}`, { callbackUrl: '/' })} className={cn("h-12 w-54 border bg-white text-black px-4 rounded-md flex justify-center items-center gap-5 hover:bg-slate-200 transition")}>
            <Image src={loc} className={cn("w-10 h-9")} width="40" height="20" alt="St"></Image>
            <p>Sign in With {name}</p>
        </button>
    </>
  )
}

export default SignInBtn