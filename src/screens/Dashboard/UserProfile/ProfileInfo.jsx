import { Fragment , useEffect, useState} from 'react'
import images from '../../../assets/dashboardpng'
import { getProfile } from '../../../core/services/api/user.js'
import moment from 'moment-jalaali';

const toPersianDate = (date) => {
   return moment(date).format('jYYYY/jMM/jDD');
 };
 



const ProfileInfo = ({HandleActive , bgColor , textColor}) => {
   const [isTooltipVisible, setTooltipVisible] = useState(false);
   const [dataInfo , setDataInfo] = useState([])
   const [malw , setMale] = useState('')
   const showTooltip = () => {
     setTooltipVisible(true);
   };
 
   const hideTooltip = () => {
     setTooltipVisible(false);
   };


  const getProfileInfo1 = async () => {
    const data = await getProfile()
     setDataInfo(data)
  }

  useEffect(()=> {
     getProfileInfo1()
     if(dataInfo?.gender) {
      setMale('زن')

     } else {
       setMale('مرد')

     }
  },[dataInfo?.gender])
  

  return (
    <Fragment>
         <div className="xl:w-[814px] 
         xl:h-[549px] xl:border xl:border-[#f7f7f7] dark:border-gray-800 xl:mt-[50px] xl:ml-[39px] relative 
         max-smx3:flex 
         max-smx3:justify-center 
         max-md:flex
         max-md:justify-center
         max-lg:flex
         max-lg:justify-center
         max-xl:flex
         max-xl:justify-center
         "
         // style={{borderColor:bgColor}}
         >
           <div className='w-[50px] h-[50px] xl:left-[719px] absolute z-[555] dark:bg-gray-800 
          justify-center flex flex-col items-center gap-[2px]  shadow-[0px_1px_2px_0px_#00000040]
          rounded-[10px] bg-[#F7F7F7]
        '
      //   style={{backgroundColor:bgColor}}

        >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#B5B5B5" stroke-width="2"/>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
              <path d="M5.77011 3.03723C3.88374 4.19552 -1.06219 6.56066 1.95022 9.52033C3.42175 10.966 5.06066 12 7.12117 12H18.8788C20.9394 12 22.5783 10.966 24.0498 9.52033C27.0622 6.56066 22.1163 4.19552 20.2299 3.03723C15.8064 0.320924 10.1936 0.320924 5.77011 3.03723Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </div>
        <div className='xl:w-[814px] xl:h-[521px] max-smx3:w-screen 
                           max-md:w-screen
                           relative dark:bg-gray-800'>
                    <div  className='xl:w-[814px] xl:h-[521px]  mt-[27px]
                                 dark:bg-gray-800
                                 rounded-[10px] xl:pr-[45px] xl:pl-[28px] pt-[41px] flex justify-between 
                                 shadow-[0px_1px_3px_0px_#00000040] 
                                 max-smx3:grid 
                                 max-smx3:shadow-none
                                 max-smx3:justify-center
                                 max-md:grid
                                 max-md:shadow-none
                                 max-md:justify-center
                                 max-md:px-[20px]
                                 max-md:gap-[50px]  
                                 max-lg:shadow-none
                                 max-lg:px-[40px]
                                 max-lg:gap-[30px]
                                 max-xl:shadow-none
                                 max-xl:px-[100px]
                                 max-xl:gap-[50px]
                                 bg-[#F6FFFF] max-smx3:gap-[30px]' 
          style={{direction:'rtl', }}
         //  backgroundColor:bgColor
         >  
         <div className='flex-col flex gap-[35px] mt-[-2px] ' style={{direction:'rtl'}}>
               <div className='flex gap-[4px]'>
                  <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                  ' >نام و نام خانوادگی :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.lName} {dataInfo?.fName}</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >کد ملی :</p>
                  {dataInfo? ( <span className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.nationalCode}</span>
               ) : ( 
               <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
               )}
                 
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >ایمیل :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.email}</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >تاریخ تولد :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{toPersianDate(dataInfo?.birthDay)}</span>
               </div>
               <div className='flex gap-[4px]'>
                <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >جنسیت :</p>
                  {malw?   <span className='text-[17px] font-primaryMedium text-[#CC6E00]' >{malw}</span> : 
                   <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >--</span>
                  }
                 
                 
               </div> 
               <div className='flex gap-[4px] xl:w-[334px] h-[70px] overflow-hidden leading-[24.11px]'>
                 <p className='text-[17px] font-primaryMedium text-[#CC6E00] max-smx3:w-[300px]  
                  max-md:w-[500px] max-lg:w-[300px]
                  max-xl:w-[350px]
                 line-clamp-3 font-[700]
                  ' >
                     <span className='text-[16px] text-[#ABABAB] font-[400] ml-[4px] truncate' >درباره  من :</span> 
                    <span 
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                    className='cursor-pointer'
                    >
                     {dataInfo.userAbout}</span> 
                    </p>
                    {isTooltipVisible && (
                               
                                 <div className="absolute  mt-2  transform 
                                 -translate-x-1/2  bg-cyan-300 border border-gray-300 shadow-lg
                                  xl:left-[600px] z-[4444] cursor-pointer font-primaryMedium text-[13px]
                                  rounded-md p-3 
                                  w-[200px] top-[300px]
                                 "
                                 onMouseEnter={showTooltip}
                                 onMouseLeave={hideTooltip}
                                 >
                                        {dataInfo?.userAbout}
                                 </div>
                      )}
               </div>
          
            </div>      
              <div className='flex-col flex gap-[35px] mt-[-2px] ' style={{direction:'rtl'}}>
              <div className='flex gap-[4px]'>
                  <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                  ' >شماره همراه :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.phoneNumber}</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >تلگرام :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.telegramLink}</span>
               </div>
               <div className='flex gap-[4px]'>
                 <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]

                  ' >لینکداین :</p>
                  <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.linkdinProfile}</span>
               </div> 
                <div className='flex gap-[4px] xl:w-[334px] h-[52px]
               max-smx3:w-[300px] 
               max-lg:w-[300px]
               max-xl:w-[300px]
               overflow-hidden leading-[24.11px]'>
                 <p className='text-[17px] font-primaryMedium text-[#CC6E00]   xl:line-clamp-3 font-[700]
                   max-smx3:truncate
                  ' ><span className='text-[16px] text-[#ABABAB] font-[400] ml-[4px]

                  ' >آدرس :</span> 
                    {dataInfo?.homeAdderess}
                    </p>
               </div> 
                 <div className='flex xl:w-[319px] h-[120px]  justify-between
                      mt-[-12px] mr-[1px]
               '  >
                    <div className='flex-col flex gap-[15px]' >
                     <div className='flex-col flex gap-[4px] '>
                         <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400]
                     ' >طول جغرافیایی :</p>
                     <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.latitude}</span>
                   </div>
                    <div className='flex-col flex gap-[4px] '>
                      <p className='text-[16px] font-primaryMedium text-[#ABABAB] font-[400] 
                     ' >عرض جغرافیایی :</p>
                     <span  className='text-[17px] font-primaryMedium text-[#CC6E00]'  >{dataInfo?.longitude}</span>
                    </div>
                    </div>
                    <div className='w-[120px] h-[120px] rounded-full '>
                       <img src={dataInfo?.currentPictureAddress} />
                    </div>
               </div>  
              
            </div>   
         </div> 
          <div className='max-smx3:w-full flex justify-center 
                  items-center dark:bg-gray-800 
                  max-md:h-[150px]
                  max-smx3:mt-[-30px] max-smx3:h-[150px]
                  max-lg:mt-[40px]
                  max-xl:mt-[60px]
                  '>
                  <button className='w-[113px] h-[30px] rounded-[20px] absolute
                     border border-[#01CEC9]
                     xl:left-[351px] xl:right-[350px]
                     xl:bottom-[39px]
                     max-smx3:top-[900px] 
                     
                     z-[555] flex items-center
                     gap-[12px] justify-center pb-[2px]
                     '
                        onClick={HandleActive}
                     >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_504_741)">
                        <path d="M8.20998 2.26647C8.64468 1.79551 8.86203 1.56003 9.09298 1.42267C9.65023 1.09124 10.3365 1.08093 10.9031 1.39548C11.1379 1.52584 11.3619 1.7547 11.8099 2.2124C12.258 2.67011 12.482 2.89896 12.6096 3.13883C12.9175 3.71761 12.9075 4.41859 12.583 4.98787C12.4485 5.2238 12.218 5.44583 11.757 5.88988L6.27151 11.1733C5.39784 12.0148 4.96099 12.4356 4.41503 12.6488C3.86906 12.862 3.26886 12.8464 2.06845 12.815L1.90513 12.8107C1.53969 12.8011 1.35697 12.7964 1.25075 12.6758C1.14453 12.5553 1.15904 12.3691 1.18804 11.9969L1.20379 11.7948C1.28542 10.747 1.32623 10.2232 1.53082 9.75224C1.73542 9.28132 2.08833 8.899 2.79416 8.13425L8.20998 2.26647Z" stroke="#005653" stroke-linejoin="round"/>
                        <path d="M7.58301 2.33337L11.6663 6.41671" stroke="#005653" stroke-linejoin="round"/>
                        <path d="M8.16699 12.8334H12.8337" stroke="#005653" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_504_741">
                        <rect width="14" height="14" fill="white"/>
                        </clipPath>
                           </defs>
                        </svg>      
                        <p className='font-primaryMedium text-[15px] text-[#005653]'>ویرایش</p>
                  </button>  
                  </div>   
        </div> 
     </div>
    </Fragment>
  )
}

export default ProfileInfo