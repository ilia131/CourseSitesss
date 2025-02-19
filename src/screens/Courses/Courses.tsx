import { Fragment } from "react/jsx-runtime"
import CourseHero from "../../components/Courses/course-hero/CourseHero"
import CoursesDisplay from "../../components/Courses/allCourses/CoursesDisplay"


const Courses = () => {
  return (
    <Fragment>
        <CourseHero />
        <CoursesDisplay />
    </Fragment>
  )
}

export default Courses