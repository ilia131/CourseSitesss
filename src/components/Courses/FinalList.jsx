
import ListCourse from "./ListCourse"
import { useState } from "react"
import PagiantionDashboard from '../common/PaginationDashboard/PagiantionDashboard'

const FinalList =({slidercard})=>{
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = slidercard.slice(indexOfFirstItem, indexOfLastItem) || 0
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
 
        return( <>
        
            <div className="w-full   justify-end  items-end  mt-[35px] grid gap-4 ">                   

              {currentItems.map((item , index) =>(
                  <ListCourse  
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

<div className="absolute  xl:top-[1600px] xl:left-[500px]">
                      <PagiantionDashboard   
                                            paginate={paginate}
                                            row={slidercard}
                                            itemsPerPage={itemsPerPage}
                                            currentPage={currentPage}
                                                     
                                                     />
        </div>  
               
        </div>
        </>
        )

}

export default FinalList