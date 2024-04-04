import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Fragments/Card"
import Button from "../components/Button/Button"
import { useContext, useEffect, useState } from "react"
import { getProducts } from "../service/products.service"
import { useLogin } from "../hooks/uselogin"
import TableCard from "../components/Fragments/TableCard"
import { useSelector } from "react-redux"
import { DarkMode } from "../context/DarkMode"

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const username = useLogin()


    useEffect(() => {
        getProducts((data) => {
           setProducts(data)
        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = ("/login")
    }

    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    },[cart])


    const { darkMode, setDarkMode } = useContext(DarkMode)

    return (
        <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-white"}`}>
            <div className="flex justify-between bg-indigo-950 p-3">
                {
                    darkMode ? <button className="bg-slate-100 p-2 text-slate-950 rounded" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button> : <button className="bg-black p-2 text-white rounded" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                }
                <h1 className="text-2xl font-extrabold text-zinc-100">Product Page</h1>

                <div className="flex items-center">
                    <p className="text-white">{username}</p>
                    {localStorage.getItem("token") ? <Button color="bg-blue-600 h-8 w-18 ml-3" onClick={handleLogout}>Logout</Button> : null}    
                </div>
              
            </div>
            <div className="flex justify-center p-4">

                <div className="w-2/3 flex gap-4 flex-wrap">
                        { products.length > 0 && products.map((product) => {
                        return (
                            <Card key={product.id}>
                                <Card.Header image={product.image} id={product.id}/>
                                <Card.Body name={product.title}>
                                    {product.description}
                                </Card.Body>
                                <Card.Footer id={product.id} price={product.price} />
                            </Card>
                        )
                    })}
                </div>
               {
                darkMode ?  <div className="w-2/4 text-white">
                <div className="flex justify-between w-11/12">
                    <h1 className="text-3xl font-bold ml-5 mb-2 text-blue-500">Cart</h1>
                    <img src="../images/keranjang.png" alt="keranjang" className="w-12" />
                    {totalCart > 0 ? <div className="absolute bg-red-600 rounded-full p-3 w-5 h-5 right-14">
                        <p className="relative text-white -top-2 -left-2 text-sm text-center">{totalCart}</p>
                    </div> : null}
                </div>

                <TableCard products={products}/>
            </div> :  <div className="w-2/4 text-slate-800">
                    <div className="flex justify-between w-11/12">
                        <h1 className="text-3xl font-bold ml-5 mb-2 text-blue-500">Cart</h1>
                        <img src="../images/keranjang.png" alt="keranjang" className="w-12" />
                        {totalCart > 0 ? <div className="absolute bg-red-600 rounded-full p-3 w-5 h-5 right-14">
                            <p className="relative text-white -top-2 -left-2 text-sm text-center">{totalCart}</p>
                        </div> : null}
                    </div>

                    <TableCard products={products}/>
                </div>
               }
            </div>
        </div>
    )
}


export default ProductsPage