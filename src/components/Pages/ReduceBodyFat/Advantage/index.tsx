'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import Item12 from '~/assets/ReduceBodyFat/Item-12.png'
import Item13 from '~/assets/ReduceBodyFat/Item-13.png'
import Item14 from '~/assets/ReduceBodyFat/Item-14.png'
import Item15 from '~/assets/ReduceBodyFat/Item-15.png'

interface AdvantageItem {
  image: StaticImageData;
}

const advantageItems: AdvantageItem[] = [
  { image: Item12 },
  { image: Item13 },
  { image: Item14 },
];

const Advantage = () => {
  return (
    <div className="bg-ReduceBodyFat-4 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 sm:flex block items-center">
          <div className="sm:w-3/5 w-full">
              <div className="max-w-[650px] sm:text-start text-center">
                <h2 className='text-white text-4xl font-bold pb-4'>ĐỘI NGŨ Y BÁC SĨ THỰC HIỆN GIẢM MỠ TOÀN THÂN</h2>
                <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>GIÀU KINH NGHIỆM</h1>
                <h2 className='text-white text-base font-bold pb-4'>Tại Thẩm mỹ Quốc tế Linh Anh, đội ngũ bác sĩ điều trị cho các ca thừa cân, giảm mỡ toàn thân đều có hơn 10 năm kinh nghiệm. Điều trị thành công hơn 1000+ ca giảm béo.</h2>
              </div>
              {/*  */}
              <div className="flex text-center gap-4">
                {advantageItems.map((item, index) => (
                  <div key={index} className="">
                    <Image src={item.image} width={228} height={290} alt='Item Spa'/>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <EffectButton href={'/'} title='NHẬN TƯ VẤN TỪ BÁC SĨ'/>
              </div>
          </div>
          <div className="sm:w-2/5 w-full">
              <Image src={Item15} alt="Item Spa"/>
              <h2 className='text-white text-2xl text-center font-bold pb-4'>BÁC SĨ</h2>
              <h1 className='bg-gradientText text-cosmetic text-center font-bold text-3xl pb-4'>NGUYỄN HOÀNG MINH</h1>
              <h2 className='text-white text-base font-bold pb-4'>Hơn 10 năm kinh nghiệm trong lĩnh vực giảm mỡ công nghệ cao Tốt nghiệp Đại học Y khoa Phạm Ngọc Thạch - Có hơn 30 công trình nghiên cứu về giảm mỡ toàn thân không xâm lấn.</h2>
          </div>
      </div>
    </div>
  )
}

export default Advantage;
