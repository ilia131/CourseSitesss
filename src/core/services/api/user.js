import http from '../interceptor'

export const getProfile = async (user) => {
    try {
        const response = await http.get('/SharePanel/GetProfileInfo')
        
        return response;
    } catch(error) {
        return false
    }
}

export const EditProfileFunc = async (user) => {
    try {
        const response = await http.put('/SharePanel/UpdateProfileInfo', user);
        return response;
    } catch (error) {
        console.error("Error updating profile:", error);
        return false;
    }
};


export const getmyCourse = async () => {
    try {
        const response = await http.get('/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=')
        
        return response
    } catch(error) {

        return []
    }
}

export const getReserveCourse = async () => {
    try {
        const response = await http.get('/SharePanel/GetMyCoursesReserve')

        return response
    } catch(error) {
        return []
    }
}

export const getFavoriteCourse = async () => {
    try {
        const response = await http.get('/SharePanel/GetMyFavoriteCourses')

        return response
    } catch(error) {
        return []
    }
}

export const getNewsdash = async () => {
    try {
        const response = await http.get('/News/GetListNewsCategory')
   
        return response
    } catch (error) {
        return []
    }
}

export const getCourseDash = async () => {
    try {
        const response = await http.get('/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0')
 
        return response
    } catch(err) {
        return []
    }
}

export const AddProfileImage = async (formData) => {

    const response = await http.post('/SharePanel/AddProfileImage', formData)
 
    return response
}

export const SelectProfileImage = async (formData) => {
    const response = await http.post('/SharePanel/SelectProfileImage' ,formData)
    return response
}

export const DeletProfileImage = async (formData) => {
    const response = await http.delete('/SharePanel/DeleteProfileImage')
    return response
}