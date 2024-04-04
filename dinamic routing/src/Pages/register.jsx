import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import Navbar from "../components/Navbar/Navbar"


const RegisterPage = () => {
    return (
        <div>          
            <AuthLayouts title="Register" type="register">
               <FormRegister />
              
            </AuthLayouts>

        </div>
    )
}

export default RegisterPage