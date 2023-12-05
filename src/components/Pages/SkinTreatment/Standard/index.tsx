import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Item19 from '~/assets/SkinTreatment/Item-19.png';
import Item20 from '~/assets/SkinTreatment/Item-20.png';

interface StandardItem {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const standardItem: StandardItem[] = [
  {
    image: Item19,
    alt: 'ĐỘI NGŨ BÁC SĨ, CHUYÊN GIA',
    title: 'ĐỘI NGŨ BÁC SĨ, CHUYÊN GIA',
    description: 'CÓ HƠN 10 NĂM KINH NGHIỆM',
  },
  {
    image: Item20,
    alt: 'ĐỘI NGŨ BÁC SĨ, CHUYÊN GIA',
    title: 'ĐỘI NGŨ BÁC SĨ, CHUYÊN GIA',
    description: 'ĐƯỢC KIỂM ĐỊNH BỞI FDA (HOA KỲ)',
  },
];

const Standard = () => {
  return (
    <div className="bg-boxtimeSpaColor w-full">
      <div className="w-full max-w-[700px] py-10 m-auto text-center">
        <h2 className='text-white text-4xl font-bold pb-4'>THẨM MỸ QUỐC TẾ BÍCH TRÂM</h2>
        <h2 className='text-white text-4xl font-bold pb-4'>THẨM MỸ CHUẨN 5 SAO</h2>
      </div>
      <div className="sm:flex block w-full max-w-[1400px] m-auto items-center">
        {standardItem.map((item, index) => (
          <div key={index} className="sm:w-6/12 w-full">
            <Image src={item.image} alt={item.alt} className=' relative top-9'/>
            <div className="w-full flex flex-col items-center py-16 sm:px-0 px-4 text-center">
              <p className="text-white text-justify font-bold text-2xl max-w-sm m-auto">{item.title}</p>
              <p className="bg-gradientText text-cosmetic mt-2 font-bold text-2xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Standard;
