const Navbar = (props) => {
    return (
    <div className="flex justify-center items-center p-4 bg-indigo-950 ">
        <h1 className="text-2xl font-extrabold text-zinc-100">{props.judul}</h1>
      </div>

    )
}

export default Navbar