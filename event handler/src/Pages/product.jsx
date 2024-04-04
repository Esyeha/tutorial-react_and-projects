import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Fragments/Card"
import Button from "../components/Button/Button"

const Product = () => {
    const products = [
        {
            id: 1,
            name: "FIXIE BIKE",
            image: "/images/fixie.jpg",
            price: "Rp. 7.000.000",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam."
        },
        {
            id: 2,
            name: "ROAD BIKE",
            image: "/images/fixie.jpg",
            price: "Rp. 13.000.000",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
    ]

    const username = localStorage.getItem("name")

    const handleLogout = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = ("/login")
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar judul="Event handler" justify="justify-between">{username}
            {localStorage.getItem("name") ? <Button color="bg-blue-600 h-8 w-18 ml-3" onClick={handleLogout}>Logout</Button> : null}
                
            </Navbar>
            <div className="flex justify-center flex-wrap py-4 gap-4">
                {/* <Card >
                    <Card.Header image="/images/fixie.jpg" />
                    <Card.Body name="FIXIE BIKE">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam.
                    </Card.Body>
                    <Card.Footer price="Rp. 7.000.000" />
                </Card> */}

            {products.map((product) => {
                return (
                    <Card key={product.id}>
                        <Card.Header image={product.image} />
                        <Card.Body name={product.name}>
                            {product.description}
                        </Card.Body>
                        <Card.Footer price={product.price} />
                    </Card>
                )
            })}
            </div>
        </div>
    )
}


export default Product