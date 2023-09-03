'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EffectButton from '~/components/EffectButton';


interface TimeFormat {
    value: number;
    unit: string;
}

const CountDown = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hour > 0) {
              setHour(hour - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(interval);
            }
          }
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
  }, [hour, minutes, seconds]);

    
  const formatTime = ({ value, unit }: TimeFormat) => (
  <span className="text-mainSpaColor bg-white py-4 rounded-md px-4 text-center font-bold flex flex-col sm:w-28 w-24 sm:text-5xl text-lg">
      {value} <strong className='uppercase opacity-70 text-xl'>{value === 1 ? unit : unit}</strong>
  </span>
  );

  const inputPlaceholders = ['Họ Và Tên', 'Số Điện Thoại', 'Chọn chi nhánh gần nhất'];

  return (
    <>
      <div className="bg-mainSpaColor w-full py-7 relative sm:block hidden sm:px-0 px-3">
        <div className="border rounded-3xl border-white w-full h-[240px] icon-cosmetic max-w-1440 m-auto">
          <div className="-translate-y-24 w-6/12 m-auto">
            <div className="w-full border border-white rounded-3xl py-4 px-16 flex justify-center gap-5 m-2 bg-gradientCosmetic">
              {formatTime({ value: hour, unit: 'Giờ' })}
              {formatTime({ value: minutes, unit: 'Phút' })}
              {formatTime({ value: seconds, unit: 'Giây' })}
            </div>
          </div>
          <div className="w-full flex justify-center gap-5 -mt-8">
            {inputPlaceholders.map((placeholder, index) => (
              <input key={index} className='rounded-lg h-12 text-center input-cosmetic' type="text" placeholder={placeholder} />
            ))}
            <div className="text-center -mt-5">
              <EffectButton href={"/"} title='NHẬN ƯU ĐÃI NGAY'/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-mainSpaColor w-full py-7 relative sm:hidden block">
      <div className="border rounded-3xl border-white w-full m-auto">
      <div className="w-full  justify-center gap-5 -mt-8">
         <div className="mt-16">
          <div className="text-center">
            <p className='text-white font-medium text-2xl'>ĐĂNG KÝ NHẬN ƯU ĐÃI</p>
          </div>
          <div className="w-full py-4 flex justify-center gap-5">
              {formatTime({ value: hour, unit: 'Giờ' })}
              {formatTime({ value: minutes, unit: 'Phút' })}
              {formatTime({ value: seconds, unit: 'Giây' })}
          </div>
         </div>
          {inputPlaceholders.map((placeholder, index) => (
           <div className="px-7 py-3">
             <input key={index} className='rounded-lg h-12 text-center input-cosmetic w-full' type="text" placeholder={placeholder} />
           </div>
          ))}
          <div className="text-center pb-16 -mt-5">
            <EffectButton href={"/"} title='NHẬN ƯU ĐÃI NGAY'/>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default CountDown



