import clsx from "clsx"
import ListCourse from '../common/ListCourse'
import SkeletonListLoading from "../SkeletonLoading/SkeletonListLoading";

interface Course {
    courseId: string;
    tumbImageAddress: string;
    title: string;
    cost: number;
    teacherName: string;
    lastUpdate: string;
    currentUserRateNumber: number;
    
}



interface CourseListViewsProps {
  courses: Course[];
  isLoading: boolean,
  isFetchingFilteredData: boolean,
  isGrid : boolean

}

const CourseListViews = ({courses , isFetchingFilteredData , isGrid , isLoading }: CourseListViewsProps) => {

  if (isFetchingFilteredData || isLoading && !isGrid) {
    return (
      
      <div className="w-[918px] h-[900px] grid grid-rows-4  font-primaryMedium"> 
         {[...Array(3)].map((_, index) => <SkeletonListLoading key={index}/>)}
      </div>
    );
  }

  return (
    <div className={clsx("w-[918px] h-[900px] grid grid-rows-4  font-primaryMedium")}>

          {courses.map((item: Course, index: number) => (
            <ListCourse
              key={item.courseId}
              courseId={item.courseId}
              img={item.tumbImageAddress}
              title={item.title}
              price={item.cost}
              teacher={item.teacherName}
              duration={item.lastUpdate}
              student={item.currentUserRateNumber}
              index={index}
            />
          ))}
        </div>
  )
}

export default CourseListViews