// import Swiper core and required modules
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './carrouselStyle.css'

export default () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);
  const [thirdSwiper, setThirdSwiper] = useState<SwiperType | null>(null);
  const [fourthSwiper, setFourthSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <div className='grid h-full grid-cols-5'>
        <div className="col-span-5 row-span-8 md:row-span-6 md:col-span-3">
          <Swiper
              className='h-full cursor-grab'
              loop={true}
              modules={[Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: [secondSwiper, thirdSwiper, fourthSwiper].filter((swiper): swiper is SwiperType => swiper !== null) }}
            >

            <SwiperSlide className='relative bgImage retroPokedexImage'>
              <div className='absolute bottom-0 p-10 borderedText'>
                <h3 className='text-4xl '>Game Freak</h3>
                <hr className='my-10 border-4 border-white w-30'/>
                <h2 className='text-7xl'>Retro Pokedex</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bgImage tcgImage'>
              <div className='absolute bottom-0 p-10 borderedText'>
                <h3 className='text-4xl '>Game Freak</h3>
                <hr className='my-10 border-4 border-white w-30'/>
                <h2 className='text-7xl'>Pokemon TCG Explorer</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <div className="col-span-5 row-span-3 md:row-span-3 md:col-span-2">
          <Swiper 
              className='h-full'
              loop={true}
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={firstSwiper ? { control: firstSwiper } : undefined}
              allowTouchMove={false}
            >

            <SwiperSlide className='bgImage tcgImage'></SwiperSlide>
            <SwiperSlide className='bgImage retroPokedexImage'></SwiperSlide>
          </Swiper>
        </div>

        <div className="col-span-5 row-span-3 md:row-span-3 md:col-span-1">
          <Swiper 
              className='h-full'
              loop={true}
              modules={[Controller]}
              onSwiper={setThirdSwiper}
              controller={firstSwiper ? { control: firstSwiper } : undefined}
              allowTouchMove={false}
            >

            <SwiperSlide className='bgImage retroPokedexImage'></SwiperSlide>
            <SwiperSlide className='bgImage tcgImage'></SwiperSlide>
          </Swiper>
        </div>

        <div className="col-span-5 row-span-3 md:row-span-3 md:col-span-1">
          <Swiper 
              className='h-full'
              loop={true}
              modules={[Controller]}
              onSwiper={setFourthSwiper}
              controller={firstSwiper ? { control: firstSwiper } : undefined}
              allowTouchMove={false}
            >

            <SwiperSlide className='bgImage tcgImage'></SwiperSlide>
            <SwiperSlide className='bgImage retroPokedexImage'></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};