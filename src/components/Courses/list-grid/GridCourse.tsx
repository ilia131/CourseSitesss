import SliderCard from '../../LandingHolder/CourseSection/SliderCard/SliderCard'
import clsx from 'clsx'
import CourseSkeleton from "../SkeletonLoading/SkeletonLoading";
interface Course {
    courseId: string;
    tumbImageAddress: string;
    title: string;
    cost: number;
    teacherName: string;
    lastUpdate: string;
    currentUserRateNumber: number;
    
}



interface CourseListProps {
  courses: Course[];
  isLoading: boolean,
  isFetchingFilteredData: boolean,
  isGrid : boolean
}

const GridCourse: React.FC<CourseListProps> = ({ courses , isLoading , isFetchingFilteredData , isGrid}) => {


   if (isFetchingFilteredData || isLoading && isGrid) {
    return (
      <div className="w-[918px] h-[1100px]  grid grid-cols-3 gap-x-[50px] font-primaryMedium"> 
         {[...Array(9)].map((_, index) => <CourseSkeleton key={index} />)}
      </div>
    );
  }


  if (!courses || courses.length === 0) {
    return (
        <div className="w-[918px] h-[800px] grid-cols-3  gap-x-[50px] font-primaryMedium flex justify-center justify-items-center">
              <p className="text-gray-500 font-semibold mt-10 text-[26px]">{" ):"}  دوره ای وجود ندارد </p>
        </div>
      );
    }

  return (
  
    <div className={clsx("w-[918px] h-[1100px] grid grid-cols-3 gap-x-[50px] font-primaryMedium", courses.length < 7 ? 'h-[800px]' : '')}>
      {courses.map((item: Course, index: number) => (
        <SliderCard
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
  
  );
};

export default GridCourse;
