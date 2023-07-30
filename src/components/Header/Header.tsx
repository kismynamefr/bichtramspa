import React from 'react'
import Link from 'next/link'
import logo from "~/assets/header/logo.png"
import Image from 'next/image'

const Header: React.FunctionComponent = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <Link href={"/"} className='flex justify-center items-center w-fit'>
                <Image src={logo} alt="logo" className='w-[68%]'/>
            </Link>
        </div>
    )
}

export default Header
