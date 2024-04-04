const Input = ( props ) => {
    const { type, placeholder } = props
    return (
        <div>
            <input type={type} placeholder={placeholder} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" name={name} id={name}/>
        </div>
    )
}

export default Input