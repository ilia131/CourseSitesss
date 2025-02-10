import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");
  const goToUser = () => navigate("/user");

  return { goToLogin, goToUser };
};

export default useNavigation;