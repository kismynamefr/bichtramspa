'use client'
import React from 'react'

interface BoxBlock {
    titleLine1: string;
    titleLine2: string;
    marginLeft?: number;
    marginRight?: number;
}

const boxBlocks: BoxBlock[] = [
    {
      titleLine1: 'CÔNG NGHỆ MỚI NHẤT',
      titleLine2: 'THỊ TRƯỜNG',
    },
    {
      titleLine1: 'DỤNG CỤ, TRANG',
      titleLine2: 'THIẾT BỊ HIỆN ĐẠI',
    },
    {
      titleLine1: 'ĐỘI NGŨ MASTER',
      titleLine2: 'ĐIÊU LUYỆN',
      marginLeft: 28,
    },
    {
      titleLine1: 'MỰC ORGANIC AN',
      titleLine2: 'TOÀN BỀN ĐẸP',
      marginRight: 28,
    },
    {
      titleLine1: 'ĐƯỜNG NÉT CHUẨN',
      titleLine2: 'PHONG THỦY',
    },
    {
      titleLine1: 'DỊCH VỤ KHÁCH HÀNG',
      titleLine2: 'TẬN TÂM',
    },
];

const ShouldChoose = () => {
  return (
    <div className="bg-ReduceBodyFat-5 w-full h-screen sm:block hidden">
      <div className="max-w-[1070px] relative m-auto flex flex-col justify-center items-center h-screen">
        {Array.from({ length: Math.ceil(boxBlocks.length / 2) }).map((_, rowIndex) => (
          <div key={rowIndex} className="sm:flex block w-full justify-between sm:py-16 py-0">
            {boxBlocks.slice(rowIndex * 2, rowIndex * 2 + 2).map((block, index) => (
              <div
                key={index}
                className={`bg-boxCosmetic inline-block w-96 h-28 ${
                  index === 0 && block.marginLeft ? `sm:-ml-28 ml-0` : ''
                } ${index === 1 && block.marginRight ? `sm:-mr-28 mr-0` : ''}`}
              >
                <div className="text-white text-center text-xl p-7">
                  <p>{block.titleLine1}</p>
                  <p>{block.titleLine2}</p>
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