import http from '../interceptor'


export const getLastColor = async () => {
   const result = await http.get('/SiteSetting/LastColorPalet')
   return result
}