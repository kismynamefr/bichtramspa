'use client'
import React from 'react'
import Image, {StaticImageData} from 'next/image';

import Color1 from '~/assets/EyebrowSpray/color1.png'
import Color2 from '~/assets/EyebrowSpray/color2.png'
import Color3 from '~/assets/EyebrowSpray/color3.png'
import Color4 from '~/assets/EyebrowSpray/color4.png'
import Color5 from '~/assets/EyebrowSpray/color5.png'
import Color6 from '~/assets/EyebrowSpray/color6.png'


interface PopularityItem {
    image: StaticImageData;
    alt: string,
}

const popularityItem: PopularityItem[] = [
    {
        image: Color1,
        alt: "Color Item Spa",
    },
    {
        image: Color2,
        alt: "Color Item Spa",
    },
    {
        image: Color3,
        alt: "Color Item Spa",
    },
    {
        image: Color4,
        alt: "Color Item Spa",
    },
    {
        image: Color5,
        alt: "Color Item Spa",
    },
    {
        image: Color6,
        alt: "Color Item Spa",
    },
]

const EyebrowsColor = () => {
  return (
    <div className="bg-EyebrowSpray4 w-full">
      <div className="max-w-[1400px] m-auto py-5 px-10 text-center">
          <div className="w-full max-w-[700px] m-auto">
              <h1 className='bg-gradientText text-cosmetic font-bold text-5xl pb-4'>CÁC MÀU PHUN CHÂN MÀY</h1>
              <h2 className='text-white text-3xl font-bold pb-4'>HOT NHẤT 2023</h2>
          </div>
          <div className="grid grid-cols-3">
            {popularityItem.map((item, index) => (
                <div key={index} className='m-auto'>
                <div className="relative pb-5">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        className='object-cover object-center'
                        width={334}
                        height={286}
                    />
                </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  )
}
export default EyebrowsColor;
