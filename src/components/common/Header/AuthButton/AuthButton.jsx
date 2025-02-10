import Button from "../Button/Button";
import images from '../../../../assets/landingpng'

const AuthButton = ({ token , HandleNavigate , HandleNavigate1}) => {
    return (
      <Button 
        label={token ? "حساب کاربری" : "ورود | ثبت نام"} 
        icon={images.profile} 
        onClick={token ? HandleNavigate1 : HandleNavigate} 
      />
    );
};

export default AuthButton