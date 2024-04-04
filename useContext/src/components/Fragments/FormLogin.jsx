import { useEffect, useRef, useState } from "react"
import Button from "../Button/Button"
import InputForm from "../Elements/Input/Index"
import { login } from "../../service/auth.service"

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem("name", event.target.name.value)
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token",res )
        window.location.href = ("/products")
    } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data);
      }
    })
  }

  const nameRef = useRef(null)

  useEffect(() => {
    nameRef.current.focus()
  }, [])
    return (
        <form onSubmit={handleLogin}>
         
        <InputForm
        label="Username"
         name="username" 
         type="text"
         placeholder="your name"
         ref={nameRef}/> 

        {/* <InputForm
         label="Email"
         name="email" 
        type="email"
        placeholder="example@gmail.com"
         />  */}

        <InputForm 
        label="Password" 
        name="password" 
        type="password"
        placeholder="********" /> 

      <Button color="bg-blue-600 w-full" type="submit">Login</Button>

      {loginFailed && <p className="text-red-500 font-semibold text-center mt-3">{loginFailed}</p>}

  </form>
    )
}

export default FormLogin