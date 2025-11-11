function NavBar() {

    return (
        <div className="w-4/5 m-auto">
            <div className="flex text-4xl mt-20 mb-20">
                <div className="flex w-full justify-around font-semibold">The Avatar Archive :-)</div>
            </div>
            <div className="flex border-b-2 mb-10">
                <div className="w-full mb-2">
                    <a href="/"><p className="text-2xl">&lt;--- Home</p></a>
                </div>
                <div className="text-2xl mb-2 w-full flex justify-end">
                    <p>Fall 2025 : 70914</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar