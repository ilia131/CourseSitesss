
import images from "../../assets/landingpng"

const ListCourse=({price, teacher, student , title , duration})=>{
    return(
        <div className="lg:w-[80%] xl:w-[100%] ij:w-[90%] cd:w-[87%] 
         md:w-[80%] md:left-[100px] sm:w-[70%] sm:left-[150px] cd:left-[110px] ij:left-[80px] relative 
         ab:w-[38%] ab:left-[280px] uv:w-[50%] uv:left-[230px] op:w-[60%] op:left-[170px]
          lg:left-[170px] xl:left-0 sm:h-[200px] h-[120px] uv:h-[150px] rounded-[10px] shadow-[0px_1px_2px_0px_#00000040]
          dark:bg-gray-200  justify-end flex ">
            <div className=" w-[600px] ">
            <p className='
                op:text-[26px]  text-[22px]
                text-right mr-[17px] 
                font-primaryMedium 
                text-[#444444] 
                mt-[10px]
                '>
                  {title}
             </p>
             <div className='flex justify-between '>
              <div className=' gap-[7px] mb-24 relative bottom-[22px] op:bottom-6  hidden uv:grid'>
                 
                 <div className='flex items-center  ml-[10px] gap-[3px]'>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.stars} width={15} height={15}/>
                    <img src={images.star1} width={15} height={15}/>

                 
                 </div>
              </div>
              <div className='grid gap-[0px] mt-0 uv:mt-[10px] justify-end justify-items-end uv:ml-0 ml-[125px]'>
                 <div className='flex items-center  mr-[17px] gap-[7.7px] '>
                     <p className='text-[16px] text-[#888888]'>{teacher}</p>
                     <img src={images.profile1} width={16.31} height={17}/>
                 </div>
                 <div className='flex items-center   mr-[19px] uv:mt-2 h-[16px] gap-[7.7px]'>
                     <p className='text-[15px] text-[#888888] '>{duration}</p>
                     <img src={images.time} width={12} height={12} />
                 </div>
                 <div className='flex items-center  mr-[18px] mb-12 uv:mb-4 gap-[3px]'>
                    <p className='text-[16px] text-[#888888]' >{student}</p>                    
                    <img src={images.hat} width={15} height={15} />

                 </div>
              </div>
              
            </div>
            <div className='flex  ml-[10px] uv:ml-[17px] mr-[17px] relative sm:bottom-0 bottom-[65px] uv:bottom-12'>
              <div className='flex items-center w-[134px] h-[25px] gap-[5px]'> 
                  <span className='text-[12px] text-[#006865] 
                   mt-0 uv:mt-[7px]  pl-[2px]'>تومان</span>
                 <p  className='text-[17px] uv:text-[20px] op:text-[23px] text-[#006865] mt-[-2px] '>{price}</p>
               </div>
               <div className='mt-[3px] op:ml-2 relative uv:right-0 right-6' >
                  <img src={images.buyit} width={21.9} height={23} />
               </div>
               
            </div>
            </div>                    
                    
                    
                     <div className='w-[233px] h-[120px] uv:h-[150px] sm:h-[200px] 
         
         flex justify-center items-center bg-gradient-to-r from-[#A259FF] to-[#D47300]
         rounded-[10px] z-[0] '>
         <img src={images.figmaicons} width={80} height={80} />
       </div>

        </div>
    )

}

export default ListCourse