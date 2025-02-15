import { Fragment } from "react/jsx-runtime"
import CourseHero from "../../components/Courses/CourseHero"
import FilterComponent from "../../components/Courses/FilterComponent"
import CoursesDisplay from "../../components/Courses/CoursesDisplay"


const Courses = () => {
  return (
    <Fragment>
        <CourseHero />
        <CoursesDisplay />
    </Fragment>
  )
}

export default Courses