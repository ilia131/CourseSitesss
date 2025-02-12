import CourseCardList from './CourseCardList'
import CourseList from './CourseList'
const AllCoursesList = ({filteredCourses}) => {
  return (
    <div className='xl:w-[751px] xl:h-[252px]  xl:mt-[59px]  xl:ml-[20px] grid max-smx3:mt-[-10px] max-md:pr-[50px] max-smx3:pr-0
     max-smx3:mr-0 max-smx3:h-screen max-smx3:dark:bg-gray-800 max-smx3:grid max-smx3:justify-center max-smx4:pt-[30px] max-md:h-screen max-md:dark:bg-gray-800 max-md:w-screen max-smx3:pt-[200px] max-lg:justify-center max-xl:justify-center'> 
        <div className='flex gap-x-[68px]  mt-[12px] relative xl:left-[5px]  max-md:justify-end max-md:grid smx4:relative smx4:left-[20px] md:left-0 max-smx3:mt-[-180px] '>
            <CourseCardList 
            cardore={filteredCourses}
             />
            <CourseList 
            card={filteredCourses}
             />
        </div> 
    </div> 
  )
}

export default AllCoursesList