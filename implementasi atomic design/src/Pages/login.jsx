import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"


const LoginPage = () => {
    return (
        <div>
            <AuthLayouts title="Login">
               <FormLogin />
            </AuthLayouts>

        </div>
    )
}

export default LoginPage