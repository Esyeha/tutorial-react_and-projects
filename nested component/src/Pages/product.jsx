import Navbar from "../components/Navbar/Navbar"
import Card from "../components/Fragments/Card"

const Product = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar judul="Nested component"/>
            <div className="flex justify-center py-4 gap-4">
                <Card >
                    <Card.Header image="/images/fixie.jpg" />
                    <Card.Body title="FIXIE BIKE">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam.
                    </Card.Body>
                    <Card.Footer price="Rp. 7.000.000" />
                </Card>
                <Card >
                    <Card.Header image="/images/fixie.jpg" />
                    <Card.Body title="FIXIE BIKE">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi corrupti, velit nemo iure inventore tempora ducimus ullam nobis ipsam.
                    </Card.Body>
                    <Card.Footer price="Rp. 7.000.000" />
                </Card>
            </div>
        </div>
    )
}

export default Product