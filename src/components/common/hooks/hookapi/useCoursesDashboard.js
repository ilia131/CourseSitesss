import { useState, useEffect } from "react";
import { getCourseDash } from "../../../../core/services/api/user"; 

const useCoursesDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getCourseDash();
      const coursesList = data?.courseFilterDtos?.slice(0, 2) || [];
      setCourses(coursesList);
      setFilteredCourses(coursesList);
    } catch (err) {
      setError(err.message || "مشکلی پیش آمده است.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []); 
  return { courses, filteredCourses, loading, error };
};

export default useCoursesDashboard;
