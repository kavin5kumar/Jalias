import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <>
        <footer className={cn('flex items-center justify-between px-6')}>
        <section className={cn("left h-full grid place-content-center max-sm:hidden")}>
          <Logo/>
        </section>
        <section className={cn("right flex gap-5 max-sm:justify-between max-sm:w-full")}>
          <Link href={'/privacy'}>Privacy Policy</Link>
          <Link href={'/t&c'}>Terms and Conditions</Link>
        </section>
      </footer>
    </>
  )
}

export default Footer