import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
   <header className='w-full absolute z-10 '>
    <nav className='max-w-[1440px] mx-auto flex-between padding-x padding-y'>
        <Link href='/' className='flex-center'>
            <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain'></Image>
             </Link>


            <CustomButton btnType='button' title='Sign In' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] '></CustomButton>
    </nav>

   </header>
  )
}

export default Navbar