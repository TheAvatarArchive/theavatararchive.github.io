import {Link} from "react-router";

function Title() {

    return (
        <div className="flex items-center justify-center h-1/5 text-2xl font-extrabold uppercase lg:text-4xl f">
           <Link to={"/"}>
               The Avatar Archive :-)
           </Link>
        </div>
    )
}

export default Title
