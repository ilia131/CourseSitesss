import { Fragment  } from 'react'
import images from '../../../../assets/dashboardpng'
import ReserveCourse from './ReserveCourse';
import InCourseCard from './InCourseCard';
import useCourseCount from '../../../common/hooks/hookapi/useAllCourseCard';


const AllCourseCard = () => {
  const { courseCount, courseCount1, loading, error } = useCourseCount()
  return (
    <Fragment>
       <div className='md:w-[424px] h-[105px]  relative mt-[5px] flex gap-[44px] max-md:grid max-smx3:gap-[20px] max-smx3:justify-center max-md:gap-[20px]  md:ml-0  max-smx3:right-0 max-lg:gap-[20px] max-lg:mr-[-20px] max-md:mr-0' dir='ltr'>
              <ReserveCourse 
               images={images}
               courseCount1={courseCount1}
              />
            
              <InCourseCard 
                images={images} 
                courseCount={courseCount} />
            </div>
    </Fragment>
  )
}

export default AllCourseCard