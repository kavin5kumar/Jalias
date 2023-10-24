import DocNavg from '@/components/DocNavg';
import { NextAuthProvider } from '@/components/Others/NextAuthProvider';
import React from 'react'



function MainLayout({
    children
    }: {
    children: React.ReactNode;
    }) {
  return (
    <div>
      <NextAuthProvider>
        <DocNavg/>
        {children}
      </NextAuthProvider>
    </div>
  )
}

export default MainLayout