import { useMemo } from 'react';
import { useDarkMode } from '../../../config/DarkModeContext.jsx';
import { NavLink } from 'react-router-dom';
import useSidebar from '../hooks/hookHeader/useSidebar';
import useNavigation from '../hooks/hookHeader/useNavigate';
import HeaderContent from './HeaderContent';

interface Image {
  shopbag: string;
  profile: string;
  fav: string;
  logo: string;
}


interface NavItem {
  to: string;
  label: string;
}


interface HeaderProps {
  token: string | null;
  navItems: NavItem[];
  images: Image;
}

const Header : React.FC<HeaderProps> = ({token , navItems , images}) => {
 
const { isDarkMode, toggleDarkMode } = useDarkMode()
const { sidebar, openSideMenu, closeSidebar } = useSidebar(); 
const { goToLogin, goToUser } = useNavigation();

const navList = useMemo(() => {
  return navItems.map(({ to, label }) => (
    <NavLink key={to} to={to}>
      {label}
    </NavLink>
  ));
}, [navItems]);

  return (
      <header className={`h-[120px] w-full flex justify-center dark:bg-gray-800 text-nowrap`}>
          <div className='xl:w-[1247px] h-[50px]  lg:w-[1000px] smx:w-full max-sm:w-full flex justify-between  mt-[58px] max-h-full box-content max-md:px-[10px] max-md:mt-[20px] max-lg:px-[60px] duration-700'>
           <HeaderContent 
             images={images} 
             goToLogin={goToLogin} 
             goToUser={goToUser} 
             token={token || ''} 
             navList={navList} 
             sidebarState={{ sidebar, openSideMenu, closeSidebar, toggleDarkMode, isDarkMode }} 
           />
          </div>
       </header>
  )
}

export default Header