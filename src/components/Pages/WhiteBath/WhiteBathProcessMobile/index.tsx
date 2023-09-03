import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Step1 from '~/assets/WhiteBath/Step1-mb.png'
import Step2 from '~/assets/WhiteBath/Step2-mb.png'
import Step3 from '~/assets/WhiteBath/Step3-mb.png'
import Step4 from '~/assets/WhiteBath/Step4-mb.png'
import Step5 from '~/assets/WhiteBath/Step5-mb.png'
import Step6 from '~/assets/WhiteBath/Step6-mb.png'
import Step7 from '~/assets/WhiteBath/Step7-mb.png'


interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
    description: string,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Step1,
        alt: "Step 1",
        step: "BƯỚC 1",
        title: "THĂM KHÁM VÀ TƯ VẤN",
        description : "Bác sĩ chuyên khoa Da liễu trực tiếp thăm khám tình trạng da và tư vấn liệu trình tắm trắng.",
    },
    {
        link: Step2,
        alt: "Step 2",
        step: "BƯỚC 2",
        title: "TẨY TẾ BÀO CHẾT CHO DA",
        description : "Tẩy tế bào chết nhằm loại bỏ bụi bẩn, giúp dưỡng chất thẩm thấu sâu vào da.",
    },
    {
        link: Step3,
        alt: "Step 3",
        step: "BƯỚC 3",
        title: "Ủ TINH CHẤT COLLAGEN TƯƠI",
        description : "Tiến hành ủ tinh chất Collagen tươi để da căng mịn và tươi trẻ hơn.",
    },
    {
        link: Step4,
        alt: "Step4",
        step: "",
        title: "AN TOÀN TUYỆT ĐỐI",
        description : "Máy móc hiện đại, nguyên liệu thiên nhiên nhập khẩu, không gây kích ứng, không bào mòn da.",
    },
    {
        link: Step5,
        alt: "Step 4",
        step: "BƯỚC 4",
        title: "TẮM TRẮNG BẰNG CÔNG NGHỆ LUXURY YOUNG BODY",
        description : "Ứng dụng công nghệ nhiệt quang đa điểm phá vỡ các tầng hắc tố melanin, giúp làn da sáng mịn ẩm mượt.",
    },
    {
        link: Step6,
        alt: "Step 5",
        step: "BƯỚC 5",
        title: "TẮM LẠI BẰNG NƯỚC ẤM",
        description : "Độ ấm của nước ấm sẽ giúp tái tạo năng lượng cho làn da của bạn.",
    },
    {
        link: Step7,
        alt: "Step 6",
        step: "BƯỚC 6",
        title: "THOA KEM DƯỠNG ẨM",
        description : "Kem dưỡng ẩm giúp làn da không bị khô sạm, ẩm mượt, mềm mại hơn.",
    },
];

const WhiteBathProcessMobile = () => {
    return (
      <div className="sm:hidden block mt-5 max-w-[1400px] m-auto items-center">
        {procedureItem.map((item, index) => (
          <div key={index} className='pb-12'>
            <div className="relative flex flex-col justify-center items-center">
                <Image
                  src={item.link}
                  alt={item.alt}
                  className='object-cover object-center pl-4'
                  width={588}
                  height={726}
                />
              <div className="px-5 mt-2 text-center">
                <p className='bg-gradientText text-cosmetic font-bold text-lg'>{item.step}</p>
                <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                <p className='text-white mt-2 text-sm'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default WhiteBathProcessMobile;
