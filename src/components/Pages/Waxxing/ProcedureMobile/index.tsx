import React from 'react'
import Image, {StaticImageData} from 'next/image';

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

const ProcedureMobile = () => {
    return (
        <div className="sm:hidden block">
          <div className="mt-5 max-w-[1400px] m-auto">
            {technologiesItem.map((item, index) => (
              <div key={index}>
                <div className="relative flex justify-center">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={436}
                    height={553}
                  />
                  <div className="w-[320px] h-28 px-16 text-center bottom-7 absolute shadow-cus bg-boxImg">
                      <p className="text-white !mt-2 m-auto max-w-[270px] all-center h-full w-full font-bold text-xl">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
    )
  }
  
  export default ProcedureMobile;
  
