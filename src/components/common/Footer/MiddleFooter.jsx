import LogoComponent from './LogoComponent'
import EmailComponent from './EmailComponent'
import SocialIconsComponent from './SocialIconsComponent'

const MiddleFooter = ({images , socialLinks}) => {
  return (
            <div className='grid justify-center gap-[37px] relative top-[20px] left-[2px] max-md:gap-[10px] max-md:h-[300px] max-lg:gap-[10px] max-lg:h-[300px]  lg:mr-[5px] xl:mr-0' >
                  <LogoComponent logo={images.logo} />
                   <div className='grid gap-[14px] max-md:mt-[-90px] max-lg:mt-[-90px]'>
                    <EmailComponent email="info@pazhooheshgah.ir" />
                    <SocialIconsComponent socialLinks={socialLinks} />
                   </div>
             </div>
  )
}

export default MiddleFooter