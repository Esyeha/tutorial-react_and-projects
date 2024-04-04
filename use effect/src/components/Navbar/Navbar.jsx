const Navbar = (props) => {
  const { judul, children, justify = "justify-center" } = props
    return (
    <div className={`flex ${justify} items-center p-4 bg-indigo-950 flex-wrap`}>
        <h1 className="text-2xl font-extrabold text-zinc-100">{judul}</h1>
          <h3 className="font-semibold text-md text-zinc-100">{children}</h3>
      </div>

    )
}

export default Navbar