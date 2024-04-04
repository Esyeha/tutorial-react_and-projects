import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Fragments/Card"
import Button from "../components/Button/Button"
import { useState } from "react"

const Product = () => {
    const products = [
        {
            id: 1,
            name: "FIXIE BIKE",
            image: "/images/fixie.jpg",
            price: 7000000,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam."
        },
        {
            id: 2,
            name: "ROAD BIKE",
            image: "/images/fixie.jpg",
            price: 13000000,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            id: 3,
            name: "FIXIE CLASSIC",
            image: "/images/fixie.jpg",
            price: 5000000,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
    ]

    const [cart, setCart] = useState([
        {
            id:1,
            qty: 1,
        }
    ])
    const username = localStorage.getItem("name")


    
    

    const handleLogout = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = ("/login")
    }

    const handleAddToCart = (id) => {
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

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar judul="Product Page" justify="justify-between">{username}
            {localStorage.getItem("name") ? <Button color="bg-blue-600 h-8 w-18 ml-3" onClick={handleLogout}>Logout</Button> : null}
                
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
                        {products.map((product) => {
                        return (
                            <Card key={product.id}>
                                <Card.Header image={product.image} />
                                <Card.Body name={product.name}>
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
                            {cart.map((item) => {
                              const product = products.find((product) => product.id === item.id)
                              return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>Rp{" "} {product.price.toLocaleString("id-ID")}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp{' '} {(item.qty * product.price).toLocaleString("id-ID")}</td>
                                </tr>
                              )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Product