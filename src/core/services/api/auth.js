import http from '../interceptor'
import { setItem } from '../common/storage.services';

export const loginAPI = async (user) => {
    try {
      
      const response = await http.post('/Sign/Login', user)
      if (response) {
        setItem("userId", response?.id); 
      }
      return response;
    
    } catch (error) {
        console.log(error)
        return []
         
    }
}