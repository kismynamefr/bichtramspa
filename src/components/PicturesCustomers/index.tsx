'use client'
import React, { useState } from 'react';
import Image, { type StaticImageData } from "next/image";
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

import Pic1 from '~/assets/PicturesCustomers/phun-xam-tham-my-1.png'
import Pic2 from '~/assets/PicturesCustomers/phun-xam-tham-my-2.png'
import Pic3 from '~/assets/PicturesCustomers/phun-xam-tham-my-3.png'
import Pic4 from '~/assets/PicturesCustomers/dieu-tri-mun-1.png'
import Pic5 from '~/assets/PicturesCustomers/dieu-tri-mun-2.png'
import Pic6 from '~/assets/PicturesCustomers/dieu-tri-mun-3.png'
import Pic7 from '~/assets/PicturesCustomers/tam-trang-1.png'
import Pic8 from '~/assets/PicturesCustomers/tam-trang-2.png'
import Pic9 from '~/assets/PicturesCustomers/tam-trang-3.png'
import Pic10 from '~/assets/PicturesCustomers/triet-long-1.png'
import Pic11 from '~/assets/PicturesCustomers/triet-long-2.png'
import Pic12 from '~/assets/PicturesCustomers/triet-long-3.png'
import Pic13 from '~/assets/PicturesCustomers/giam-beo-1.png'
import Pic14 from '~/assets/PicturesCustomers/giam-beo-2.png'
import Pic15 from '~/assets/PicturesCustomers/giam-beo-3.png'

interface TagImage {
    src: StaticImageData;
    alt: string;
    title: string;
    description: string;
}

interface TagData {
    id: number;
    tagID: string;
    images: TagImage[];
}

const tagData = [
    {
      id: 1,
      tagID: "Phun xăm thẩm mỹ",
      images: [
        { src: Pic1, alt: "Phun xăm thẩm mỹ", title: "Chị Hạnh Uyên (26 tuổi)", description: "Phun môi collagen trị thâm xỉn" },
        { src: Pic2, alt: "Phun xăm thẩm mỹ", title: "Chị Ánh Ngân (30 tuổi)", description: "Điều trị sẹo rỗ" },
        { src: Pic3, alt: "Phun xăm thẩm mỹ", title: "Chị Nguyệt Đan (28 tuổi)", description: "Phun xăm mày môi khắc phục môi thâm mày nhạt" },
      ],
    },
    {
        id: 2,
        tagID: "Điều trị da",
        images: [
          { src: Pic4, alt: "Điều trị da", title: "Chị Ngọc Hân (31 tuổi)", description: "Điều trị nám chân sâu" },
          { src: Pic5, alt: "Điều trị da", title: "Chị Ánh Ngân (27 tuổi)", description: "Điều trị sẹo rỗ" },
          { src: Pic6, alt: "Điều trị da", title: "Anh Trọng Hưng (38 tuổi)", description: "Điều trị sẹo lồi" },
        ],
    },
    {
        id: 3,
        tagID: "Tắm trắng",
        images: [
          { src: Pic7, alt: "Tắm trắng", title: "Chị Hân (28 tuổi)", description: "Tắm trắng Phi Thuyệt bật 4 tone" },
          { src: Pic8, alt: "Tắm trắng", title: "Chị Oanh (30 tuổi)", description: "Tắm trắng Collagen Body bật liền 3 tone" },
          { src: Pic9, alt: "Tắm trắng", title: "Chị Nhi (32 tuổi)", description: "Tắm trắng Collagen Body bật liền 3 tone" },
        ],
    },
    {
        id: 4,
        tagID: "Triệt lông",
        images: [
          { src: Pic10, alt: "riệt lông", title: "Anh Vũ Trung (38 tuổi)", description: "Triệt lông chân, viêm nang chân lông" },
          { src: Pic11, alt: "riệt lông", title: "Chị Mỹ Hạnh (27 tuổi)", description: "Sau 4 buổi triệt lông toàn thân" },
          { src: Pic12, alt: "riệt lông", title: "Anh Minh Trí (26 tuổi)", description: "Triệt râu quai nón sau 3 buổi" },
        ],
    },
    {
        id: 5,
        tagID: "Giảm mỡ toàn thân",
        images: [
          { src: Pic13, alt: "Giảm mỡ toàn thân", title: "Chị Thanh Trúc (30 tuổi)", description: "Hạ 7cm vòng eo sau 2 buổi giảm mỡ" },
          { src: Pic14, alt: "Giảm mỡ toàn thân", title: "Chị Quỳnh Nga (38 tuổi)", description: "Giảm 4cm mỡ vùng bắp tay sau 3 buổi" },
          { src: Pic15, alt: "Giảm mỡ toàn thân", title: "Chị Minh Nguyên (38 tuổi)", description: "Giảm 3cm vùng mỡ bắp chân sau 2 buổi" },
        ],
    },
   
];
  

