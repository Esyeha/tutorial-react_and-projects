import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const AuthLayouts = (props) => {
    const { children, title, type } = props
    return (
    <> 
    <Navbar judul="use ref"/>
        <div className="flex flex-col justify-center items-center p-4 ">
        <div>
            <div className="max-w-xs p-4">
                <div className="mb-6">
                    <h3 className="font-extrabold text-xl mb-1 text-blue-700">{title}</h3>
                    <p className="font-medium text-slate-500">Welcome, please enter your details</p>
                </div>
                {children}
                <div className="flex justify-center gap-3 p-3">
                    <p className="text-sm">
                        {type === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </p>
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