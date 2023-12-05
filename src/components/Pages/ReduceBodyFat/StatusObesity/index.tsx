import React from 'react';
import Image, { StaticImageData } from 'next/image';
import EffectButton from '~/components/EffectButton';
import Item18 from '~/assets/ReduceBodyFat/Item-18.png';
import TitleCenter from '~/assets/ReduceBodyFat/banner-title-2.png';
import Item19 from '~/assets/ReduceBodyFat/Item-20.png';
import Item20 from '~/assets/ReduceBodyFat/Item-19.png';
import Item21 from '~/assets/ReduceBodyFat/Item-21.png';
import Item22 from '~/assets/ReduceBodyFat/Item-22.png';

interface AdvantageItem {
  image: StaticImageData;
  title: string;
  alt: string;
  destription: string;
}

const advantageItems: AdvantageItem[] = [
  { 
    image: Item19, 
    alt: 'Item SPpa', 
    title: 'ẢNH HƯỞNG ĐẾN XƯƠNG KHỚP',
    destription: 'Mỡ thừa trong cơ thể sẽ khiến xương khớp chịu một áp lực rất lớn, lâu dần dễ bị thoái hoá và đau nhức, đi lại khó khăn.',
  },
  { 
    image: Item21, 
    alt: 'Item SPpa', 
    title: 'NGUY CƠ MẮC BỆNH TIỂU ĐƯỜNG',
    destription: 'Nhiều chuyên gia chỉ ra rằng độ lớn của vòng 2 tỷ lệ thuận với nguy cơ bị bệnh tiểu đường.',
  },
  { 
    image: Item20, 
    alt: 'Item SPpa', 
    title: 'NGUY CƠ MẮC BỆNH TIM MẠCH',
    destription: 'Người bị béo phì thường đi kèm với các rối loạn mỡ trong máu hoặc cholesterol cao gây tăng huyết áp, đột quỵ, nhồi máu cơ tim,...',
  },
  { 
    image: Item22, 
    alt: 'Item SPpa', 
    title: 'RỐI LOẠN NỘI TIẾT TỐ',
    destription: 'Mỡ thừa càng tăng thì nội tiết tố càng dễ bị rối loạn dẫn đến tình trạng như mất ngủ, dễ cáu gắt, da nổi mụn,...',
  },
 
];

const StatusObesity = () => {
  const firstColumn = advantageItems.slice(0, 2);
  const secondColumn = advantageItems.slice(2);
  return (
    <div className="bg-boxtimeSpaColor w-full">
      <div className="py-5 text-center max-w-[1400px] m-auto">
        <h2 className='text-white text-3xl font-bold pb-4'>THỪA CÂN BÉO PHÌ</h2>
        <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-4xl pb-4'>GÂY HẠI CHO SỨC KHỎE</h1>
      </div>
      <div className="max-w-[1400px] m-auto py-5 px-10 items-center sm:flex hidden">
        <div className="w-3/5 flex justify-start items-start">
          <div className="flex flex-col mt-10 m-auto gap-40 relative">
            {firstColumn.map((item, index) => (
              <div key={index} className='w-[650px]'>
                <div className="flex">
                  <div className="">
                    <Image src={item.image} width={279} height={202} alt={item.alt} className='sm:block hidden'/>
                  </div>
                  <div className='w-[536px] pl-4 text-start'>
                    <h3 className="bg-gradientText text-cosmetic text-2xl font-bold mt-3">{item.title}</h3>
                    <h3 className="text-white text-sx  mt-3">{item.destription}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col m-auto gap-40 relative -ml-[736px] mt-52 ">
            {secondColumn.map((item, index) => (
              <div key={index} className='w-[650px]'>
              <div className="flex">
                <div className='w-[536px] pr-4 text-end'>
                  <h3 className="bg-gradientText text-cosmetic text-2xl font-bold mt-3">{item.title}</h3>
                  <h3 className="text-white text-sx  mt-3">{item.destription}</h3>
                </div>
                <div className="">
                  <Image src={item.image} width={279} height={202} alt={item.alt} className='sm:block hidden'/>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <Image src={Item18} alt="Item Spa" />
        </div>
      </div>
      <div className="max-w-[1400px] m-auto py-5 px-5 sm:hidden block">
        {advantageItems.map((item, index) => (
          <div key={index} className='w-[400px]'>
            <div className="sm:flex block pb-4">
              <div className="">
                <Image src={item.image} width={350} height={250} alt={item.alt}/>
              </div>
              <div className='w-[350px] pl-4 text-start'>
                <h3 className="bg-gradientText text-cosmetic text-center text-2xl font-bold mt-3">{item.title}</h3>
                <h3 className="text-white text-sx  mt-3">{item.destription}</h3>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default StatusObesity;
