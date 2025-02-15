import AllCourses from "./AllCourses"
import { useState , useEffect} from "react"
import FilterComponent from "./FilterComponent"
import { useGetCourseByTechnoloyQuery  , useGetAllCoursesQuery} from "../../redux/services/api/courseApiSlice"



const CoursesDisplay = () => {
  const [array1, setArray] = useState<any>([]); 
  const [check , setCheck] = useState<number[]>([])
  const {data: filteredData,  isFetching: isFetchingFilteredData } = useGetCourseByTechnoloyQuery({ techcount: 1, count: array1 });  
  const {data  , isLoading ,  isFetching: isFetchingAllCourses} = useGetAllCoursesQuery(null)

  const course = check.length > 0 ? (!isFetchingFilteredData ? filteredData?.courseFilterDtos || [] : []) : (!isFetchingAllCourses ? data?.courseFilterDtos || [] : []);

  return (
    <div className="flex w-full justify-center"> 
      <section className="w-[1248px] justify-center flex gap-[19px]">
         <AllCourses 
            isFetchingFilteredData={isFetchingFilteredData}
            isLoading={isLoading}
            isFetchingAllCourses={isFetchingAllCourses}
            check={check}
            course={course}
         />
         <FilterComponent setArray={setArray}  check={check} setCheck={setCheck}/>
      </section>
    </div>
  )
}

export default CoursesDisplay