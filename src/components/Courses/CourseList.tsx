import React from "react";
import SliderCard from '../LandingHolder/CourseSection/SliderCard/SliderCard'

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
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="w-[918px] h-[1100px] grid grid-cols-3 gap-x-[50px] font-primaryMedium">
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

export default React.memo(CourseList);
