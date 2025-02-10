import FooterLinks from "./FooterLinks";


const LeftFooter = ({images , footerLinks}) => {    
  return (
          <div className='flex items-center gap-[20px] xl:mt-[138px]  max-md:w-full max-smx2:grid max-md:h-[300px] max-smx2:gap-0 max-lg:h-[300px] max-md:mt-[-55px] max-md:justify-center max-smx2:mt-[10px] max-lg:mt-[-50px]  lg:mt-[138px]  lg:mr-[8px] xl:mr-0 duration-700'>  
                   <FooterLinks links={footerLinks} />
                     <img src={images.enamad} width={111} height={111} className='mr-[10px] max-md:mr-[-10px]'/> 
            </div>  
  )
}

export default LeftFooter