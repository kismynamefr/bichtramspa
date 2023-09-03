import React from 'react';

const Sale = () => {
  return (
    <div className="w-full bg-branch z-20 relative">
        <div className="mx-auto w-full sm:px-0 px-3">
            <div className="sm:w-1300 w-full mx-auto border-2 border-white my-20 rounded-2xl">
                <div className="py-10 sm:px-20 px-4 text-center sm:h-auto h-[420px]">
                    <div className="">
                        <h1 className='text-2xl font-bold uppercase text-white'>Hệ thống viện thẩm mỹ quốc tế ...</h1>
                        <h2 className='text-lg uppercase text-white py-3 px-6 mt-4 bg-btn-brach inline-block rounded-3xl cursor-pointer'>Tp. Hồ Chí Minh</h2>
                    </div>
                    <hr className="hr-branch mt-6 sm:block hidden" />
                    <div className="sm:flex-row flex-col flex sm:py-10 py-5 justify-center sm:gap-20 gap-10 items-center">
                        <div className="text-white sm:text-start text-center">
                            <div className="sm:flex block items-center gap-4">
                                <h2 className='font-bold'>CƠ SỞ 1</h2>
                                <h3 className='text-orange-600'>Xem chỉ đường</h3>
                            </div>
                            <p>Đang tiến hành ...</p>
                        </div>
                        <div className="text-white sm:text-start text-center">
                            <div className="sm:flex block items-center gap-4">
                                <h2 className='font-bold'>CƠ SỞ 2</h2>
                                <h3 className='text-orange-600'>Xem chỉ đường</h3>
                            </div>
                            <p>Đang tiến hành ...</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
   </div>
  );
};

export default Sale;
