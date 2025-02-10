import HeaderButtons from "./HeaderButtons";
import HeaderNavLinks from "./HeaderNavLinks";
import SideBarButton from "./SideBarButton";


const HeaderContent = ({ images, goToLogin, goToUser, token, navList, sidebarState }) => {
    return (
      <>
        <HeaderButtons images={images} goToLogin={goToLogin} goToUser={goToUser} token={token} />
        <HeaderNavLinks navList={navList} />
        <SideBarButton {...sidebarState} images={images} navList={navList} />
      </>
    );
  };
  
export default HeaderContent;