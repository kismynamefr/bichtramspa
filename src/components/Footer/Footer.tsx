import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoFooter from '~/assets/Footer/logo.png'
import LogoLink from '~/assets/Footer/dmca.png'
import IconPhone from '~/assets/Footer/phone-call.png'
import IconClock from '~/assets/Footer/clock.png'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className='relative w-full md:h-auto h-full'>
      <div className="md:py-8 py-0 bg-boxtimeSpaColor md:flex block items-center relative h-full w-full">
        <div className="relative w-full z-10">
          <div className="max-w-1440 flex w-full flex-row flex-wrap justify-center items-center m-auto">
            <div className="relative w-full m-0 pt-0 pb-5 px-3 large-3 medium-3 ">
              <div className="ml-auto mr-0 text-left text-white">
                <div className="w-4/5  h-auto overflow-hidden relative m-0">
                  {/* <Link href={"/"}>
                    <Image src={LogoFooter} alt="logo" width={275} height={79}/>
                  </Link> */}
                  <p className='text-white font-bold text-2xl'>Bích Trâm Spa</p>
                </div>
                <div className="p-3 pb-5 relative w-full text-sm ">
                  <p>Với sứ mệnh lan tỏa vẻ đẹp Việt, Bích Trâm luôn không ngừng hoàn thiện và cải tiến từng ngày để mang đến cho khách hàng những trải nghiệm dịch vụ tuyệt vời nhất.</p>
                </div>
              </div>
            </div>
            <div className="relative w-full m-0 pt-0 pb-5 px-3 large-3 medium-3 md:ml-32 ml-0">
              <div className="ml-auto mr-0 text-left text-white">
                <div className=" relative m-0 pb-4">
                  <p className='text-base font-bold pb-2'>THÔNG TIN LIÊN HỆ</p>
                    <Link href={"/tel:+0908690068"} className='text-xs flex gap-2'>
                      <Image src={IconPhone} alt="logo" width={16} height={16}/>
                        Hotline: 0908690068
                    </Link>
                </div>
                <div className=" relative mt-3">
                  <p className='text-base font-bold pb-2'>THỜI GIAN LÀM VIỆC</p>
                  <p className='text-xs flex gap-2'> 
                    <Image src={IconClock} alt="logo" width={16} height={16}/>
                      8h30 - 19h30 thứ 2 - CN
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full m-0 pt-0 px-3 large-3 medium-3 pb-16 md:pb-5">
              <div className="ml-auto mr-0 text-left text-white">
                <div className=" relative m-0">
                  <p className='text-base font-bold items-center md:flex block '>CHÍNH SÁCH</p>
                  <div className="md:flex block gap-10">
                    <div className="w-284">
                      <p className='md:text-xs text-sm py-1'>Quy định chung</p>
                      <p className='md:text-xs text-sm py-1'>Bảo mật và thông tin</p>
                      <p className='md:text-xs text-sm py-1'>Hệ thống chi nhánh</p>
                    </div>
                    <div className="">
                      <p className='md:text-xs text-sm py-1'>Tuyển dụng</p>
                      <p className='md:text-xs text-sm py-1'>Nhận tư vấn miễn phí</p>
                      <p className='md:text-xs text-sm py-1'>Tiếp nhận ý kiến phản ánh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
