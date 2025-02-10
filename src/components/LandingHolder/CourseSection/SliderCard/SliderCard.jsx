import { NavLink } from 'react-router-dom';
import images from '../../../../assets/landingpng'
import SliderPrice from './SliderCardPart/SliderPrice';
import SliderRating from './SliderCardPart/SliderRating';
import SliderImage from './SliderCardPart/SliderImage';
import SliderDetail from './SliderCardPart/SliderDetail'

const SliderCard = ({price, teacher, student , title , duration , courseId ,img}) => {
  return (
  <div className='h-[323px] w-[266px] flex  justify-center justify-items-center items-center  pt-[18px]'>  
     <div className='w-[266px] h-[305px] bg-[#FFFFFF] rounded-[15px] shadow-lg border border-[#cccccc]  relative '>   
       <SliderImage  img={img} /> 
       <div className='grid mt-[131px]'>
            <NavLink className='
                text-[20px] 
                text-right mr-[17px] 
                font-primaryMedium 
                text-[#444444] 
                mt-[10px]
                truncate
                '
                to={`/course-detail/${courseId}`}
                >
                  {title}
             </NavLink>
            <div className='flex justify-between '>
             <SliderRating student={student} images={images} />
             <SliderDetail  teacher={teacher} duration={duration} images={images} />
            </div>
            <img className='ml-[17px] mt-[10.39px] mb-[4px]'   src={images.line}  width={230}/>
             <SliderPrice price={price} images={images} />
      </div>
  </div>
</div>
  )
}

export default SliderCard