import http from '../interceptor'


export const getHeroDetail = async () => {
    const result = await http.get('/Home/LandingReport')
    return result
}