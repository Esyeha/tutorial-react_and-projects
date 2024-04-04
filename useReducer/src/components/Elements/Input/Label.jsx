import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = ( props ) => {
    const { htmlfor, label } = props
    const { darkMode, setDarkMode } = useContext(DarkMode)

    return (
        <div>
           {darkMode ? <label htmlFor={htmlfor} className="block text-white text-sm font-bold mb-2">{label}</label> : <label htmlFor={htmlfor} className="block text-slate-700 text-sm font-bold mb-2">{label}</label>}
        </div>
    )
}

export default Label