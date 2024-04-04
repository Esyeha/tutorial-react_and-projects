import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"
import Navbar from "../components/Navbar/Navbar"


const RegisterPage = () => {
    return (
        <div>
            <Navbar judul="React router"/>
            <AuthLayouts title="Register">
               <FormRegister />
               <div className="flex justify-center gap-5 p-3">
                    <p className="text-sm">Have an account? </p>
                    <Link 
                    to="/login" 
                    className="text-blue-700 text-sm font-bold"
                    >Login
                    </Link>
               </div>
            </AuthLayouts>

        </div>
    )
}

export default RegisterPage