import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item10 from '~/assets/PencilEffectTattooSpray/item-10.png'
import Item11 from '~/assets/PencilEffectTattooSpray/item-11.png'
import Item12 from '~/assets/PencilEffectTattooSpray/item-12.png'
import Item13 from '~/assets/PencilEffectTattooSpray/item-13.png'
import Item14 from '~/assets/PencilEffectTattooSpray/item-14.png'
import Item15 from '~/assets/PencilEffectTattooSpray/item-15.png'

interface ProcedureItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
    description: string,
}

const procedureItem: Array<ProcedureItem> = [
    {
        link: Item10,
        alt: "Step 1",
        step: "BƯỚC 1",
        title: "THĂM KHÁM VÀ TƯ VẤN",
        description : "Bạn sẽ biết được tình trạng chân mày hiện tại và dáng mày nào phù hợp với khuôn mặt.",
    },
    {
        link: Item11,
        alt: "Step 2",
        step: "BƯỚC 2",
        title: "VỆ SINH VÙNG DA CHÂN MÀY",
        description : "Vệ sinh da chân mày trước khi phun giúp bảo vệ da, tránh viêm nhiễm.",
    },
    {
        link: Item12,
        alt: "Step 3",
        step: "BƯỚC 3",
        title: "Ủ TÊ",
        description : "Bạn sẽ được ủ tê vùng chân mày để tránh cảm giác đau rát, khó chịu khi phun xăm.",
    },
    {
        link: Item13,
        alt: "Step 4",
        step: "BƯỚC 4",
        title: "VẼ PHÁC THẢO DÁNG CHÂN MÀY",
        description : "Master phác thảo dáng mày đúng tỷ lệ khuôn mặt của bạn.",
    },
    {
        link: Item14,
        alt: "Step 5",
        step: "BƯỚC 5",
        title: "PHUN MÀY HIỆU ỨNG BÚT CHÌ",
        description : "Master dùng đầu kim nano chuyên dụng đưa mực vào lớp thượng bì theo dáng mày đã phác thảo.",
    },
    {
        link: Item15,
        alt: "Step 6",
        step: "BƯỚC 6",
        title: "KIỂM TRA VÀ DẶN DÒ",
        description : "Bạn sẽ được Master kiểm tra và dặn dò cách chăm sóc, kiêng cữ sau phun mày.",
    },
   
   
];

const Procedure = () => {
  return (
    <div className="bg-BannerPencil-5 w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
            <h2 className='text-white text-5xl font-bold pb-4'>QUY TRÌNH PHUN MÀY </h2>
            <h2 className='text-white text-5xl font-bold pb-4'>HIỆU ỨNG BÚT CHÌ</h2>
            <h1 className='bg-gradientText text-cosmetic font-bold text-3xl pb-4'>TẠI ... </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 max-w-[1400px] m-auto">
            {procedureItem.map((item, index) => (
            <div key={index}>
                <div className="relative flex">
                    <Image
                        src={item.link}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={833}
                        height={567}
                    />
                    <div className="w-44 bottom-16 left-[246px] absolute">
                        <p className='bg-gradientText text-cosmetic font-bold mt-2 text-lg'>{item.step}</p>
                        <p className='text-white mt-2 font-bold text-sm'>{item.title}</p>
                        <p className='text-white mt-2 text-sm'>{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className="text-center pb-8">
            <EffectButton href={'/'} title='NHẬN TRỢ GIÁ 65%'/>
        </div>
    </div>
  )
}

export default Procedure
