import { Helmet } from "react-helmet-async";
import RegisterForm from "../components/RegistrationForm/RegistrationForm";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";


const Register = () => {
    const dispatch = useDispatch();

    const onRegister = (formData) => {
        dispatch(register(formData))
    }

    return(
        <div>
            <Helmet>
            <title>Registration</title>
            </Helmet>
            <RegisterForm onRegister={onRegister}/>
        </div>
    ) 
};
export default Register;