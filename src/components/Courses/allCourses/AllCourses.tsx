import PaginationDashboard from '../../common/PaginationDashboard/PagiantionDashboard'
import GridCourse from "../list-grid/GridCourse";
import { usePagination } from "../../common/hooks/hookCourseLanding/usePagination";
import TopAllCourse from './TopAllCourse';
import CourseListViews from '../list-grid/CourseListViews';
import { useAppSelector } from '../../../redux/hook';
import { useEffect } from 'react';
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
   check: string[]
   course: Course[]
   isFetchingFilteredData: boolean
   isLoading: boolean

}

const AllCourses = ({ course, isFetchingFilteredData, isLoading }: Props) => {
  const { isGrid } = useAppSelector((state) => state.cardView);
  const itemsPerPage = isGrid ? 9 : 4;
  const { currentPage, setCurrentPage, totalPages, paginatedItems } = usePagination<Course>(course, itemsPerPage);
  const RenderCourses = isGrid ? GridCourse: CourseListViews;
  useEffect(() => {
    setCurrentPage(1);
  }, [isGrid , course]);


  return (
    <section>
      <TopAllCourse /> 
      <div className="grid justify-center justify-items-center pb-[72px]">
        <RenderCourses
          courses={paginatedItems}
          isFetchingFilteredData={isFetchingFilteredData}
          isLoading={isLoading}
          isGrid={isGrid}
        />
        <PaginationDashboard
          paginate={setCurrentPage}
          row={course}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default AllCourses;