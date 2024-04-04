import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { useContext } from "react"
import { DarkMode } from "../../context/DarkMode"

const AuthLayouts = (props) => {
    const { children, title, type } = props
    const { darkMode, setDarkMode } = useContext(DarkMode)
    {
        console.log(darkMode);
    }
    return (
    <> 
    <Navbar judul="useContext"/>
        <div className={`min-h-screen flex flex-col justify-center items-center p-4 ${darkMode ? "bg-slate-900" : "bg-white"}`}>
        <div>
            <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div className="max-w-xs p-4">
                <div className="mb-6">
                    <h3 className="font-extrabold text-xl mb-1 text-blue-700">{title}</h3>
                   {darkMode ?  <p className="font-medium text-white">Welcome, please enter your details</p> :  <p className="font-medium text-slate-500">Welcome, please enter your details</p>}
                </div>
                {children}
                <div className="flex justify-center gap-3 p-3">
                    {darkMode ? <p className="text-sm text-white">
                        {type === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </p> : <p className="text-sm">
                        {type === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </p>}
                        {type === "login" ? <Link to="/register" className="text-blue-700 text-sm font-bold">Register</Link> : <Link to="/login" className="text-blue-700 text-sm font-bold">Login</Link> }      
                        {/* <Navigation type={type} /> */}
               </div>
            </div>
        </div>
    </div>   
    </>
    )
}

const Navigation = ({ type }) => {
    if(type === "login") {
        return (
            <p className="text-sm">
                Don't have an account?{"  "}
                <Link to="/register" className="text-blue-700 text-sm font-bold">Register
                </Link> 
            </p>
        )
    } else {
        return (
            <p className="text-sm">
                Already have an account?{"  "}
                <Link to="/login" className="text-blue-700 text-sm font-bold">Login
                </Link> 
            </p>
        )
    }
}

export default AuthLayouts