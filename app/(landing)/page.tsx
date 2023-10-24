import { MiddleBtn } from '@/components/MiddleBtn'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
   <>
      <main className={cn('flex flex-col items-center justify-center text-center min-h-full')}>
        <section className={cn("top flex flex-col w-full justify-center items-center mb-10")}>
          <h1 className={cn('text-5xl font-bold mb-5')}>Your Ideas, Documents, &<br/>Plans. Unified. <br/>Welcome to <span className='underline'>Jalias</span></h1>
          <p className={cn('text-xl mb-5')}>Jalias is the connected workspace where <br/>better, faster work happens.</p>
          <MiddleBtn/>
        </section>
        
        <section className={cn('bottom flex justify-center h-1/2 items-start max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:p-3 max-sm:m-24')}>
          <Image src={'/documents.png'} width={500} height={500} alt='go' className={cn('h-[65%] w-[35%] dark:hidden mb-9 max-sm:w-[60%] max-sm:h-[80%]')}></Image>
          <Image src={'/documents-dark.png'} width={500} height={500} alt='go' className={cn('h-[65%] w-[35%] hidden dark:block mb-9 max-sm:w-[60%] max-sm:h-[80%]')}></Image>
          <Image src={'/reading.png'} width={500} height={500} alt='di' className={cn('h-[65%] w-[35%] dark:hidden max-sm:w-[60%] max-sm:h-[80%]')}></Image>
          <Image src={'/reading-dark.png'} width={500} height={500} alt='di' className={cn('h-[65%] w-[35%] hidden dark:block max-sm:w-[60%] max-sm:h-[80%]')}></Image>
        </section>
      </main>

      
    </>
  )
}
