import SliderCard from "../SliderCard/SliderCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Navigation , Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination'
const CourseList = ({ slidercard , swiperRef , handleSlideChange ,SlideRef}) => {
    return (
        <div className='xl:w-[1247px] grid justify-center justify-items-center  sm1:w-full smx4:w-full lg:w-full'>   
         <div className='xl:w-[1187px] h-[323px] sm1:w-[280px] smx4:w-[565px] lg:w-[565px] duration-700'>
            <Swiper 
                loop={true}
                modules={[Navigation , Autoplay , Pagination]}
                spaceBetween={41}
                slidesPerView={4}
                className=''
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                initialSlide={0}

                ref={SlideRef}
                breakpoints={{
                320: {
                    width:320,
                    slidesPerView:1,
                    
                },
                600: {
                    width:600,
                    slidesPerView:2,
                    spaceBetween:-12,
                    },
                1024:{
                    width:1024,
                    slidesPerView:2,
                    spaceBetween:-450
                },
                1187:{
                    width:1187,
                    slidesPerView:4,
                    spaceBetween:41,
                }
                }}
            >        
            {slidercard.map((item , index)=> (
                    <SwiperSlide key={item} >
                        <SliderCard 
                            img={item.thumbImageAddress}
                            title={item.title} 
                            price={item.cost}
                            teacher={item.teacherName}
                            duration={item.lastUpdate}
                            courseId={item.courseId}
                            student={item.currentUserRateNumber}
                            index={index}
                        /> 
                    </SwiperSlide>
                ))} 
            
            </Swiper>
       </div>      
       
    </div>
    );
};
  

export default CourseList