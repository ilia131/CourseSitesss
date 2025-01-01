
import { useState , useEffect } from "react"
import SliderCard from "../LandingHolder/CourseSection/SliderCard/SliderCard"
// import { getAllCourse } from "../../core/services/api/course"
import PagiantionDashboard from '../common/PaginationDashboard/PagiantionDashboard'


const FinalGrid =({slidercard})=>{
  





    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = slidercard.slice(indexOfFirstItem, indexOfLastItem) || 0
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    

    return(
         <div className="w-[100%] mx-auto  justify-center lg:ml-20 
         xl:ml-0 gh:ml-0 cd:ml-10 ml-10  mt-[35px] grid gh:grid-cols-3
          sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-[10px] 
          lg:gap-x-[0px] xl:gap-x-[36px] gap-y-[35px] ">      
      {slidercard.length > 0 ? (<>          
       {currentItems.map((item , index)=> (
          <SliderCard  
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
</>) : (
   <p>there is no Course</p>
)}  


       <div className="absolute  xl:top-[1500px] left-[400px]">
                      <PagiantionDashboard   
                                            paginate={paginate}
                                            row={slidercard}
                                            itemsPerPage={itemsPerPage}
                                            currentPage={currentPage}
                                                     
                                                     />
        </div>                          
    </div>
    )
}

export default FinalGrid