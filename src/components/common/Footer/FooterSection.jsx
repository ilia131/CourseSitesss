import LeftFooter from './LeftFooter'
import MiddleFooter from './MiddleFooter'
import RightFooter from './RightFooter'
import Svg2 from './Svg2'

const FooterSection = ({footerLinks, socialLinks , images ,SvgComponent}) => {
  return (
    <section className="h-[352px] w-full mb-[-7.5px] relative" >
    <SvgComponent />   
     <div className="z-[78888] max-xl:mt-[80px] xl:h-[340px] mt-[41px] flex items-center justify-center xl:pr-0 duration-700 max-md:bg-[#01CEC926]  max-md:dark:bg-[#1a424d] max-lg:bg-[#01CEC926] max-lg:dark:bg-[#1a424d]">
      <div className='mb-[32px] flex xl:w-[1247px] lg:w-[1024px] xl:gap-[157px] justify-end xl:h-[257px] max-md:grid max-lg:grid lg:justify-center lg:gap-[30px]' dir='rtl'> 
         <RightFooter/>
         <MiddleFooter images={images} socialLinks={socialLinks} />
         <LeftFooter images={images} footerLinks={footerLinks}/>
      </div>
    </div>
    
    </section>
  )
}

export default FooterSection