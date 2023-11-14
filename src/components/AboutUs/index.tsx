import React from 'react';
import Image from 'next/image';
import Doctor from '~/assets/AboutUs/doctor.png';
import IconItem1 from '~/assets/AboutUs/icon-item-1.png';
import IconItem2 from '~/assets/AboutUs/icon-item-2.png';
import IconItem3 from '~/assets/AboutUs/icon-item-3.png';
import IconItem4 from '~/assets/AboutUs/icon-item-4.png';
import IconItem5 from '~/assets/AboutUs/icon-item-5.png';
import IconItem6 from '~/assets/AboutUs/icon-item-6.png';
import Machines from '~/assets/AboutUs/may-moc.png';

const aboutUsItems = [
  {
    image: IconItem1,
    content: 'ĐIỀU TRỊ THÀNH CÔNG CHO HƠN 3000 KHÁCH HÀNG HẰNG NĂM',
  },
  {
    image: IconItem2,
    content: 'HƠN 15 NĂM KINH NGHIỆM TRONG NGÀNH THẨM MỸ',
  },
  {
    image: IconItem3,
    content: 'TU NGHIỆP TẠI NƯỚC NGOÀI MỸ, NHẬT, HÀN QUỐC,..',
  },
];

const AboutUs: React.FunctionComponent = () => {
  return (
    <div className="bg-about w-full sm:h-auto h-[2000px]">
      <div className="sm:w-1040 w-full mx-auto">
        <div className="flex justify-center items-center text-center p-10">
          <h1 className='text-mainSpaColor font-bold text-3xl custom-gradient-text'>ĐỘI NGÀNH BÁC SĨ, CHUYÊN GIA ĐẦU NGÀNH</h1>
        </div>
        <div className="">
          <Image src={Doctor} alt='Doctor' />
        </div>
        <div className="sm:flex block gap-4">
          {aboutUsItems.map((item, index) => (
            <div key={index} className="sm:w-1/3 sm:mb-0 mb-5 w-full text-center">
              <div className="w-72 mx-auto"> 
                <Image className='mx-auto sm:w-auto w-20' src={item.image} alt={`icon item ${index + 1}`} />
                <p className='text-mainSpaColor font-bold uppercase sm:text-base text-sm mt-4'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:flex block sm:w-1300 w-full mx-auto gap-4 mt-4">
        <div className="sm:w-3/5 w-full">
            <Image src={Machines} alt='Machines' />
        </div>
        <div className="sm:w-2/5 w-full">
            <div className="flex justify-center items-center p-10">
                <h1 className='text-mainSpaColor font-bold text-2xl text-center'>HỆ THỐNG TRANG THIẾT BỊ HIỆN ĐẠI TÂN TIẾN</h1>
            </div>
            <p className='text-base text-justify sm:p-0 px-8 '>Tiên phong trong lĩnh vực thẩm mỹ công nghệ cao, Bích Trâm liên tục đầu tư hệ thống 
            trang thiết bị, máy móc cao cấp được nhập khẩu, chuyên giao trực tiếp từ các tập đoàn làm đẹp hàng đầu Hoa 
            Kỳ và châu Âu. Tất cả đều đáp ứng tiêu chuẩn khắt khe về chất lượng, hiệu quả và độ an toàn của những tổ chức 
            uy tín thế giới như FDA, KFDA và CE.</p>

            <div className="mt-4 px-5 sm:px-0">
                <div className="flex sm:flex-row flex-col items-center py-3">
                    <Image className='sm:w-24 w-20 sm:mb-0 mb-3' src={IconItem4} alt='IconItem' />
                    <p className='text-mainSpaColor sm:text-start text-center font-bold ml-2'>CỤC QUẢN LÝ THỰC PHẨM VÀ DƯỢC PHẨM HOA KỲ</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center py-3">
                    <Image className='sm:w-24 w-20 sm:mb-0 mb-3' src={IconItem5} alt='IconItem' />
                    <p className='text-mainSpaColor sm:text-start text-center font-bold ml-2'>CỤC AN TOÀN DƯỢC PHẨM VÀ THỰC PHẨM HÀN QUỐC</p>
                </div>
                <div className="flex sm:flex-row flex-col items-center py-3">
                    <Image className='sm:w-24 w-20 sm:mb-0 mb-3' src={IconItem6} alt='IconItem' />
                    <p className='text-mainSpaColor sm:text-start text-center font-bold ml-2'>CHỨNG NHẬN KIỂM ĐỊNH CỦA CHÂU ÂU</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default AboutUs;
