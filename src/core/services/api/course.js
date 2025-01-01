import http from '../interceptor'
import toast from 'react-hot-toast'
export const getFilterCourseBytech = async () => {
        try {
          const result = await http.get(
            `/Home/GetTechnologies`,
         );
  
          return result
          
        } catch (error) {
            return []
        }
};


export const getReserveCourse = async (id) => {
  const result = http.get(`/CourseReserve/${id}`)
  return result
}

export const searchCourse = async (query) => {
  const result = http.get(`/SharePanel/GetMyCourses?Query=${query}`)
  return result
}




export const getAllCourse = async () => {
  try {
    const result = await http.get(
      `/Home/GetCoursesWithPagination?RowsOfPage=1000`,
   );

    return result
    
  } catch (error) {
      return []
  }
};


export const getTech = async (techcount,count) => {
  try {
    const result = await http.get(
      `/Home/GetCoursesWithPagination?TechCount=${techcount}&ListTech=${count}`,
   );
    console.log(result)
    return result
    
  } catch (error) {
      return []
  }
};

export const getCourseList = async() => {
  const result = await http.get(
    '/Home/GetCoursesTop?Count=5'
  )
  return result
}

export const getCourseDetail = async (id) => {
  const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`)

  return result
}

export const getCommentById = async (id) => {

    const result = await http.get(`/Course/GetCourseCommnets/${id}`)

    return result
}

export const getReplyComment = async ( courseId , commentsId ) => {
    const result = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentsId}`)

    return result

}


export const postComment = async (data) => {
  
  const result = await http.post('/Course/AddCommentCourse', data)

  return result

}

export const postReplayComment = async (data) => {
  const result = await http.post('/Course/AddReplyCourseComment', data)

  return result

}

export const getCourseType = async () => {
  const result = await http.get('/CourseType/GetCourseTypes')
  return result
}

export const filterByTypeCourse = async (id) => {
  const result = await http.get(`/Home/GetCoursesWithPagination?CourseTypeId=${id}`)
  return result
}

export const getCourseLevel = async () => {
  const result = await http.get('/CourseLevel/GetAllCourseLevel')
  return result
}

export const filterByLevelCourse = async (id) => {
  const result = await http.get(`/Home/GetCoursesWithPagination?courseLevelId=${id}`)
  return result
}

export const filterbyCostdp = async (d , p) => {
   const result = await http.get(`/Home/GetCoursesWithPagination?CostDown=${d}&CostUp=${p}`)
   return result
}

export const ReserveCourse = async (formdata) => {
  try {
  const result = await http.post('/CourseReserve/ReserveAdd', formdata)
  toast.success('با موفقیت رزرو شده است')
  return result
  } catch(err) {
   toast.error('این دوره قبلن رزرو شده است')
  }
}