import Button from "../Button/Button"
import InputForm from "../Elements/Input/Index"

const FormRegister = () => {
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

        <InputForm 
        label="Konfigurasi Password" 
        name="konfigurasi password" 
        type="password"
        placeholder="********" /> 

      <Button color="bg-blue-600 w-full">Register</Button>

  </form>
    )
}

export default FormRegister