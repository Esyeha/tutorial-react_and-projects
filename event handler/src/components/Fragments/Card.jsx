import Button from "../Button/Button"

const Card = (props) => {
    const { children } = props
    return (
        <div className="w-80 overflow-hidden rounded-lg shadow-xl shadow-slate-950 flex flex-col border-4 justify-between">
            {children}
    </div>
    )
}

const Header = (props) => {
    const { image } = props
    return (
        <a href="">
        <img src={image} alt="product"/>
    </a>
    )
}

const Body = ( props ) => {
    const { children, name } = props
    return (
        <div className="h-full px-4 pb-1 bg-slate-950 overflow-hidden">
        <a href="">
            <h5 className="text-white font-bold text-md  text-center mt-3">{name}</h5>
        </a>
        <p className="text-white text-sm pb-2 pt-2">{children}</p>
    </div>
    )
}

const Footer = ( props ) => {
    const { price } = props
    return (
        <div className="flex justify-center items-center gap-7 bg-slate-950 pb-3">
            <span className="text-white text-lg font-bold">{price}</span>
        <Button color="bg-blue-600 h-8" className="">Add to cart</Button>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card