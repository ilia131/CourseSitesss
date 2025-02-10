import { NavLink } from "react-router-dom";

const ImageCard = ({images , style}) => {
  return (
         <div className={style}>
            <img src={images} className='object-cover transition duration-300 ease-in-out group-hover:blur-[5px]'/>
                <div className='w-full h-full  opacity-0 group-hover:opacity-100  transition-opacity duration-300  ease-in-out rounded-[20px] absolute inset-0  flex justify-center text-center items-center bg-gradient-to-t from-[rgb(0,43,42,0.8)]  to-[rgb(0,252,246,0.8)]'>
                    <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900]  text-black
                    font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                    max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                    rounded-[20px] xl:mt-[121px]  cursor-pointer
                    flex justify-center items-center  max-smx3:w-[100px]'
                    to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`}
                    >
                        مطالعه مطلب
                    </NavLink>
                    
              </div>                  
       </div>
  )
}

export default ImageCard