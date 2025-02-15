import { Fragment , useMemo} from "react"
import { BestTeacher , HeroSection ,CategorySection ,
ServicesSection , ArticleSection , PodCastSection ,
CourseSection
} from '../../components/LandingHolder/index.js'
import images from '../../assets/landingpng'



const Landing = () => {
  const sections = [
    { component: <HeroSection images={images} />, key: 'hero-section' },
    { component: <CategorySection images={images} />, key: 'category-section' },
    { component: <CourseSection images={images} />, key: 'course-section' },
    { component: <BestTeacher />, key: 'best-teacher' },
    { component: <ServicesSection />, key: 'services-section' },
    { component: <ArticleSection />, key: 'article-section' }
  ];
  return (
   <Fragment>
       {sections.map(({ component, key }) => (
        <div key={key}
        >{component}</div>
      ))}
   </Fragment>
  )
}

export default Landing