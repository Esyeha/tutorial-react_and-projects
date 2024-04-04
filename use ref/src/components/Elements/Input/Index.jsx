import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const  InputForm = forwardRef(( props, ref ) => {
    const { name, label, placeholder, type } = props
    return (
        <div className="mb-6">
            <Label htmlFor={name} label={label}/>
            <Input type={type} name={name} placeholder={placeholder} ref={ref}/>  
        </div>
    )
})

export default InputForm