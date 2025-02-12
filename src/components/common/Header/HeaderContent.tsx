import HeaderButtons from "./HeaderButtons";
import HeaderNavLinks from "./HeaderNavLinks";
import SideBarButton from "./SideBarButton";


interface Image {
  shopbag: string;
  profile: string;
  fav: string;
  logo: string;
}


interface SidebarState {
  sidebar: boolean;
  openSideMenu: () => void;
  closeSidebar: () => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

interface HeaderContentProps {
  images: Image;
  goToLogin: () => void;
  goToUser: () => void;
  token: string;
  navList: React.ReactNode;
  sidebarState: SidebarState;
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  images,
  goToLogin,
  goToUser,
  token,
  navList,
  sidebarState,
}) => {
  return (
    <>
      <HeaderButtons
        images={images}
        goToLogin={goToLogin}
        goToUser={goToUser}
        token={token}
      />
      <HeaderNavLinks navList={navList} />
      <SideBarButton {...sidebarState} images={images} navList={navList} />
    </>
  );
};

export default HeaderContent;