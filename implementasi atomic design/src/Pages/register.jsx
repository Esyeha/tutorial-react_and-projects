import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"


const RegisterPage = () => {
    return (
        <div>
            <AuthLayouts title="Register">
               <FormRegister />
            </AuthLayouts>

        </div>
    )
}

export default RegisterPage