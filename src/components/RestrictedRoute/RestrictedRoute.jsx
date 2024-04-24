import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useSel";

const RestrictedRoute = ({ component: Component, redirectTo ='/'}) => {
  const {isSignedIn} = useAuth();

  return isSignedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;