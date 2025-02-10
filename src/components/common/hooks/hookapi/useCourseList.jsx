import { useEffect , useState } from "react";
import {getCourseList} from '../../../../core/services/api/course'
const useCourseList = (count) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const data = await getCourseList(count);
          setCourses(data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
      fetchCourses();
    }, [count]);
  
    return { courses, loading, error };
  };

export default useCourseList
  