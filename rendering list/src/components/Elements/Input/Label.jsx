const Label = ( props ) => {
    const { htmlfor, label } = props
    return (
        <div>
            <label htmlFor={htmlfor} className="block text-slate-700 text-sm font-bold mb-2">{label}</label>
        </div>
    )
}

export default Label