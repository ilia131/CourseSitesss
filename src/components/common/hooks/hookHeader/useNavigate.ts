import { useNavigate } from "react-router-dom";

interface NavigationFunctions {
  goToLogin: () => void;
  goToUser: () => void;
}

const useNavigation = (): NavigationFunctions => {
  const navigate = useNavigate();

  const goToLogin = (): void => navigate("/login");
  const goToUser = (): void => navigate("/user");

  return { goToLogin, goToUser };
};

export default useNavigation;
