import {useRef , useState , useEffect} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Navigation , Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import SliderCard from '../SliderCard/SliderCard';
import SwiperNavButton from '../SwiperButton/SwiperButton';
import { getCourseList } from '../../../../core/services/api/course';
const SwiperComponent = () => {

  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slidercard, setSliderCard] = useState([])
  
  const getList = async () => {
      const courses = await getCourseList(5)
        console.log(courses)
        setSliderCard(courses)
      };
  useEffect(() => {
    getList();
    }, []);

    



    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (swiper) => {
      const currentIndex = swiper.realIndex;
    
    setActiveIndex(currentIndex > 2 ? (currentIndex % 3) : currentIndex);
    };

    const swiperRef = useRef(null);
    const handlePaginationClick = (index) => {
      if (swiperRef.current && swiperRef.current.slideToLoop) {
        swiperRef.current.slideToLoop(index); 
      }
    };
    

    const SlideRef = useRef()

    const handleNext = () => {
       SlideRef.current.swiper.slideNext()
    }
     
    const handlePrev = () => {
      SlideRef.current.swiper.slidePrev()
    }

  return (
    <div className='font-primaryRegular grid justify-center 
                    mt-[25px] justify-items-center 
                    ml-[7px] 
                    sm1:w-full
                    smx4:w-full
                    lg:w-full 
                    duration-700
                    '>
      <div className='xl:w-[1247px] grid justify-center justify-items-center
         sm1:w-full smx4:w-full lg:w-full
      '>  
        
        <div className='xl:w-[1187px] h-[323px] sm1:w-[280px] smx4:w-[565px] lg:w-[565px]
        duration-700
        '>
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
      <SwiperNavButton handleNext={handleNext} handlePrev={handlePrev} />
     <div className="flex justify-center gap-[7px] mt-[-35px] max-md:mt-[10px] max-lg:mt-[10px] lg:mt-[10px]">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-[13px] h-[13px]  rounded-full ${
              activeIndex === index ? 'bg-[#D47300] h-[13px] w-[13px] border-[#80e6e4] border-[3px] ' : 'bg-[#01CEC980]'
            }`}
           
          ></button>
        ))}
      </div>   
  </div>
  )
}

export default SwiperComponent