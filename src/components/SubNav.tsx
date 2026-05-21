import {Link} from "react-router";

function SubNav({urlLink, rightData1, rightData2, previousPage }) {


    return (
        <div className=" w-4/5 m-auto pb-4 md:text-2xl font-semibold uppercase border-b-2 border-primary-200">
            <div className="grid grid-cols-2">
                <div>
                    <Link to={urlLink} className="hover-1">&lt;--- {previousPage} </Link>
                </div>
                <div className="text-right">
                    <div>{rightData1} : {rightData2}</div>
                </div>
            </div>
        </div>
    )
}

export default SubNav
