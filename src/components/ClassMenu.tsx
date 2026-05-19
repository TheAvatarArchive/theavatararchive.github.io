import {Link} from "react-router";

function ClassMenu() {

    return (
        <div className="">
            <p className="mb-3 text-lg uppercase font-semibold">Explore</p>
            <ul>
                <li className="mb-2 text-base"><Link to="/Class/:c">Fall 2025 : 70914</Link></li>
                <li className="mb-2 text-base"><Link to="/Class/:c">Fall 2025 : 72001</Link></li>
            </ul>
        </div>
    )
}

export default ClassMenu