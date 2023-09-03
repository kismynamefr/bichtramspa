'use client'
import React from 'react'
import Image from 'next/image';
import BgBoxTitile from '~/assets/Waxxing/bg-boxTitle.png'
import BannerCenter from '~/assets/Waxxing/banner-title-5.png'

interface BoxBlock {
    title: string;
    marginLeft?: number;
    marginRight?: number;
}

const boxBlocks: BoxBlock[] = [
    {
      title: 'Công nghệ triệt lông vĩnh viễn mới nhất 2023.',
    },
    {
      title: 'Không gian sang trọng, đảm bảo sự riêng tư, thoải mái.',
    },
    {
      title: 'Không đau, an toàn, hiệu quả ngay lần đầu thực hiện.',
      marginLeft: 28,
    },
    {
      title: 'Đội ngũ kỹ thuật viên chuyên nghiệp, chu đáo.',
      marginRight: 28,
    },
    {
      title: 'Bảo hành, cam kết hiệu quả bằng văn bản.',
    },
    {
      title: 'Trang thiết bị hiện đại, đảm bảo khử khuẩn tiệt trùng.',
    },
];

const ShouldChoose = () => {
  return (
    <div className="bg-Waxxing-5 w-full h-screen sm:block hidden">
      <div className="max-w-[1070px] relative m-auto flex flex-col justify-center items-center h-screen">
        <div className=" flex justify-center items-center w-full absolute z-10">
          <Image src={BannerCenter} width={460} height={690} alt="Banner Center" />
        </div>
        {Array.from({ length: Math.ceil(boxBlocks.length / 2) }).map((_, rowIndex) => (
          <div key={rowIndex} className="sm:flex block w-full justify-between sm:py-16 py-0 z-20">
            {boxBlocks.slice(rowIndex * 2, rowIndex * 2 + 2).map((block, index) => (
              <div
                key={index}
                className={`inline-block w-96 h-28 ${
                  index === 0 && block.marginLeft ? `sm:-ml-28 ml-0` : ''
                } ${index === 1 && block.marginRight ? `sm:-mr-28 mr-0` : ''}`}
              >
                <Image src={BgBoxTitile} alt='Box Title' />
                <div className="text-white text-center text-xl p-7 -mt-[114px]">
                  <p>{block.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  
  )
}

export default ShouldChoose;
