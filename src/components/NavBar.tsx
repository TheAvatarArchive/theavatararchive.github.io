import { Link } from "react-router";

function NavBar() {

    return (
        <div className="w-4/5 m-auto">
            <div className="flex text-4xl mt-20 mb-20 justify-around font-semibold">
                <Link to="/">
                    The Avatar Archive :-)
                </Link>
            </div>
            <div className="flex border-b-2 mb-10">
                <div className="w-full text-2xl mb-2">
                    <Link to="/">&lt;--- Home</Link>
                </div>
                <div className="text-2xl mb-2 w-full flex justify-end">
                    <p>Fall 2025 : 70914</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar