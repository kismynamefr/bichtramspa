import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import SkinTreatmentTechnologiesMobile from '../SkinTreatmentTechnologiesMobile';

import Item7 from '~/assets/SkinTreatment/Item-7.png'
import Item8 from '~/assets/SkinTreatment/Item-8.png'
import Item9 from '~/assets/SkinTreatment/Item-9.png'
import Item10 from '~/assets/SkinTreatment/Item-10.png'
import Item11 from '~/assets/SkinTreatment/Item-11.png'

interface TechnologiesItem {
    link: StaticImageData,
    alt: string,
    title: string,
    description: string,
}

const technologiesItem: Array<TechnologiesItem> = [
    {
        link: Item7,
        alt: "CẤY COLLAGEN TƯƠI",
        title: "CẤY COLLAGEN TƯƠI",
        description : "Cấy collagen tươi là công nghệ cấy vi chạm đưa tinh chất collagen tươi và dưỡng chất thấm sâu vào da giúp điều trị nám, tàn nhang hiệu quả, thúc đẩy quá trình tái tạo, phục hồi da.",
    },
    {
        link: Item8,
        alt: "LASER TONING",
        title: "LASER TONING",
        description : "Toning Laser ứng dụng tia sáng laser có bước sóng 532nm - 1064nm đi vào sâu trong các tế bào da, làm đứt gãy liên kết hắc sắc tố melanin, trị dứt điểm nám và tàn nhang chỉ sau 1 liệu trình.",
    },
    {
        link: Item9,
        alt: "NANO CELL",
        title: "NANO CELL",
        description : "Nano Cell là công nghệ sử dụng tinh chất đặc trị nám và nội sinh tế bào gốc, tác động vào lớp hạ bì, phá huỷ các hắc sắc tố melanin, khóa gốc nám và chặn đứng tình trạng nám tái phát.",
    },
    {
        link: Item10,
        alt: "PRP",
        title: "PRP",
        description : "PRP được xem là bước tiến mới trong ngành thẩm mỹ, công nghệ làm đẹp chiết tách tiểu cầu từ máu tự thân và tiêm ngược lại vào da giúp giải quyết nhiều vấn đề da cùng một lúc.",
    },
    {
        link: Item11,
        alt: "COMBO ĐIỀU TRỊ DA CHUYÊN SÂU",
        title: "COMBO ĐIỀU TRỊ DA CHUYÊN SÂU",
        description : "Combo điều trị da chuyên sâu giúp giải quyết triệt để nhiều vấn đề về da như mụn, nám, tàn nhang... và hỗ trợ dưỡng da hồi phục nhanh chóng sau điều trị.",
    },
];

const SkinTreatmentTechnologies = () => {
    const topItems = technologiesItem.slice(0, 3); 
    const bottomItems = technologiesItem.slice(3, 5); 
  
    return (
      <div className="bg-SkinTreatment-3 w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
          <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-4xl pb-4'>QUY TRÌNH PHUN XĂM CHÂN MÀY</h1>
          <h2 className='text-white text-3xl font-bold pb-4'>TẠI ...</h2>
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
                      <p className="bg-gradientText text-cosmetic mt-2 font-bold text-2xl">{item.title}</p>
                      <p className='text-white mt-2 text-base text-justify'>{item.description}</p>
                    <EffectButton href={'/'} title="TÌM HIỂU THÊM" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5 max-w-[924px] m-auto">
            {bottomItems.map((item, index) => (
              <div key={index} className='m-auto'>
                <div className="relative flex">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={833}
                    height={567}
                  />
                  <div className="w-[436px] px-16 text-center bottom-11 absolute">
                    <p className="bg-gradientText text-cosmetic mt-2 font-bold text-2xl">{item.title}</p>
                    <p className='text-white mt-2 text-base text-justify'>{item.description}</p>
                    <EffectButton href={'/'} title="TÌM HIỂU THÊM" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          <SkinTreatmentTechnologiesMobile/>
      </div>
     
    )
  }
  
  export default SkinTreatmentTechnologies;
  
