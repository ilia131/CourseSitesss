import Button from "../Button/Button";
import images from '../../../../assets/landingpng'

interface AuthButtonProps {
  token: string | null; 
  HandleNavigate: () => void;
  HandleNavigate1: () => void; 
}

const AuthButton: React.FC<AuthButtonProps> = ({ token, HandleNavigate, HandleNavigate1 }) => {
  return (
    <Button
      label={token ? "حساب کاربری" : "ورود | ثبت نام"}
      icon={images.profile} 
      onClick={token ? HandleNavigate1 : HandleNavigate}
    />
  );
};

export default AuthButton;