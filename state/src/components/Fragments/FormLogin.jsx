import Button from "../Button/Button"
import InputForm from "../Elements/Input/Index"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("name", event.target.name.value)
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href = ("/product")
  }
    return (
        <form onSubmit={handleLogin}>

        <InputForm
        label="Name"
         name="name" 
         type="text"
         placeholder="your name"/> 

        <InputForm
         label="Email"
         name="email" 
        type="email"
        placeholder="example@gmail.com" /> 

        <InputForm 
        label="Password" 
        name="password" 
        type="password"
        placeholder="********" /> 

      <Button color="bg-blue-600 w-full" type="submit">Login</Button>

  </form>
    )
}

export default FormLogin