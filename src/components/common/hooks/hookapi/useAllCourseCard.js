import { useState, useEffect } from "react";
import { getReserveCourse, getmyCourse } from "../../../../core/services/api/user"; 

const useCourseCount = () => {
  const [count, setCount] = useState([]);
  const [count1, setCount1] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const courseCount = count?.length || 0;
  const courseCount1 = count1?.length || 0;

  const getCount1 = async () => {
    try {
      setLoading(true); 
      const data1 = await getReserveCourse();
      setCount1(data1 || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getCount = async () => {
    try {
      setLoading(true); 
      const data = await getmyCourse();
      setCount(data?.listOfMyCourses || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getCount();
    getCount1();
  }, []);

  return {
    courseCount,
    courseCount1,
    loading,
    error,
  };
};

export default useCourseCount;
