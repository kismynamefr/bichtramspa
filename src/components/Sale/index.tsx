import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoTitle from '~/assets/Sale/title.png';
import IconHot from '~/assets/Sale/hot.png';
import Sale1 from '~/assets/Sale/sale-1.png';
import Sale2 from '~/assets/Sale/sale-2.png';
import Sale3 from '~/assets/Sale/sale-3.png';
import Sale4 from '~/assets/Sale/sale-4.png';
import Sale5 from '~/assets/Sale/sale-5.png';
import Sale6 from '~/assets/Sale/sale-6.png';
import Sale7 from '~/assets/Sale/sale-7.png';
import Sale8 from '~/assets/Sale/sale-8.png';
import Sale9 from '~/assets/Sale/sale-9.png';

const saleItems = [
  {
    id: 1,
    image: Sale1,
    title: 'Sale Item 1',
    hotIcon: IconHot,
  },
  {
    id: 2,
    image: Sale2,
    title: 'Sale Item 2',
  },
  {
    id: 3,
    image: Sale3,
    title: 'Sale Item 3',
    hotIcon: IconHot,
  },
  {
    id: 4,
    image: Sale4,
    title: 'Sale Item 4',
  },
  {
    id: 5,
    image: Sale5,
    title: 'Sale Item 5',
  },
  {
    id: 6,
    image: Sale6,
    title: 'Sale Item 6',
  },
];

const Sale = () => {
  return (
    <div className="w-full bg-boxtimeSpaColor z-10 h-[1110px] md:block hidden relative">
      <div className="mx-auto w-full">
        <div className="">
           <div className="py-10 text-center max-w-[1400px] m-auto">
            <h1 className='text-white font-bold md:text-5xl text-4xl pb-4'>SIÊU ƯU ĐÃI 20%</h1>
            <h2 className='bg-gradientText text-cosmetic text-3xl font-bold pb-4'>TẠI BÍCH TRÂM</h2>
          </div>
        </div>
        <div className="md:flex block flex-row flex-wrap justify-center md:w-1300 w-full mx-auto">
            {/* <div className="md:w-5/12 w-full md:pr-5 pr-0">
            <ul className='md:px-0 px-3'>
                {saleItems.map((item) => (
                <li key={item.id} className="mb-4 md:flex block justify-end items-center cursor-pointer hover:scale-105">
                    {item.hotIcon && (
                    <Image className="hidden md:block w-1/5 -mr-3" src={item.hotIcon} alt="Hot Icon" />
                    )}
                    <Image className='md:w-4/5 w-full' src={item.image} alt={item.title} />
                </li>
                ))}
            </ul>
            </div> */}
          <div className="md:w-7/12 w-full max-w-screen-md md:pl-5 pl-0">
            <div className="bg-white rounded-3xl w-full py-5 px-10">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h2 className='mainSpaColor text-base uppercase font-bold'>Phun xăm mày - môi - mí </h2>
                        <ul className='mainSpaColor list-disc ml-4 py-4'>
                            <li className='py-1'>Giảm 65% khi phun xăm một vùng riêng lẻ</li>
                            <li className='py-1'>Giảm thêm 10% khi đi từ 2 người</li>
                            <li className='py-1'>Thực hiện combo mày môi tặng phun mí</li>
                        </ul>
                    </div>
                    <div className="">
                        <Image className='w-52 h-36' src={Sale7} alt='item sale'/>
                    </div>
                </div>
                <div className="flex justify-between pt-2 items-center">
                    <div className="">
                        <h2 className='mainSpaColor text-base uppercase font-bold'>Cấy môi sinh học </h2>
                        <ul className='mainSpaColor list-disc ml-4 py-4'>
                            <li className='py-1'>Giảm 65% khi đăng ký dịch vụ</li>
                        </ul>
                    </div>
                    <div className="">
                        <Image className='w-52 h-36' src={Sale8} alt='item sale'/>
                    </div>
                </div>
                <div className="flex justify-between pt-4 items-center">
                    <div className="">
                        <h2 className='mainSpaColor text-base uppercase font-bold'>Điêu khắc chân mày </h2>
                        <ul className='mainSpaColor list-disc ml-4 py-4'>
                            <li className='py-1'>Giảm 65% khi điêu khắc chân mày</li>
                            <li className='py-1'>Giảm thêm 10% khi đi từ 2 người</li>
                            <li className='py-1'>Thực hiện combo mày môi + phun mí</li>
                            <li className='py-1'>Điêu khắc chân mày phong thuỷ tặng phun mí</li>
                        </ul>
                    </div>
                    <div className="">
                        <Image className='w-52 h-36' src={Sale9} alt='item sale'/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
