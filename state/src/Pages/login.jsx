import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"


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