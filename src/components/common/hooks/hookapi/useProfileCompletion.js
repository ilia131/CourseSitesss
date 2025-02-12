import { useState, useEffect } from 'react';
import { getProfile } from '../../../../core/services/api/user';

const useProfileCompletion = () => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileCompletionPercentage = async () => {
    try {
      const profile = await getProfile();
      const fields = Object.keys(profile);
      const filledFields = fields.filter(field => profile[field]);
      const percentage = (filledFields.length / fields.length) * 100;
      return percentage;
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setError(error);
      return 0;
    }
  };

  useEffect(() => {
    const fetchCompletionPercentage = async () => {
      setLoading(true);
      const percentage = await getProfileCompletionPercentage();
      setCompletionPercentage(percentage);
      setLoading(false);
    };

    fetchCompletionPercentage();
  }, []);

  return { completionPercentage, loading, error };
};

export default useProfileCompletion;
