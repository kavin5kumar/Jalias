'use client'
import React from 'react'
import { redirect } from "next/navigation";
import { useSession } from 'next-auth/react';


export default function Page() {
    const { status } = useSession()
  if(status === 'unauthenticated' ) redirect("/");
  
  return (
    <div>page</div>
  )
}

