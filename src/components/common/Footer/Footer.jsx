import images from '../../../assets/landingpng'
import FooterSection from './FooterSection'
import Svg2 from './Svg2'
import Copyright from './UnderFooter'

const Footer = () => {
  const socialLinks = [
    { icon: images.telegram, alt: "Telegram", link: "https://t.me/example" },
    { icon: images.instagram, alt: "Instagram", link: "https://instagram.com/example" },
    { icon: images.youtube, alt: "YouTube", link: "https://youtube.com/example" },
    { icon: images.linkedin, alt: "LinkedIn", link: "https://linkedin.com/in/example" },
  ];
  const footerLinks = [
    ["اساتید برتر", "دسته بندی ها", "خدمات ما", "ورود به حساب"],
    ["دوره ها", "اخبار و مقالات", "پادکست ها", "تماس با ما"]
  ];
  return (
    <footer className="grid   pt-[2px] dark:bg-gray-800">
            <FooterSection
               socialLinks={socialLinks}
               footerLinks={footerLinks}
               images={images}
               SvgComponent={Svg2}
           />
         <Copyright 
              text="کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد" 
             icon={images.copyright} 
          />
    </footer>
  )
}

export default Footer