import React from 'react'
import Image, {StaticImageData} from 'next/image';
import ProcedureMobile from '../ProcedureMobile';

import Step1 from '~/assets/Waxxing/Step-1.png'
import Step2 from '~/assets/Waxxing/Step-2.png'
import Step3 from '~/assets/Waxxing/Step-3.png'
import Step4 from '~/assets/Waxxing/Step-4.png'
import Step5 from '~/assets/Waxxing/Step-5.png'
import Step6 from '~/assets/Waxxing/Step-6.png'

interface TechnologiesItem {
    link: StaticImageData,
    alt: string,
    title: string,
}

const technologiesItem: Array<TechnologiesItem> = [
    {
        link: Step1,
        alt: "Step1",
        title: "BÁC SĨ CHUYÊN KHOA THĂM KHÁM, TƯ VẤN",
    },
    {
        link: Step2,
        alt: "Step2",
        title: "LÀM SẠCH, SÁT KHUẨN VÙNG DA CẦN TRIỆT LÔNG",
    },
    {
        link: Step3,
        alt: "Step3",
        title: "BÔI GEL LẠNH LÊN VÙNG DA TRIỆT",
    },
    {
        link: Step4,
        alt: "Step4",
        title: "TIẾN HÀNH TRIỆT LÔNG VỚI ÁNH SÁNG IPL VÀ RF",
    },
    {
        link: Step5,
        alt: "Step5",
        title: "VỆ SINH VÀ KIỂM TRA LẠI TÌNH TRẠNG",
    },
    {
        link: Step6,
        alt: "Step6",
        title: "BÁC SĨ HƯỚNG DẪN CHĂM SÓC TẠI NHÀ",
  },
];

const Procedure = () => {
    const topItems = technologiesItem.slice(0, 3); 
    const bottomItems = technologiesItem.slice(3, 6); 
  
    return (
      <div className="bg-SkinTreatment-3 w-full">
        <div className="py-10 text-center max-w-[1400px] m-auto">
          <h1 className='text-white font-bold sm:text-5xl text-4xl pb-4'>QUY TRÌNH PHUN XĂM TRIỆT LÔNG VĨNH VIỄN</h1>
          <h2 className='bg-gradientText text-cosmetic text-3xl font-bold pb-4'>TẠI BÍCH TRÂM</h2>
        </div>
        <div className="sm:block hidden">
          <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto">
            {topItems.map((item, index) => (
              <div key={index}>
                <div className="relative flex">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={436}
                    height={553}
                  />
                  <div className="w-[436px] px-16 text-center bottom-11 absolute">
                      <p className="text-white !mt-2 m-auto max-w-[270px] font-bold text-xl">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto">
            {bottomItems.map((item, index) => (
              <div key={index}>
                <div className="relative flex">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={436}
                    height={553}
                  />
                  <div className="w-[436px] px-16 text-center bottom-11 absolute">
                      <p className="text-white !mt-2 m-auto max-w-[270px] font-bold text-xl">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProcedureMobile/>
      </div>
     
    )
  }
  
  export default Procedure;
  
