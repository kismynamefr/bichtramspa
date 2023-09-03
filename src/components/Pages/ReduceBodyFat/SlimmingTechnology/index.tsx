'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import Item16 from '~/assets/ReduceBodyFat/Item-16.png'
import Item17 from '~/assets/ReduceBodyFat/Item-17.png'



const SlimmingTechnology = () => {
  return (
    <div className="bg-ReduceBodyFat-3 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 gap-10 flex items-center">
        <div className="w-2/5 sm:block hidden">
            <Image src={Item16} alt="Item Spa"/>
        </div>
        <div className="sm:w-3/5 w-full">
          <div className="max-w-[650px] text-center">
            <h1 className='bg-gradientText text-cosmetic font-bold text-2xl pb-4'>CÔNG NGHỆ</h1>
            <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>GIẢM BÉO HIỆN ĐẠI</h1>
            <h2 className='text-white text-4xl font-bold pb-4'>HỦY MỠ CẤP TỐC ĐIÊU KHẮC ĐƯỜNG CONG</h2>
            <h2 className='text-white text-justify text-base font-bold pb-4'>Trang thiết bị giảm béo tại Linh Anh được nhập khẩu trực tiếp từ các tập đoàn thẩm mỹ hàng đầu ở Hoa Kỳ và châu Âu, đáp ứng tiêu chuẩn khắt khe nhất về chất lượng và độ an toàn, giúp khách hàng giảm béo trúng đích mà không tốn sức, không xâm lấn, không biến chứng.</h2>
          </div>
          <div className="flex text-center gap-4">
            <Image src={Item17} width={500} height={255} alt='Item Spa'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlimmingTechnology;
