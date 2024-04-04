import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import Navbar from "../components/Navbar/Navbar"


const LoginPage = () => {
    return (
        <div>  
            <AuthLayouts title="Login" type="login">
               <FormLogin />
            
            </AuthLayouts>

        </div>
    )
}

export default LoginPage