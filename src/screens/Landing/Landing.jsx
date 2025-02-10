import { Fragment } from "react"
import { BestTeacher , HeroSection ,CategorySection ,
ServicesSection , ArticleSection , PodCastSection ,
CourseSection
} from '../../components/LandingHolder/index.js'

const Landing = () => {
  return (
   <Fragment>
      <HeroSection /> 
      <CategorySection /> 
      <CourseSection /> 
       <BestTeacher />
       <ServicesSection /> 
      <ArticleSection /> 
   </Fragment>
  )
}

export default Landing