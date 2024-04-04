import Button from "../Button/Button"
import InputForm from "../Elements/Input/Index"

const FormLogin = () => {
    return (
        <form action="">

        <InputForm
        label="Name"
         name="Name" 
         type="text"
         placeholder="your name"/> 

        <InputForm
         label="Email"
         name="Email" 
        type="email"
        placeholder="example@gmail.com" /> 

        <InputForm 
        label="Password" 
        name="password" 
        type="password"
        placeholder="********" /> 

      <Button color="bg-blue-600 w-full">Login</Button>

  </form>
    )
}

export default FormLogin