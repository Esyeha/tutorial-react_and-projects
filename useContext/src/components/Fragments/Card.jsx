import { Link } from "react-router-dom"
import Button from "../Button/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

const Card = (props) => {
    const { children } = props
    return (
        <div className="w-80 overflow-hidden rounded-lg shadow-xl shadow-slate-950 flex flex-col border-4 justify-between">
            {children}
    </div>
    )
}

const Header = (props) => {
    const { image, id } = props
    return (
        <Link to={`/product/${id}`}>
        <img src={image} alt="product" className="w-full h-60 object-cover object-center"/>
    </Link>
    )
}

const Body = ( props ) => {
    const { children, name } = props
    return (
        <div className="h-full px-4 pb-1 bg-slate-950 overflow-hidden">
        <a href="">
            <h5 className="text-white font-bold text-md  text-center mt-3">{name.substring(0, 30)} ...</h5>
        </a>
        <p className="text-white text-sm pb-2 pt-2">{children.substring(0, 120)} ...</p>
    </div>
    )
}

const Footer = ( props ) => {
    const { price, id } = props
    const dispatch = useDispatch()
    return (
        <div className="flex justify-center items-center gap-7 bg-slate-950 pb-3">
            <span className="text-white text-lg font-bold">$ {price.toLocaleString("id-ID")}</span>
        <Button color="bg-blue-600 h-8" onClick={() => dispatch(addToCart({id,qty:1 }))}>Add to cart</Button>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card