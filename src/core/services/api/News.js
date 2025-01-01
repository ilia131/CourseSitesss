import { toast } from 'react-toastify';
import { baseUrl } from '../../../config';
import http from '../interceptor'

export const getNewsCard = async () => {
        try {
          const result = await http.get('/News?RowsOfPage=1000');
          return result;
         
          
        } catch (error) {
            return console.log("data not found")
        }
};

export const GetNewsById = async (id) => {
  try {
    const result = await http.get(`/News/${id}`);
    return result;
   
    
  } catch (error) {
      return console.log("data not found")
  }
};

export const getNewsComment = async (id) => {
  try {
    const result = await http.get(`/News/GetNewsComments?NewsId=${id}`)
    return result
  } catch (error) {
     return console.log('data not found')
  }
}

export const getReplayComment = async (id) => {
  try {
    const result = await http.get(`/News/GetRepliesComments?Id=${id}`)
    toast.success('باموفقیت ارسال شد')
    return result
  } catch (error) {
     return console.log('data not found')
  }
}


export const PostNewsComment = async (data) => {
  try {
    const result = await http.post('/News/CreateNewsComment', data)
    toast.success('موفقیت آمیز بود')
    return result
  } catch (error) {
     return toast.error(error.response?.data)
  }
}

export const PostReplyNewsComment = async (data) => {
  try {
    const result = await http.post('/News/CreateNewsReplyComment', data)
    return result
  } catch (error) {
     return console.log('data not found')
  }
}

