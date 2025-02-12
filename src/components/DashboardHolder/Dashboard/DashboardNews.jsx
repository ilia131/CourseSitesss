import { Fragment } from 'react'
import LogoSvgComponent from './NewsDashboard/LogoSvgComponent';
import NewsList from './NewsDashboard/NewsList';
import useNewsDash from '../../common/hooks/hookapi/useGetNewsDash';





const DashboardNews = () => {
  const { news, loading, error } = useNewsDash();
 
   return (
    <Fragment>        
        <div className='xl:w-[797px] xl:h-[210px]  xl:border xl:border-[#f7f7f7] dark:border-gray-800 mt-[30px] relative max-md:flex max-md:justify-center ' >
           <LogoSvgComponent />
               <div className='xl:w-[797px] xl:h-[185px] xl:shadow-[0px_1px_3px_0px_#00000040] xl:rounded-[10px] xl:mt-[25px] xl:pt-[15px] xl:flex xl:justify-center  max-md:shadow-none max-md:pt-[60px]   max-smx4:dark:bg-gray-800 '>
                 <div className='grid xl:w-[710px] justify-start  max-md:dark:bg-gray-800 xl:ml-[8px] justify-items-start max-smx3:w-screen max-md:justify-center max-md:w-screen max-md:justify-items-center' dir='rtl'> 
                  <p className='text-[20px] h-[28px] flex items-center font-primaryMedium text-[#777777] max-md:mt-[20px] max-smx3:text-[17px] max-smx3:w-[310px] max-smx3:justify-center dark:text-white
                            '>جدید ترین اخبار و مقالات
                    </p> 
                      
                   <NewsList 
                       news={news}
                   />  
                 </div> 
              </div> 
         </div> 
    </Fragment>
  )
}

export default DashboardNews