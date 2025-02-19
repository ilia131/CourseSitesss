import { useAppSelector } from "../../../../redux/hook";
import { useGetCourseByTechnologyandTypeandLevelQuery } from "../../../../redux/services/api/courseApiSlice";
import  useFilterApi from './useFilterApi'


import useQueryParams from "./useParamsQury";

const useFilterCourse = () => {
  const { check, type, level, array1, range, isActive, radioCheckLevel, radioCheckType } = useAppSelector((state) => state.filters);

  const paramsString = useQueryParams({ check, array1, type, level, range, isActive });


  const {
    data: filteredData,
    isFetching: isFetchingFilteredData,
    isLoading: isLoadingCourses,
    error: errorCourses
  } = useGetCourseByTechnologyandTypeandLevelQuery({ apiParams: paramsString }, { refetchOnMountOrArgChange: true, skip: false });


  


  return {
    check,
    filteredData,
    isLoadingCourses,
    isFetchingFilteredData,
    radioCheckLevel,
    radioCheckType,
    errorCourses,
  };
};

export default useFilterCourse;