const PicturesCustomers: React.FunctionComponent<any> = () => {
    const [selectedTag, setSelectedTag] = useState<TagData | null>(tagData[0]);

    const handleTagClick = (tag: TagData) => {
        setSelectedTag(tag);
    };
    return (
        <div className="mt-24">
            <div className="flex justify-center items-center p-10">
                <h1 className='text-white font-bold text-2xl text-center'>HÌNH ẢNH THỰC TẾ CỦA KHÁCH HÀNG</h1>
            </div>
            <div className="w-full sm:h-[550px] h-auto">
                <div className='flex flex-row flex-wrap justify-center sm:w-1300 w-full mx-auto'>
                    <div className="sm:w-5/12 w-full sm:pb-0 pb-5">
                        <ul className='sm:w-[409px] w-full sm:ml-9 ml-0 sm:block flex flex-row flex-wrap justify-between sm:px-0 px-6'>
                        {tagData.map((tag) => (
                                <li
                                    key={tag.id}
                                    className={`text-base uppercase flex justify-between font-bold rounded-xl py-2 px-3 mt-2 cursor-pointer 
                                    ${selectedTag?.id === tag.id ? ' text-mainSpaColor bg-white' : 'text-white bg-li'}`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                        {tag.tagID} <FiChevronRight className='sm:block hidden'/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:w-7/12 w-full sm:h-[480px] h-[320px] sm:px-0 px-5">
                        {selectedTag && (
                            <Carousel transition={{ duration: 1 }} autoplay={true} loop={true} className="max-h-[900px] overflow-hidden"
                                prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute top-2/4 -translate-y-2/4 left-4 sm:-mt-24 -mt-[72px] -ml-cus btn-arrow sm:w-auto sm:h-auto !w-8 !h-8"
                                    >
                                        <ArrowLeftIcon strokeWidth={2} className="sm:w-6 sm:h-6 w-4 h-4" />
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                        variant="text"
                                        color="white"
                                        size="lg"
                                        onClick={handleNext}
                                        className="!absolute top-2/4 -translate-y-2/4 !right-4  sm:-mt-24 -mt-[72px] sm:mr-20 -mr-[10px] btn-arrow sm:w-auto sm:h-auto !w-8 !h-8"
                                    >
                                        <ArrowRightIcon strokeWidth={2} className="sm:w-6 sm:h-6 w-4 h-4" />
                                    </IconButton>
                                )}
                                navigation={({ setActiveIndex, activeIndex, length }) => (
                                    <div className="absolute bottom-4 left-2/4 z-50 !hidden -translate-x-2/4 gap-2">
                                        {new Array(length).fill("").map((_, i) => (
                                            <span
                                                key={i}
                                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                                                }`}
                                                onClick={() => setActiveIndex(i)}
                                            />
                                        ))}
                                    </div>
                                )}>
                                {selectedTag.images.map((image) => (
                                    <div key={image.alt} className="carousel-item">
                                        <Image src={image.src} alt={image.alt} width={670} height={310} className="rounded-2xl" />
                                        <div className="text-white mt-4">
                                            <h2 className="font-bold uppercase text-lg">{image.title}</h2>
                                            <p className="text-base">{image.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        )}
                        <div className="text-center mb-10 btn-see-pic absolute ml-custom sm:block hidden">
                            <Link className='custom-btn-see text-white cursor-pointer' href={"/"}>XEM THÊM</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PicturesCustomers;