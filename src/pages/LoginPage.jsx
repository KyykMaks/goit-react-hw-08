import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";

import LoginForm from "../components/LoginForm/LoginForm";


const Login = () => {
    const dispatch = useDispatch();
    const onLogin = (formData) => {
        dispatch(logIn(formData));

    };

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm onLogin = {onLogin}/>
        </div>
    )
}

export default Login;