import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useSel"

const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const { isLogIn, isRefreshing } = useAuth();

    return !isLogIn && !isRefreshing ? 
        <Navigate to={redirectTo} replace /> : Component;
    };

    export default PrivateRoute