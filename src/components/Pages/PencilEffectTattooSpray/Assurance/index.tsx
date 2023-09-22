'use client'
import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Item16 from '~/assets/PencilEffectTattooSpray/item-16.png'
import Item17 from '~/assets/PencilEffectTattooSpray/item-17.png'
import Item18 from '~/assets/PencilEffectTattooSpray/item-18.png'
import Item19 from '~/assets/PencilEffectTattooSpray/item-19.png'
import Item20 from '~/assets/PencilEffectTattooSpray/item-20.png'
import Item21 from '~/assets/PencilEffectTattooSpray/item-21.png'

interface AssuranceItem {
    link: StaticImageData,
    alt: string,
    title: string,
}

const assuranceItem: Array<AssuranceItem> = [
    {
        link: Item16,
        alt: 'Item Spa',
        title: "Master hàng đầu trong lĩnh vực phun xăm trực tiếp thực hiện",
    },
    {
        link: Item17,
        alt: 'Item Spa',
        title: "Thời gian thực hiện nhanh, đẹp ngay sau 60 phút",
    },
    {
        link: Item18,
        alt: 'Item Spa',
        title: "Hàng nghìn ưu đãi, voucher hấp dẫn",
    },
    {
        link: Item19,
        alt: 'Item Spa',
        title: "Màu mực cao cấp, nhập khẩu trực tiếp từ Mỹ, Anh, Hàn Quốc",
    },
    {
        link: Item20,
        alt: 'Item Spa',
        title: "Ứng dụng công nghệ hiện đại, thiết bị vô trùng",
    },
    {
        link: Item21,
        alt: 'Item Spa',
        title: "Không đau, không xâm lấn, không cần nghỉ dưỡng",
    },
];

const Assurance: React.FC = () => {
  return (
    <div className="bg-BannerPencil-6 w-full">
        <div className="py-10 text-center max-w-[1400px] m-auto">
            <div className="flex gap-2 items-center justify-center">
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>THAY MÀY ĐỔI SẮC </h1>
                <h2 className='text-white text-3xl font-bold pb-4'>VỚI KỸ THUẬT</h2>
            </div>
            <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>PHUN MÀY HIỆU ỨNG BÚT CHÌ</h1>
            <h2 className='text-white text-3xl font-bold pb-4'>TẠI BÍCH TRÂM</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto pb-10">
            {assuranceItem.map((item, index) => (
            <div key={index}>
                <div className="text-center pb-4 w-[413px]">
                    <Image
                        src={item.link}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={413}
                        height={269}
                    />
                    <p className='text-white mt-2 text-base'>{item.title}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Assurance;
