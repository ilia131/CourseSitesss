import {Fragment , useState , useEffect} from 'react'
import images from '../../../assets/dashboardpng'
import { getNewsdash } from '../../../core/services/api/user'
import moment from 'moment-jalaali';

const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};




const Group85 = ({bgColor}) => {
  const [news , setNews] = useState([])
  const getNewsdash1 = async () => {
    const data = await getNewsdash()

    setNews(data)
     
  }

  useEffect(() => {
    getNewsdash1()
  })
  return (
    <Fragment>
        
        <div className='xl:w-[797px] xl:h-[210px]  xl:border xl:border-[#f7f7f7]
        dark:border-gray-800 mt-[30px] relative max-md:flex max-md:justify-center ' 
        // style={{borderColor:bgColor}}
         >
            <div className='h-[50px] w-[50px] absolute xl:left-[41px] dark:bg-gray-800
              shadow-[0px_1px_2px_0px_#00000040] flex justify-center items-center rounded-[10px]
              bg-[#f7f7f7] max-md:mt-[10px]             
            '>
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                 <path d="M15.8943 19.7789C18.379 19.4848 20.8202 18.8984 23.1675 18.032C21.1797 15.8301 20.0813 12.9679 20.0857 10.0014V9.00125C20.0857 6.87919 19.2427 4.84404 17.7421 3.34351C16.2416 1.84299 14.2065 1 12.0844 1C9.96234 1 7.92719 1.84299 6.42666 3.34351C4.92614 4.84404 4.08315 6.87919 4.08315 9.00125V10.0014C4.08717 12.968 2.98829 15.8303 1 18.032C3.31103 18.8855 5.74741 19.4789 8.27447 19.7789M15.8943 19.7789C13.3632 20.0792 10.8056 20.0792 8.27447 19.7789M15.8943 19.7789C16.0865 20.3789 16.1343 21.0157 16.0338 21.6375C15.9333 22.2594 15.6874 22.8488 15.3161 23.3576C14.9448 23.8665 14.4585 24.2804 13.8969 24.5658C13.3354 24.8512 12.7143 25 12.0844 25C11.4545 25 10.8334 24.8512 10.2719 24.5658C9.71029 24.2804 9.22405 23.8665 8.85272 23.3576C8.4814 22.8488 8.23548 22.2594 8.135 21.6375C8.03452 21.0157 8.0823 20.3789 8.27447 19.7789" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div> 
               <div className='xl:w-[797px] xl:h-[185px] xl:shadow-[0px_1px_3px_0px_#00000040] xl:rounded-[10px] xl:mt-[25px] xl:pt-[15px]
                xl:flex xl:justify-center  max-md:shadow-none 
                max-md:pt-[60px]  
               max-smx4:dark:bg-gray-800 
              '>

                 <div className='grid xl:w-[710px] justify-start  max-md:dark:bg-gray-800
                   xl:ml-[8px] justify-items-start max-smx3:w-screen max-md:justify-center max-md:w-screen
                   max-md:justify-items-center

                 ' 
                 style={{direction:'rtl'}}
                 > 
                  <p className='
                            text-[20px] h-[28px]
                            flex items-center
                            font-primaryMedium text-[#777777]
                            max-md:mt-[20px] max-smx3:text-[17px]
                            max-smx3:w-[310px] max-smx3:justify-center
                            dark:text-white
                            '>جدید ترین اخبار و مقالات
                         </p> 
                      
                        <div className='mb-[12px] grid   dark:text-white max-md:pt-[40px] 
                        max-md:gap-[30px] max-md:p-[20px] max-xl:gap-0
                        '>

                        {news.slice(0,3).map((item, index) => (
       
    
                        <div className='xl:flex xl:justify-between text-[14px] 
                           xl:w-[710px] font-primaryMedium max-lg:mt-[20px] max-md:mt-0
                         text-[#555555] items-center max-md:grid max-md:justify-items-center h-[38.34px]
                           max-smx3:mt-0 max-lg:flex max-lg:gap-[350px] max-xl:gap-[380px]
                           max-xl:flex max-xl:mt-[50px] 
                           max-md:gap-0  border-dashed max-lg:w-[750px]
                           max-md:w-full max-xl:w-full max-xl:justify-between
                           
                                        border-b-[1px] border-[#AAAAAA] 
                      ' >
                          <p className='h-[20px] max-smx3:w-[200px] max-smx3:text-center dark:text-[#979797]
                             truncate   max-md:w-[310px] max-lg:w-full
                          ' >
                        {item.googleTitle} 

                            <span className='xl:mr-[7px] text-[#DC0000]' >جدید</span>
                          </p>
                           <p  className='text-[13px] text-[#999999] max-smx3:mt-[1px] max-md:mt-[1px]' 
                              style={{direction:'ltr'}}
                          >{toPersianDate(item.insertDate)}</p> 
                        </div>  
                    ))}
                       
                         </div>  
                 </div> 
              </div> 
         </div> 
    </Fragment>
  )
}

export default Group85