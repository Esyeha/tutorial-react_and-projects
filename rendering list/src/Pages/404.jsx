import { Link, useRouteError } from "react-router-dom"
const NotFound = () => {
    const eror = useRouteError
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center p-4  bg-gray-900">
            <div className="text-center font-extrabold text-2xl text-red-700 border-2 border-red-500 p-11 rounded-3xl shadow-2xl shadow-slate-950">
                <h1>404</h1>
                <h3>PAGES NOT FOUND!</h3>
            </div>
            <Link to="/" className="text-red-600 underline mt-3">Back to Home</Link>
            <p>{eror.statusText || eror.message}</p>
        </div>
    )
}

export default NotFound