const Banner = () => {
    return (
        <div className="grid gap-4 md:gap-6 justify-center md:justify-start">
            <div className="grid md:block gap-2 justify-center">
                <span className="text-white uppercase font-bold text-6xl">I am in </span>
                <span className="text-red-600 uppercase font-bold text-6xl">trouble</span>
            </div>
            <p className="text-gray-200 text-center md:text-left text-xl md:text-4xl">Find me nearest mechanic shop</p>
            <button className="
            bg-transparent
            hover:bg-blue-500
            w-72 h-14
            text-blue-200
            hover:text-white
            border-2 border-blue-200
            text-xl
            rounded
            capitalize" type="button">Search nearby mechanic</button>
        </div>
    )
}

export default Banner;