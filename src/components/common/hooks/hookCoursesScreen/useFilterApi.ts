import { 
    useGetLevelFilterQuery , 
    useGetTechnologyFilterQuery , 
    useGetTypeFilterQuery 
} from "../../../../redux/services/api/courseApiSlice";

export default  function useFilterApi() {
    const { data: technologyData, isLoading: isLoadingTech, error: errorTech } = useGetTechnologyFilterQuery(undefined);
    const { data: typeData, isLoading: isLoadingType, error: errorType } = useGetTypeFilterQuery(undefined);
    const { data: levelData, isLoading: isLoadingLevel, error: errorLevel } = useGetLevelFilterQuery(undefined);
    return {
      technologyData, isLoadingTech, errorTech,
      typeData, isLoadingType, errorType,
      levelData, isLoadingLevel, errorLevel
    };
  };
  