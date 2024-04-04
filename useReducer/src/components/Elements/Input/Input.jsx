import { forwardRef, useContext } from "react"
import { DarkMode } from "../../../context/DarkMode"

const Input = forwardRef(( props, ref ) => {
    const { type, placeholder, name } = props
    const { darkMode, setDarkMode } = useContext(DarkMode)
    return (
        <div>
            {darkMode ? <input
                type={type}
                placeholder={placeholder} 
                className="text-sm border rounded w-full py-2 px-3 text-slate-950 placeholder:opacity-100
                bg-slate-300" 
                name={name}
                ref={ref} />
                 : 
                 <input
                type={type}
                placeholder={placeholder} 
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-70" 
                name={name}
                ref={ref}/>}
        </div>
    )
})

export default Input