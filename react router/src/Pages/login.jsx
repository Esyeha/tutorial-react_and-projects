import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import Navbar from "../components/Navbar/Navbar"


const LoginPage = () => {
    return (
        <div>
         <Navbar judul="React router"/>   
            <AuthLayouts title="Login">
               <FormLogin />
               <div className="flex justify-center gap-5 p-3">
                    <p className="text-sm">Don't have an account? </p>
                    <Link 
                    to="/register" 
                    className="text-blue-700 text-sm font-bold"
                    >Register
                    </Link>
               </div>
            </AuthLayouts>

        </div>
    )
}

export default LoginPage