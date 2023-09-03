import React from 'react'
import Image, {StaticImageData} from 'next/image';
import FatLossProcessMobile from '../FatLossProcessMobile';

import Item7 from '~/assets/ReduceBodyFat/Item-7.png'
import Item8 from '~/assets/ReduceBodyFat/Item-8.png'
import Item9 from '~/assets/ReduceBodyFat/Item-9.png'
import Item10 from '~/assets/ReduceBodyFat/Item-10.png'
import Item11 from '~/assets/ReduceBodyFat/Item-11.png'

interface TechnologiesItem {
    link: StaticImageData,
    alt: string,
    step: string,
    title: string,
    description: string,
}

const technologiesItem: Array<TechnologiesItem> = [
    {
        link: Item7,
        alt: "BƯỚC 1",
        step: "BƯỚC 1",
        title: "THĂM KHÁM VÀ TƯ VẤN",
        description : "Bác sĩ sẽ trực tiếp thăm khám, tư vấn tình trạng và mức độ mỡ thừa của khách hàng.",
    },
    {
        link: Item8,
        alt: "BƯỚC 2",
        step: "BƯỚC 2",
        title: "ĐO CHỈ SỐ CƠ THỂ",
        description : "Bác sĩ sẽ tiến hành đo chỉ số cơ thể của khách hàng bằng thiết bị chuyên dụng.",
    },
    {
        link: Item9,
        alt: "BƯỚC 3",
        step: "BƯỚC 3",
        title: "LÊN PHÁC ĐỒ ĐIỀU TRỊ",
        description : "Từ các chỉ số cơ thể, bác sĩ sẽ đưa ra phác đồ điều trị chuẩn cá nhân hóa.",
    },
    {
        link: Item10,
        alt: "BƯỚC 4",
        step: "BƯỚC 4",
        title: "GIẢM MỠ TOÀN THÂN BẰNG CÔNG NGHỆ CAO",
        description : "Bác sĩ sẽ tiến hành điều trị ở những vùng có mỡ thừa ứng dụng công nghệ giảm béo hiện đại, độc quyền.",
    },
    {
        link: Item11,
        alt: "BƯỚC 5",
        step: "BƯỚC 5",
        title: "KIỂM TRA VÀ DẶN DÒ SAU GIẢM MỠ TOÀN THÂN",
        description : "Sau khi giảm mỡ bằng công nghệ cao, bác sĩ sẽ kiểm tra và dặn dò đi đủ liệu trình để đạt kết quả tốt nhất.",
    },
];

const FatLossProcess = () => {
    const topItems = technologiesItem.slice(0, 3); 
    const bottomItems = technologiesItem.slice(3, 5); 
  
    return (
      <div className="bg-SkinTreatment-3 w-full">
        <div className="py-5 text-center max-w-[1400px] m-auto">
          <h2 className='text-white text-3xl font-bold pb-4'>QUY TRÌNH</h2>
          <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-4xl pb-4'>GIẢM MỠ TOÀN THÂN CHUẨN Y KHOA</h1>
        </div>
        <div className="sm:block hidden py-10">
          <div className="grid grid-cols-3 gap-5 !mt-5 max-w-[1400px] m-auto">
            {topItems.map((item, index) => (
              <div key={index}>
                 <div className="relative flex flex-col items-center">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={436}
                    height={553}
                  />
                <div className="w-[436px] px-12 text-center mt-5">
                  <p className='text-white mt-2 text-3xl font-bold'>{item.step}</p>
                  <p className="bg-gradientText text-cosmetic font-bold text-2xl">{item.title}</p>
                  <p className='text-white mt-2 text-lg text-justify'>{item.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-[924px] m-auto !mt-14">
            {bottomItems.map((item, index) => (
              <div key={index} className='m-auto'>
                 <div className="relative flex flex-col items-center">
                  <Image
                    src={item.link}
                    alt={item.alt}
                    className='object-cover object-center'
                    width={436}
                    height={553}
                  />
                <div className="w-[436px] px-12 text-center mt-5">
                  <p className='text-white mt-2 text-3xl font-bold'>{item.step}</p>
                  <p className="bg-gradientText text-cosmetic font-bold text-2xl">{item.title}</p>
                  <p className='text-white mt-2 text-lg text-justify'>{item.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
          <FatLossProcessMobile/>
      </div>
     
    )
  }
  
  export default FatLossProcess;
  
