'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';
import EffectButton from '~/components/EffectButton';
import BannerTitle from '~/assets/SkinTreatment/banner-title.png'
import BannerTitleMB from '~/assets/SkinTreatment/banner-title-mb.png'
import Item1 from '~/assets/SkinTreatment/Item-1.png'
import Item2 from '~/assets/SkinTreatment/Item-2.png'
import Item3 from '~/assets/SkinTreatment/Item-3.png'
import Item4 from '~/assets/SkinTreatment/Item-4.png'
import Item5 from '~/assets/SkinTreatment/Item-5.png'
import Item6 from '~/assets/SkinTreatment/Item-6.png'


interface OutstandingServicesItem {
    image: StaticImageData;
    alt: string,
    title: string;
    description: string;
}

const outstandingServicesItem: OutstandingServicesItem[] = [
    {
        image: Item1,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ MỤN',
        description: 'Điều trị mụn là giải pháp giúp loại bỏ các loại mụn cứng đầu xuất hiện trên vùng da mụn bọc, mụn trứng cá, mụn đầu đen... gây ảnh hưởng thẩm mỹ và giúp bạn lấy lại sự tự tin.'
    },
    {
        image: Item2,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ NÁM',
        description: 'Điều trị nám là phương pháp ứng dụng công nghệ cao giúp triệt tiêu các loại nám mảng, nám chân sâu, nám di truyền với phác đồ chuẩn cá nhân hóa.',
    },
    {
        image: Item3,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ TÀN NHANG',
        description: 'Điều trị tàn nhang bằng các thiết bị máy móc hiện đại nhất giúp loại bỏ tàn nhang, đồi mồi, tăng sắc tố da và ngăn chúng quay trở lại.',

    },
    {
        image: Item4,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ SẸO',
        description: 'Điều trị sẹo bằng công nghệ hiện đại giúp điều trị sẹo rỗ, sẹo lồi, sẹo lõm một cách nhanh chóng và an toàn.',

    },
    {
        image: Item5,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ THÂM',
        description: 'Các vấn đề thâm nách, thâm mông, thâm vùng kín, thâm quầng mắt, thâm chân, thâm gối, thâm mắt cá chân, thâm mụn... sẽ được điều trị nhanh chóng, an toàn, không xâm lấn.',

    },
    {
        image: Item6,
        alt: "Item Spa",
        title: 'ĐIỀU TRỊ DA CHUYÊN SÂU',
        description: 'Điều trị da chuyên sâu đáp ứng nhu cầu tẩy nốt ruồi, se khít lỗ chân lông, điều trị viêm nang lông, điều trị rạn da trả lại cho chị em một làn da láng mịn, tự nhiên.',

    },
]

const OutstandingServices = () => {
  return (
    <div className="bg-SkinTreatment-2 w-full">
      <div className="max-w-[1400px] m-auto py-20 px-10 text-center">
          <div className="w-full max-w-[700px] m-auto">
              <h1 className='bg-gradientText text-cosmetic font-bold sm:text-5xl text-4xl pb-4'>CÁC DỊCH VỤ ĐIỀU TRỊ DA</h1>
              <h2 className='text-white text-3xl font-bold pb-4'>NỔI BẬT</h2>
          </div>
          <div className="w-full sm:block hidden">
            <Image src={BannerTitle} alt='Banner EyebroSprays' />
          </div>
          <div className="w-full sm:hidden block">
            <Image src={BannerTitleMB} alt='Banner EyebroSprays' />
          </div>
          <div className="grid-cols-3 pt-10 gap-5 sm:grid block">
            {outstandingServicesItem.map((item, index) => (
                <div key={index} className="m-auto sm:pb-0 pb-5">
                    <div className="relative pb-5 boxImage overflow-hidden">
                        <Image
                        src={item.image}
                        alt={item.alt}
                        className="object-cover object-center rounded-2xl"
                        width={436}
                        height={355}
                        />
                        <div className="absolute -mt-20 w-full">
                            <p className="bg-gradientText text-cosmetic mt-2 font-bold text-xl">{item.title}</p>
                        </div>
                        <div className="absolute w-full bg-content-OutstandingServices flex flex-col items-center sm:py-16 py-0">
                            <p className="bg-gradientText text-cosmetic mt-2 font-bold sm:text-2xl text-xl">{item.title}</p>
                            <p className="text-white text-justify sm:text-xl text-base max-w-xs m-auto sm:px-0 px-3">{item.description}</p>
                            <div className="sm:mb-0 mb-10">
                                <EffectButton href={'/'} title="TÌM HIỂU THÊM" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
          
      </div>
    </div>
  )
}
export default OutstandingServices;
