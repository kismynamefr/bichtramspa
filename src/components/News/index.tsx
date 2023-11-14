import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Item1 from '~/assets/Banner/banner-03.png';
import Item2 from '~/assets/News/Item-2.jpg';
import Item3 from '~/assets/News/Item-3.jpg';
import Item4 from '~/assets/News/Item-4.jpg';

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
        imageAlt: 'Chương trình khuyến mãi',
        description: 'Sức nóng mùa hè chính thức đổ bộ tại hệ thống TMV Quốc tế Bích Trâm. Cùng hòa chung không khí rộn ràng, Bích Trâm mang nhiều ưu đãi hấp dẫn với các dịch vụ làm đẹp cực hot….',
    },
    {
        id: 2,
        title: 'Kem trộn trắng da có thực sự an toàn và hiểu quả?',
        imageSrc: Item2,
        imageAlt: 'Kem trộn da',
        description: 'Kem trộn da là một loại kem trắng ...',
    },
    {
        id: 3,
        title: 'Căng da trán bằng phẫu thuật và những điều cần biết',
        imageSrc: Item3,
        imageAlt: 'Căng da trán',
        description: 'Khi những phương pháp thiên nhiên, serum hay kem ...',
    },
    {
        id: 4,
        title: 'Nguyên nhân làm da mặt chảy xệ sớm và cách khắc phục',
        imageSrc: Item4,
        imageAlt: 'Da mặt chảy xệ',
        description: 'Da mặt chảy xệ là một trong những dấu ...',
    },
];

const News: React.FC = () => {
    return (
        <div className="w-full pb-10 z-10">
            <div className="mt-6">
                <div className="flex justify-center items-center p-10">
                    <h1 className="text-mainSpaColor font-bold text-2xl custom-gradient-text">TIN TỨC VÀ SỰ KIỆN</h1>
                </div>
                <div className="sm:flex block flex-row flex-wrap sm:max-w-1300 w-full mx-auto justify-center sm:px-0 px-3">
                    <div className="text-center sm:w-6/12 w-full sm:pb-0 pb-5">
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
                    <div className="sm:w-6/12 w-full sm:pl-3 pl-0 sm:block flex overflow-x-auto">
                        {newsData.slice(1).map((news) => (
                            <div className="sm:flex-row flex-col flex pb-2 items-center" key={news.id}>
                                <div className="">
                                    <Image
                                        src={news.imageSrc}
                                        alt={news.imageAlt}
                                        width={480}
                                        height={250}
                                        className="rounded-2xl sm:w-[300px] w-full"
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
