import { useState, useEffect } from 'react';
import { getHeroDetail } from '../../../../core/services/api/Hero';

const useHero = () => {
  const [hero, setHero] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const fetchHeroData = async () => {
    try {
      const data = await getHeroDetail();
      setHero(data); 
    } catch (err) {
      setError(err);
      console.error("Error fetching hero data:", err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []); 

  return { hero, loading, error }; 
};

export default useHero;