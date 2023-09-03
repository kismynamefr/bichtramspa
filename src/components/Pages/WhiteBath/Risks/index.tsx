import React from 'react';
import Image, { StaticImageData } from 'next/image';

import Item1 from '~/assets/WhiteBath/Item-2.png';
import Item2 from '~/assets/WhiteBath/Item-1.png';
import Item3 from '~/assets/WhiteBath/Item-3.png';
import Item4 from '~/assets/WhiteBath/Item-4.png';
import Item5 from '~/assets/WhiteBath/Item-5.png';

interface RisksItem {
  link: StaticImageData;
  alt: string;
  title: string;
}

const risksItem: Array<RisksItem> = [
    {
        link: Item1,
        alt: "Item 1",
        title: "HỆ LỤY “LỘT TẨY TRẮNG” CẤP TỐC KÉM CHẤT LƯỢNG GÂY TỔN THƯƠNG DA.",
    },
    {
        link: Item2,
        alt: "Item 2",
        title: "LÀN DA BONG TRÓC SẦN SÙI, GIÃN MAO MẠCH.",
    },
    {
        link: Item3,
        alt: "Item 3",
        title: "SUY YẾU LỚP BIỂU BÌ CÓ NGUY CƠ CAO GÂY UNG THƯ DA.",
    },
    {
        link: Item4,
        alt: "Item 4",
        title: "CÁC TẾ BÀO DA BỊ BÀO MÒN, LÃO HÓA VÀ RẤT KHÓ HỒI TRẮNG.",
    },
    {
        link: Item5,
        alt: "Item 5",
        title: "TỐN KÉM THỜI GIAN VÀ TIỀN BẠC NHƯ Ý.",
    },
];

const Risks = () => {
  return (
    <div className="bg-WhiteBath-2 w-full">
      <div className="sm:flex block w-full max-w-[1400px] m-auto justify-center items-center py-10">
        <div className="sm:w-1/3 w-full  sm:text-start text-center sm:py-0 py-5">
          <h2 className='bg-gradientText font-bold text-3xl text-cosmetic '>NHỮNG RỦI RO</h2>
          <h2 className='bg-gradientText font-bold text-3xl text-cosmetic pb-4'>TÌM ẨN</h2>
          <p className='text-white font-bold text-5xl py-2'>KHI TẮM TRẮNG</p>
          <p className='text-white font-bold text-5xl'>KHÔNG ĐÚNG CÁCH</p>
        </div>
        <div className="sm:w-auto w-full sm:block flex">
          {risksItem.slice(0, 2).map((item, index) => (
            <div key={index} className="w-80 h-80">
              <div className="">
                <Image src={item.link} width={295} height={237} alt={item.alt} />
              </div>
              <div className="text-center">
                <p className="text-white sm:text-base text-sm w-full max-w-[230px] m-auto">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:block hidden">
            <div className="sm:w-auto w-full sm:block flex">
            {risksItem.slice(2, 5).map((item, index) => (
                <div key={index} className="w-80 h-80">
                <div className="">
                    <Image src={item.link} width={295} height={237} alt={item.alt} />
                </div>
                <div className="text-center">
                    <p className="text-white sm:text-base text-sm w-full max-w-[230px] m-auto">{item.title}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        <div className="sm:hidden block">
            <div className="sm:w-auto w-full sm:block flex">
            {risksItem.slice(2, 4).map((item, index) => (
                <div key={index} className="w-80 h-80">
                <div className="">
                    <Image src={item.link} width={295} height={237} alt={item.alt} />
                </div>
                <div className="text-center">
                    <p className="text-white sm:text-base text-sm w-full max-w-[230px] m-auto">{item.title}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Risks;
