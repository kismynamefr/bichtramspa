import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Item1 from '~/assets/Banner/banner-03.png';
import Item2 from '~/assets/News/Item-2.png';
import Item3 from '~/assets/News/Item-3.png';
import Item4 from '~/assets/News/Item-4.png';

interface NewsItem {
    id: number;
    title: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    description: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'Chương trình khuyến mãi tại TMV Quốc tế Bích Trâm',
        imageSrc: Item1,
        imageAlt: 'Item 1',
        description: 'Sức nóng mùa hè chính thức đổ bộ tại hệ thống TMV Quốc tế Bích Trâm. Cùng hòa chung không khí rộn ràng, Bích Trâm mang nhiều ưu đãi hấp dẫn với các dịch vụ làm đẹp cực hot….',
    },
    {
        id: 2,
        title: 'PHUN MÔI COLLAGEN - MÔI HỒNG CĂNG MƯỚT CHỈ SAU 60 PHÚT',
        imageSrc: Item2,
        imageAlt: 'Item 2',
        description: '',
    },
    {
        id: 3,
        title: 'CĂNG DA TRÁN BẰNG PHẨU THUẬN VÀ NHỮNG ĐIỀU CẦN BIẾT',
        imageSrc: Item3,
        imageAlt: 'Item 3',
        description: '',
    },
    {
        id: 4,
        title: 'NGUYÊN NHÂN LÀM DA MẶT CHẢY XỆ SỚM VÀ CÁCH KHẮC PHỤC',
        imageSrc: Item4,
        imageAlt: 'Item 4',
        description: '',
    },
];

const News: React.FC = () => {
    return (
        <div className="w-full pb-10 z-10">
            <div className="mt-6">
                <div className="flex justify-center items-center p-10">
                    <h1 className="text-mainSpaColor font-bold text-2xl custom-gradient-text">TIN TỨC VÀ SỰ KIỆN</h1>
                </div>
                <div className="md:flex block flex-row flex-wrap md:max-w-1300 w-full mx-auto justify-center md:px-0 px-3">
                    <div className="text-center md:w-6/12 w-full md:pb-0 pb-5">
                        <Image
                            src={newsData[0].imageSrc}
                            alt={newsData[0].imageAlt}
                            width={630}
                            height={330}
                            className="rounded-2xl"
                        />
                        <h2 className="text-titlemainSpaColor font-bold text-2xl pt-3">{newsData[0].title}</h2>
                        <p className="pt-5 text-base">{newsData[0].description}</p>
                    </div>
                    <div className="md:w-6/12 w-full md:pl-3 pl-0 md:block flex overflow-x-auto items-new">
                        {newsData.slice(1).map((news) => (
                            <div className="md:flex-row flex-col flex pb-2 items-center" key={news.id}>
                                <div className="">
                                    <Image
                                        src={news.imageSrc}
                                        alt={news.imageAlt}
                                        width={480}
                                        height={250}
                                        className="rounded-2xl md:w-[300px] w-full"
                                    />
                                </div>
                                <div className="text-center p-4 w-400 mt-2">
                                    <h2 className="text-titlemainSpaColor font-bold text-lg">{news.title}</h2>
                                    <p className="mt-2">{news.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link className="custom-btn-news text-white cursor-pointer" href="/">
                            XEM THÊM TIN TỨC KHÁC
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
