import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Fragments/Card"
import Button from "../components/Button/Button"
import { useEffect, useRef, useState } from "react"
import { getProducts } from "../service/products.service"
import { useLogin } from "../hooks/uselogin"

const ProductPage = () => {
    // const products = [
    //     {
    //         id: 1,
    //         name: "FIXIE BIKE",
    //         image: "/images/fixie.jpg",
    //         price: 7000000,
    //         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam."
    //     },
    //     {
    //         id: 2,
    //         name: "ROAD BIKE",
    //         image: "/images/fixie.jpg",
    //         price: 13000000,
    //         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    //     },
    //     {
    //         id: 3,
    //         name: "FIXIE CLASSIC",
    //         image: "/images/fixie.jpg",
    //         price: 5000000,
    //         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    //     },
    // ]


    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const username = useLogin()

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])
 

    useEffect(() => {
        getProducts((data) => {
           setProducts(data)
        })
    }, [])


    useEffect(() => {
       if(products.length > 0 && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
            const product = products.find(product => product.id === item.id)
            return acc + (product.price * item.qty)
        }, 0)
        setTotalPrice(sum)
        localStorage.setItem("cart", JSON.stringify(cart))
       }
    }, [cart, products])


    
    

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = ("/login")
    }

    const handleAddToCart = (id) => {
        // jika item sudah ada dalam keranjang tambahkan qtynya
       if(cart.find(item => item.id === id)) {
           setCart(
            cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
       } else {
        setCart([...cart, {
            id,
            qty: 1
        }])
       }
    }


    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }]
        localStorage.setItem("cart", JSON.stringify(cartRef.current))
    }


    const totalPriceRef = useRef(null)

    useEffect(() => {
       if(cart.length > 0) {
           totalPriceRef.current.style.display = "table-row"
       } else {
        totalPriceRef.current.style.display = "none"
       }
    }, [cart])

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar judul="Product Page" justify="justify-between">
                {username}
            {localStorage.getItem("token") ? <Button color="bg-blue-600 h-8 w-18 ml-3" onClick={handleLogout}>Logout</Button> : null}
                
            </Navbar>
            <div className="flex justify-center p-4">
                {/* <Card >
                    <Card.Header image="/images/fixie.jpg" />
                    <Card.Body name="FIXIE BIKE">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam.
                    </Card.Body>
                    <Card.Footer price="Rp. 7.000.000" />
                </Card> */}

                <div className="w-2/3 flex gap-4 flex-wrap">
                        { products.length > 0 && products.map((product) => {
                        return (
                            <Card key={product.id}>
                                <Card.Header image={product.image} />
                                <Card.Body name={product.title}>
                                    {product.description}
                                </Card.Body>
                                <Card.Footer id={product.id} price={product.price} handleAddToCart={() => handleAddToCart(product.id)}/>
                            </Card>
                        )
                    })}
                </div>
                <div className="w-2/4 text-white">
                    <h1 className="text-3xl font-bold  ml-5 mb-2 text-blue-500">Cart</h1>
                    <table className="p- text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Produt</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                              const product = products.find((product) => product.id === item.id)
                              return (
                                <tr key={item.id}>
                                    <td>{product.title.substring(0,25)}</td>
                                    <td>${" "} {product.price.toLocaleString("id-ID")}</td>
                                    <td>{item.qty}</td>
                                    <td>${' '} {(item.qty * product.price).toLocaleString("id-ID")}</td>
                                </tr>
                              )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total price</b>
                                </td>
                                <td>
                                    <b>
                                        ${" "}{(totalPrice).toLocaleString("id-ID")}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default ProductPage