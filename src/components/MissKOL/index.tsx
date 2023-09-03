'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import MissThuyTien from '~/assets/KOL/miss-Thuytien.png'
import MissHuyenMi from '~/assets/KOL/miss-Huyenmi.png'
import MissMyLinh from '~/assets/KOL/miss-Mylinh.png'
import ActorKhaNhu from '~/assets/KOL/actor-Khanhu.png'
import NSNDThanhThuy from '~/assets/KOL/nsnd-ThanhThuy.png'
import NSNDKimXuan from '~/assets/KOL/nsnd-Kimxuan.png'
import AvaThuyTien from '~/assets/KOL/ava-Thuytien.png'
import AvaHuyenMi from '~/assets/KOL/ava-huyenmi.png'
import AvaMyLinh from '~/assets/KOL/ava-mylinh.png'
import AvaKhaNhu from '~/assets/KOL/ava-khanhu.png'
import AvaThanhThuy from '~/assets/KOL/ava-thanhthuy.png'
import AvaKimXuan from '~/assets/KOL/ava-kimxuan.png'

const avatarsData = [
    AvaThuyTien,
    AvaHuyenMi,
    AvaMyLinh,
    AvaKhaNhu,
    AvaThanhThuy,
    AvaKimXuan,
  ];

const kolData = [
    {
        id: 1,
        missImage: MissThuyTien,
        title: 'ĐẠI SỨ THƯƠNG HIỆU - HOA HẬU THÙY TIÊN',
        content: '“Trở thành Đại sứ thương hiệu của Hệ thống TMQT Linh Anh, Tiên mong muốn lan tỏa thông điệp tích cực về xu hướng làm đẹp hiện đại, an toàn, không xâm lấn. Không cần bắt chước bất cứ khuôn mẫu nào, mỗi phụ nữ hãy trở thành phiên bản hoàn hảo nhất của chính mình”',
    },
    {
        id: 2,
        missImage: MissHuyenMi,
        title: 'Á HẬU HUYỀN MY',
        content: '“Á HẬU HUYỀN MY“Đến với Linh Anh, My không chỉ được trải nghiệm những dịch vụ làm đẹp đẳng cấp nhất mà còn cảm nhận được sự chuyên nghiệp, hết lòng tận tâm của đội ngũ bác sĩ, chuyên viên tại đây”',
    },
    {
        id: 3,
        missImage: MissMyLinh,
        title: 'HOA HẬU ĐỖ MỸ LINH',
        content: '"Linh Anh hội tụ tất cả những gì mà một tín đồ yêu làm đẹp như Linh không thể bỏ lỡ. Từ không gian sang trọng, công nghệ làm đẹp hiện đại nhất cho đến quy trình chăm sóc khách hàng"',
    },
    {
        id: 4,
        missImage: ActorKhaNhu,
        title: 'DIỄN VIÊN KHẢ NHƯ',
        content: '“Cảm ơn Linh Anh đã trở thành người bạn đồng hành thân thiết giúp Như hoàn thiện sắc vóc, thêm tự tin mỗi lần xuất hiện trước khán giả, chinh phục những thành công mới và tận hưởng cuộc sống theo cách riêng”',
    },
    {
        id: 5,
        missImage: NSNDThanhThuy,
        title: 'NSND THANH THỦY',
        content: '“Mỗi lần ghé thăm Linh Anh, tôi thấy mình như trở lại thanh xuân một lần nữa, da dẻ tươi trẻ và vóc dáng thon gọn hơn. Nhờ có Linh Anh mà tôi tự tin tiếp tục theo đuổi đam mê diễn xuất và cống hiến cho khán giả”',
    },
    {
        id: 6,
        missImage: NSNDKimXuan,
        title: 'NSND KIM XUÂN',
        content: '“Tin tưởng Linh Anh nhiều năm qua, tôi vừa có ngoại hình đẹp, vừa nâng cao sức khỏe, từ đó công việc lẫn cuộc sống cũng thăng hoa hơn”',
    }
]

const MissKOL: React.FunctionComponent = () => {
    const [activeMiss, setActiveMiss] = useState(1);
  
    return (
      <div className='w-full z-20 sm:-mt-64 -mt-7'>
        <div className='bg-kol'>
            <div className="sm:w-1300 w-full mx-auto hidden sm:block">
                <div className="sm:flex block justify-center items-center">
                    <div className="">
                        <Image src={kolData[activeMiss - 1].missImage} alt='Miss KOL'/>
                    </div>
                    <div className='flex flex-wrap w-734 items-center mt-56'>
                        <div className="text-white w-734 h-64 hidden sm:block">
                            <h2 className='font-bold text-3xl'>{kolData[activeMiss - 1].title}</h2>
                            <p className='text-lg pt-4 text-justify'>{kolData[activeMiss - 1].content}</p>
                        </div>
                        <div className="flex justify-center w-734 cursor-pointer sm:mt-0 -mt-56">
                            {avatarsData.map((avatar, index) => (
                            <Image
                                key={index}
                                className={`ava-kol ${activeMiss === index + 1 ? 'active' : ''}`}
                                src={avatar}
                                alt={`avatar KOL ${index + 1}`}
                                onClick={() => setActiveMiss(index + 1)}
                            />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="sm:w-1300 w-full mx-auto block sm:hidden">
            <Carousel
            transition={{ duration: 1 }}
            autoplay={false}
            loop={true}
            className="max-h-[900px] overflow-hidden"
            prevArrow={({ handlePrev }) => (
                <button
                    onClick={handlePrev}
                    className="absolute top-2/4 transform -translate-y-2/4 left-4 bg-transparent border-none focus:outline-none rounded-full"
                >
                    <ArrowLeftIcon strokeWidth={2} className="w-6 h-6 text-white" />
                </button>
            )}
            nextArrow={({ handleNext }) => (
                <button
                    onClick={handleNext}
                    className="absolute top-2/4 transform -translate-y-2/4 right-4 bg-transparent border-none focus:outline-none rounded-full"
                >
                    <ArrowRightIcon strokeWidth={2} className="w-6 h-6 text-white" />
                </button>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            >
            {kolData.map((item) => (
                <div key={item.id} className="">
                    <div className="sm:flex block justify-center items-center mt-9">
                        <div className='flex flex-wrap items-center h-52'>
                            <div className="text-white text-center">
                                <h2 className='font-bold text-3xl'>{item.title}</h2>
                                <p className='text-sm pt-4 px-8 text-justify'>{item.content}</p>
                            </div>
                        </div>
                        <div className="">
                            <Image src={item.missImage} alt='Miss KOL'/>
                        </div>
                    </div>
                </div>
            ))}
            </Carousel>

          </div>
        </div>
      </div>
    );
  }
  
  export default MissKOL;