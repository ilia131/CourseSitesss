import ShopBag from "./ShopBag";
import ThemeToggle from "../ToggleTheme/ToggleTheme";
import AuthButton from "./AuthButton/AuthButton";

interface Image {
  shopbag: string;
  profile: string;
  fav: string;
}


interface HeaderButtonsProps {
  images: Image;  
  token: string | null;  
  goToLogin: () => void;  
  goToUser: () => void;   
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ images, token, goToLogin, goToUser }) => {
  return (
    <div className="flex gap-[14px] box-border top-[3px] relative">
      <div className="flex items-center gap-[13px] h-[50px]">
        <AuthButton token={token} HandleNavigate={goToLogin} HandleNavigate1={goToUser} />
         <ShopBag images={images} />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default HeaderButtons;