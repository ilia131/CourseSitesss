import { useMemo } from 'react';

interface UseQueryParamsProps {
    check: string[];
    type: number[];
    level: number[];
    array1: string[];
    range: number[];
    isActive: boolean,
  }

const useQueryParams = ({
  check,
  array1,
  type,
  level,
  range,
  isActive
}: UseQueryParamsProps): string => {  
  const getQueryParams = useMemo(() => {
    const params = new URLSearchParams();

   
    if (check.length === 0) {
      params.delete("ListTech");
      params.delete("TechCount");
    } else {
      params.set("TechCount", "1");
      params.set("ListTech", array1.join(","));
    }

    if (type) params.append('CourseTypeId', type.toString());
    if (level) params.append('courseLevelId', level.toString());
    if (isActive) {
      params.append("CostDown", range[0].toString());
      params.append("CostUp", range[1].toString());
    }

    return params.toString();
  }, [check, array1, type, level, range, isActive]);

  return getQueryParams;
};

export default useQueryParams;
