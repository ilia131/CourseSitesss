import { useGetAllCoursesQuery } from "../../redux/services/api/courseApiSlice"
import SliderCard from '../LandingHolder/CourseSection/SliderCard/SliderCard'
import PaginationDashboard from '../common/PaginationDashboard/PagiantionDashboard'
import { useState , useEffect } from "react";
import CourseSkeleton from "./SkeletonLoading/SkeletonLoading";
import CourseList from "./CourseList";
import { usePagination } from "../common/hooks/hookCourseLanding/usePagination";

interface Course {
    courseId: string;
    tumbImageAddress: string;
    title: string;
    cost: number;
    teacherName: string;
    lastUpdate: string;
    currentUserRateNumber: number;
}
  


interface Props {
   isLoading: boolean
   check: number[]
   course: Course[]
   isFetchingFilteredData: boolean
   isFetchingAllCourses: boolean
}




const AllCourses = ({ course , isLoading ,  isFetchingFilteredData , isFetchingAllCourses} : Props) => {

  const { currentPage, setCurrentPage, totalPages, paginatedItems } = usePagination<Course>(course, 9);

  if (isLoading || isFetchingFilteredData || isFetchingAllCourses) {
    return (
      <div className="w-[918px] h-[1100px]  grid grid-cols-3 gap-x-[50px] font-primaryMedium"> 
         {[...Array(9)].map((_, index) => <CourseSkeleton key={index} />)}
      </div>
    );
  }
  
  if (!course || course.length === 0) {
  return (
      <div className="w-[918px] h-[800px] grid-cols-3  gap-x-[50px] font-primaryMedium flex justify-center justify-items-center">
            <p className="text-gray-500 font-semibold mt-10 text-[26px]">{" ):"}  دوره ای وجود ندارد </p>
      </div>
    );
  }
  

  return (
   <div className="grid justify-center justify-items-center pb-[72px]">
      <CourseList courses={paginatedItems}/>
      {course.length > 9 && (
      <PaginationDashboard
        paginate={setCurrentPage}
        row={course}
        itemsPerPage={9}
        currentPage={currentPage}
      />
      )}   
    </div>
  )
}

export default AllCourses