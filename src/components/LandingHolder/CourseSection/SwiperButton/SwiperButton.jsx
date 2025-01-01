import images from '../../../../assets/landingpng'

const SwiperNavButton = ({handleNext, handlePrev}) => {
  return (
    <section className='xl:grid xl:gap-[9px] xl:relative xl:right-[600px] xl:bottom-[111px] xl:z-[543534]
                        smx4:relative 
                        smx4:bottom-[130px] 
                        smx4:grid smx4:gap-[8px]   
                        smx4:z-[999]  
                        smx4:right-[280px]
                        sm1:relative 
                        sm1:bottom-[130px] 
                        sm1:grid 
                        sm1:gap-[8px]   
                        sm1:z-[999]  
                        sm1:right-[140px]
                        max-lg:relative
                        max-lg:bottom-[130px]
                        max-lg:z-[9999]
                        max-lg:right-[280px]
                        max-lg:gap-[8px]
                        max-lg:grid
                      
                        lg:relative
                        lg:bottom-[130px]
                        lg:z-[9999]
                        lg:right-[280px]
                        lg:gap-[8px]
                        lg:grid
                        ' 
    >
         
          <button className="w-[35px] h-[35px] rounded-full
          max-md:w-[30px] max-md:h-[30px]
          flex justify-center items-center bg-[#FFFFFF]
          border border-[#c3c3c3] drop-shadow-lg  z-[99999]"  onClick={handlePrev}>
                  <img src={images.rightarrow} width={18} height={18}/>
          </button>
          <button className="w-[35px] h-[35px] rounded-full border border-[#c3c3c3]
          flex justify-center items-center shadow-lg bg-[#FFFFFF] z-[99999]
          max-md:w-[30px] max-md:h-[30px]
          " onClick={handleNext}>
                  <img src={images.leftarrow} width={18} height={18}/>
          </button>
       
    </section>
  )
}

export default SwiperNavButton