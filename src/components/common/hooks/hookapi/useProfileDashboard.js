import { useState, useEffect } from 'react';
import { getProfile } from '../../../../core/services/api/user'; 

const useProfileDashboard = () => {
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    const getProfileInfo1 = async () => {
      const data = await getProfile();
      setDataInfo(data);
    };

    getProfileInfo1();
  }, [dataInfo]);



  return { dataInfo};
};

export default useProfileDashboard;
