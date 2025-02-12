import { useState, useEffect } from "react";
import { getNewsdash } from "../../../../core/services/api/user"; 

const useNewsDash = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsdash();
        setNews(data || []); 
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useNewsDash;
