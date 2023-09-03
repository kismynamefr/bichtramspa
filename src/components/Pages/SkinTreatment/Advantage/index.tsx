import React from 'react';
import Image from 'next/image';
import Item21 from '~/assets/SkinTreatment/Item-21.png';
import BgboxImage from '~/assets/SkinTreatment/bg-boxImage.png';
import EffectButton from '~/components/EffectButton';

const advantageItems = [
  '1. PHÁC ĐỒ ĐIỀU TRỊ DA CÁ NHÂN HÓA VÀ CHUẨN Y KHOA',
  '2. HIỆU QUẢ NGAY LẦN ĐẦU TIÊN THỰC HIỆN',
  '3. CÔNG NGHỆ KHÔNG XÂM LẤN, KHÔNG ĐAU, KHÔNG SƯNG',
  '4. CAM KẾT HIỆU QUẢ BẰNG VĂN BẢN',
  '5. TƯ VẤN, CHĂM SÓC TRƯỚC VÀ SAU ĐIỀU TRỊ TẬN TÌNH, CHU ĐÁO'
];

const Advantage = () => {
  return (
    <div className="bg-SkinTreatment-6 sm:h-[740px] h-auto w-full">
      <div className="w-full max-w-[700px] py-10 m-auto text-center">
        <h2 className='text-white text-4xl font-bold pb-4'>THẨM MỸ QUỐC TẾ LINH ANH</h2>
        <h2 className='text-white text-4xl font-bold pb-4'>THẨM MỸ CHUẨN 5 SAO</h2>
      </div>
      <div className="sm:flex block w-full max-w-[1400px] m-auto items-center">
        <div className="sm:w-6/12 w-full">
          <Image src={Item21} width={700} alt='Icon Spa' className='relative top-9'/>
        </div>
        <div className="sm:w-6/12 w-full bg-Advantage sm:block hidden">
          <div className="z-20 relative">
            {advantageItems.map((item, index) => (
              <p key={index} className="text-white text-justify font-bold text-base max-w-xl py-2 m-auto">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-36 ml-10 pb-8">
            <EffectButton href={'/'} title='NHẬN TƯ VẤN'/>
          </div>
        </div>
        <div className="sm:w-6/12 w-full sm:hidden block">
          <div className="z-20 relative">
            {advantageItems.map((item, index) => (
              <div key={index} className="text-center max-w-xs w-full m-auto">
                  <Image src={BgboxImage} width={400} height={140} alt='Icon Spa' />
                <div className="relative -top-24 z-10 mx-auto w-72">
                  <p className="absolute inset-0 flex items-center justify-center text-white sm:text-justify font-bold text-base max-w-xs p-2 z-20">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pb-8">
            <EffectButton href={'/'} title='NHẬN TƯ VẤN'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage;
