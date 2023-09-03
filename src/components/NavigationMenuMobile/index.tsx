import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconHelp from '~/assets/NavigationMenuMobile/help-icon.png'
import IconPhone from '~/assets/NavigationMenuMobile/telephone.png'
import IconCalendar from '~/assets/NavigationMenuMobile/calendar.png'
import IconLocation from '~/assets/NavigationMenuMobile/location.png'
import IconPromotion from '~/assets/NavigationMenuMobile/icon-promotion.gif'

const NavigationMenuMobile = () => {
  return (
  <div className="block sm:hidden z-[100] fixed w-full h-[100px] m-0 p-0 outline-0 bottom-0">
    <div className="bg-navi-menu">
      <Link href={"/"} className='menu-mobile-custom'>
        <Image src={IconHelp} alt='Contact Icon'/>
      </Link>
      <ul>
        <li>
          <Link href={"/"} className='grid justify-center items-center gap-2'>
            <span className='flex justify-center items-center'><Image src={IconPhone} alt='Phone Icon' className='w-7 h-7'/></span>
            <span className='font-bold text-mainSpaColor'>Gọi điện</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className='grid justify-center items-center gap-2'>
            <span className='flex justify-center items-center'><Image src={IconCalendar} alt='Phone Icon' className='w-7 h-7'/></span>
            <span className='font-bold text-mainSpaColor'>Đặt lịch</span>
          </Link>
        </li>
        <li></li>
        <li>
          <Link href={"/"} className='grid justify-center items-center gap-2'>
            <span className='flex justify-center items-center'><Image src={IconLocation} alt='Phone Icon' className='w-7 h-7'/></span>
            <span className='font-bold text-mainSpaColor'>Chi nhánh</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className='grid justify-center items-center gap-2'>
            <span className='flex justify-center items-center'><Image src={IconPromotion} alt='Phone Icon' className='w-10 h-10'/></span>
            <span className='font-bold text-orange-700'>Khuyến mãi</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default NavigationMenuMobile;
