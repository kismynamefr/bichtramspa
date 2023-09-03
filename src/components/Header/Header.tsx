'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import logo from "~/assets/header/logo.png"
import Image from 'next/image'
import { FiAlignCenter } from 'react-icons/fi'
import MenuMobile from '~/components/MenuMobile'


const Header: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className='w-full flex justify-center items-center h-[70px] sm:h-auto'>
            <div className='rounded-full p-2 absolute left-5 text-white bg-mainSpaColor block sm:hidden cursor-pointer' onClick={handleMenuOpen}>
                <FiAlignCenter/>
            </div>
            {isMenuOpen && <MenuMobile onClose={handleMenuClose} />}
            <Link href={"/"} className='flex justify-center items-center w-fit -mt-5 sm:mt-0'>
                <Image src={logo} alt="logo" className='sm:w-[68%] w-full'/>
            </Link>
        </div>
    )
}

export default Header
