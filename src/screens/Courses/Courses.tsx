import { Fragment } from "react/jsx-runtime"
import CourseHero from "../../components/Courses/course-hero/CourseHero"
import CoursesDisplay from "../../components/Courses/allCourses/CoursesDisplay"
import FilterSvg from "../../components/Courses/common/FilterSvg"


const Courses = () => {
  return (
    <Fragment>
        <CourseHero />
        <CoursesDisplay />
        {/* <div className="md:hidden w-[45px] h-[45px]  flex justify-center 
         items-center rounded-[7px] shadow-lg bg-[#01cec9] fixed top-[800px]  z-[6666]
         left-[260px]
        ">
           <FilterSvg />
        </div> */}
    </Fragment>
  )
}

export default Courses