import Navbar from "../Navbar/Navbar"

const AuthLayouts = (props) => {
    const { children, title } = props
    return (
    <> 
        <div className="flex flex-col justify-center items-center p-4 ">
        <div>
            <div className="max-w-xs p-4">
                <div className="mb-6">
                    <h3 className="font-extrabold text-xl mb-1 text-blue-700">{title}</h3>
                    <p className="font-medium text-slate-500">Welcome, please enter your details</p>
                </div>
                {children}
            </div>
        </div>
    </div>
    
    </>

    )
}

export default AuthLayouts