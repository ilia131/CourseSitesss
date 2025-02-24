import AllCourses from "./AllCourses"
import FilterComponent from "../filters/FilterComponent"
import useFilterCourse from "../../common/hooks/hookCoursesScreen/useFilterCourse";
import useFilterApi from '../../common/hooks/hookCoursesScreen/useFilterApi'
import useTransformedData from "../../common/hooks/hookCoursesScreen/useTransoformeddata";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { useEffect } from "react";
import { setSidebar, toggleSidebar } from "../../../redux/features/sidbarfilterSlice";
import FilterOptions from "../filters/FilterOptions";

const CoursesDisplay = () => {
  const {
    filteredData,
    check,
    isFetchingFilteredData,
    isLoadingCourses,
    radioCheckLevel,
    radioCheckType,
   } = useFilterCourse();
 
  const {
    technologyData, isLoadingTech, errorTech,
    typeData, isLoadingType, errorType,
    levelData, isLoadingLevel, errorLevel
  } = useFilterApi();

  
  const transFormeddata = useTransformedData(technologyData, typeData, levelData);
  
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sideBarfilter.isSidebarOpen);
  const handleSideBar = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className="flex w-full justify-center"> 
      <section className="w-[1248px] justify-center flex gap-[19px]">
          <AllCourses 
            isFetchingFilteredData={isFetchingFilteredData}
            isLoading={isLoadingCourses}
            check={check}
            course={filteredData?.courseFilterDtos || []}
         />
           <FilterComponent
             check={check}
             transFormeddata={transFormeddata}
             isLoadingLevel={isLoadingLevel}
             radioCheckLevel={radioCheckLevel}
             radioCheckType={radioCheckType}
             handleSideBar={handleSideBar}
         />
      </section>
    </div>
  )
}

export default CoursesDisplay