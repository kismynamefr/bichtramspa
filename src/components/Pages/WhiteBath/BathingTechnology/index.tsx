import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';

import Item6 from '~/assets/WhiteBath/Item-6.png'
import Item7 from '~/assets/WhiteBath/Item-7.png'


interface ObjectItem {
    image: StaticImageData;
    title: string;
    description: string,
}

const objectItem: ObjectItem[] = [
    {
      image: Item6,
      title: 'TẮM TRẮNG TOÀN THÂN LUXURY YOUNG BODY',
      description : 'Tắm trắng Luxury Young Body ứng dụng công nghệ nhiệt quang đa điểm. Khi được khuếch tán ở tần số nhiệt hợp lý (khoảng 3 - 3,8J), nhiệt quang sẽ phá vỡ tận gốc các tầng hắc tố melanin, giúp làn da trắng sáng mỹ mãn.',
    },
    {
      image: Item7,
      title: 'TẮM TRẮNG TOÀN THÂN COLLAGEN BODY',
      description : 'Tắm trắng Collagen Body ứng dụng công nghệ chiếu ánh sáng collagen màu đỏ có bước sóng 633 nanomet, thấm sâu vào da từ 8 đến 10mm, kìm hãm hắc sắc tố melanin phát triển, làm mờ các đốm sạm đen, giúp chị em có được làn da trắng sáng, hồng hào.',

    },
];

const BathingTechnology = () => {
  return (
    <div className="bg-boxtimeSpaColor w-full">
        <div className="max-w-[1400px] m-auto py-12">
            <div className="text-center w-400 sm:hidden block pb-5">
                <h1 className='bg-gradientText text-cosmetic font-bold text-4xl pb-4'>NHỮNG CÔNG NGHỆ TẮM TRẮNG</h1>
                <h2 className='text-white text-3xl font-bold pb-4'>AN TOÀN VÀ HIỆU QUẢ NHẤT</h2>
            </div>
            <div className="sm:flex block items-center justify-center gap-5">
                {objectItem.map((item, index) => (
                <div key={index} className="sm:h-[944px] h-[640px]">
                    <div className="">
                        <Image src={item.image} alt='Item Spa' width={480} height={644}/>
                    </div>
                    <div className="relative w-full sm:max-w-[490px] max-w-[320px] sm:mt-0 mt-2 m-auto text-center -top-[360px] shadow-cus bg-boxImg p-6">
                        <p className='text-white font-bold sm:text-3xl text-2xl py-4'>{item.title}</p>
                        <p className='text-white sm:text-xl text-sm text-justify'>{item.description}</p>
                        <div className="mt-14 pb-2">
                            <EffectButton href={'/'} title='TÌM HIỂU THÊM'/>
                        </div>
                    </div>
                </div>
                ))}
                <div className="text-end w-400 sm:block hidden">
                    <h1 className='bg-gradientText text-cosmetic font-bold text-4xl pb-4'>NHỮNG CÔNG NGHỆ TẮM TRẮNG</h1>
                    <h2 className='text-white text-5xl font-bold pb-4'>AN TOÀN VÀ HIỆU QUẢ NHẤT</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BathingTechnology