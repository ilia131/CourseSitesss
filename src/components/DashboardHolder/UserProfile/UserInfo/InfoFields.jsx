import {UserInfoSection , UserAbout , UserImageGeo} from "./index";


const InfoFields = ({
     userInfoFields, 
     userInfoFields2 , 
     geoLocationFields ,
     text, 
     dataInfo,
     
}) => {
  return (
    <div  className='xl:w-[814px] xl:h-[521px]  mt-[27px]  dark:bg-gray-800 rounded-[10px] xl:pr-[45px] xl:pl-[28px] pt-[41px] flex justify-between shadow-[0px_1px_3px_0px_#00000040] max-smx3:grid max-smx3:shadow-none max-smx3:justify-center max-md:grid max-md:shadow-none
            max-md:justify-center max-md:px-[20px]max-md:gap-[50px]  max-lg:shadow-none max-lg:px-[40px] max-lg:gap-[30px] max-xl:shadow-none max-xl:px-[100px] max-xl:gap-[50px] bg-[#F6FFFF] max-smx3:gap-[30px]' dir='rtl'>  
        <div className='flex-col flex gap-[35px] mt-[-2px]' dir='rtl'>
              <UserInfoSection 
                  userInfoFields={userInfoFields}
                  dataInfo={dataInfo}
               />
             <UserAbout 
              text={text}
             />
         </div>      
         <div className='flex-col flex gap-[35px] mt-[-2px] ' dir='rtl'>
           <UserInfoSection 
                    userInfoFields={userInfoFields2}
                    dataInfo={dataInfo}
               />
        <div className='flex xl:w-[319px] h-[120px]  justify-between mt-[-12px] mr-[1px]'>
            <div className='flex-col flex gap-[15px]' >
             <UserInfoSection 
               userInfoFields={geoLocationFields}
               dataInfo={dataInfo}
           />
        </div>
         <UserImageGeo 
            dataInfo={dataInfo}
        />
     </div>  
   </div>   
</div> 
  )
}

export default InfoFields