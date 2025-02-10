import { useMemo } from 'react';

import { Outlet } from "react-router-dom"
import Header from "../common/Header/Header"
import Footer from "../common/Footer/Footer"
import { getItem } from "../../core/services/common/storage.services"
import imagess from '../../assets/landingpng'

const Layout = () => {
  const token = getItem("token")
  const navItems = useMemo(() => [
    { label: "اساتید", to: "/teachers" },
    { label: "اخبار و مقالات", to: "/News" },
    { label: "تماس با ما", to: "/contact" },
    { label: "دوره‌ها", to: "/courses" },
    { label: "صفحه نخست", to: "/" },
  ], []);

  const images = useMemo(() => ({
    profile: imagess.profile,
    shopbag: imagess.shopbag,
    logo: imagess.logo,
  }), []);
  return (
     <div>
        <Header token={token} navItems={navItems} images={images}  />
          <main>
            <Outlet/>
          </main>
         <Footer />    
     </div>
  )
}

export default Layout