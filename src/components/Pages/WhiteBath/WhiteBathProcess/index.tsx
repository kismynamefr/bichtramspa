import React from 'react'
import Image, {StaticImageData} from 'next/image';
import WhiteBathProcessMobile from '../WhiteBathProcessMobile';

import Item21 from '~/assets/WhiteBath/Item-21.png'
import Item22 from '~/assets/WhiteBath/Item-22.png'
import Item23 from '~/assets/WhiteBath/Item-23.png'
import Item24 from '~/assets/WhiteBath/Item-24.png'
import Item25 from '~/assets/WhiteBath/Item-25.png'
import Item26 from '~/assets/WhiteBath/Item-26.png'
import Item27 from '~/assets/WhiteBath/Item-27.png'
import Item28 from '~/assets/WhiteBath/Item-28.png'


interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
    description: string,
    width: number,
    height: number,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Item21,
        alt: "Step 1",
        step: "BƯỚC 1",
        title: "THĂM KHÁM VÀ TƯ VẤN",
        description : "Bác sĩ chuyên khoa Da liễu trực tiếp thăm khám tình trạng da và tư vấn liệu trình tắm trắng.",
        width: 313,
        height: 363,
    },
    {
        link: Item22,
        alt: "Step 2",
        step: "BƯỚC 2",
        title: "TẨY TẾ BÀO CHẾT CHO DA",
        description : "Tẩy tế bào chết nhằm loại bỏ bụi bẩn, giúp dưỡng chất thẩm thấu sâu vào da.",
        width: 313,
        height: 363,
    },
    {
        link: Item23,
        alt: "Step 3",
        step: "BƯỚC 3",
        title: "Ủ TINH CHẤT COLLAGEN TƯƠI",
        description : "Tiến hành ủ tinh chất Collagen tươi để da căng mịn và tươi trẻ hơn.",
        width: 313,
        height: 363,
    },
    {
        link: Item24,
        alt: "Item Spa",
        step: "",
        title: "",
        description : "",
        width: 460,
        height: 521,
    },
    {
        link: Item25,
        alt: "Step 4",
        step: "BƯỚC 4",
        title: "TẮM TRẮNG BẰNG CÔNG NGHỆ LUXURY YOUNG BODY",
        description : "Ứng dụng công nghệ nhiệt quang đa điểm phá vỡ các tầng hắc tố melanin, giúp làn da sáng mịn ẩm mượt.",
        width: 480,
        height: 294,
    },
    {
        link: Item26,
        alt: "Step 5",
        step: "BƯỚC 5",
        title: "TẮM LẠI BẰNG NƯỚC ẤM",
        description : "Độ ấm của nước ấm sẽ giúp tái tạo năng lượng cho làn da của bạn.",
        width: 313,
        height: 363,
    },
    {
        link: Item27,
        alt: "Step 6",
        step: "BƯỚC 6",
        title: "THOA KEM DƯỠNG ẨM",
        description : "Kem dưỡng ẩm giúp làn da không bị khô sạm, ẩm mượt, mềm mại hơn.",
        width: 313,
        height: 363,
    },
    {
        link: Item28,
        alt: "Step 7",
        step: "BƯỚC 7",
        title: "HƯỚNG DẪN CHĂM SÓC TẠI NHÀ",
        description : "Bác sĩ sẽ kiểm tra lại tình trạng da và hướng dẫn chăm sóc tại nhà sau tắm trắng.",
        width: 313,
        height: 363,
    },
   
   
];

const WhiteBathProcess = () => {
  return (
    <div className="bg-BannerPencil-5 w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h2 className='text-white sm:text-5xl text-3xl font-bold pb-4'>QUY TRÌNH TẮM TRẮNG VĨNH VIỄN</h2>
            <h1 className='bg-gradientText text-cosmetic font-bold sm:text-3xl text-2xl pb-4'>TẠI ... </h1>
        </div>
        <div className="grid-cols-4 gap-5 mt-5 max-w-[1400px] m-auto items-center sm:grid hidden">
            {procedureItem.map((item, index) => (
            <div key={index} className='pb-32'>
                <div className="relative flex">
                    <div className="h-[362px] flex items-center">
                        <Image
                            src={item.link}
                            alt={item.alt}
                            className='object-cover object-center'
                            width={item.width}
                            height={item.height}
                        />
                    </div>
                    <div className="w-80 absolute text-center bottom-0 -mb-28">
                        <p className='bg-gradientText text-cosmetic font-bold mt-2 text-lg'>{item.step}</p>
                        <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                        <p className='text-white mt-2 text-sm'>{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <WhiteBathProcessMobile/>
    </div>
  )
}

export default WhiteBathProcess
