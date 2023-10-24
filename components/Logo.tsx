import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const popp = Poppins({
  weight:['400', '700'],
  subsets:['latin'],
})

const Logo = () => {
  return (
    <div className={cn("font-semibold grid grid-cols-2 place-content-center", popp.className)}>
        <Image src={'/logo.svg'} height={50} width={50} alt='link' className="dark:hidden"></Image>
        <Image src={'/logo-dark.svg'} height={50} width={50} alt='link' className="hidden dark:block"></Image>
        <h1 className={cn('grid place-content-center')}>Jalias</h1>
    </div>
  )
}

export default Logo