import {Link} from "react-router";

function SubNav({ courseSemester, courseName }) {

    return (
        <div className="pb-4 text-2xl font-md uppercase w-full border-b-2 border-primary-200">
            <div className="grid grid-cols-2 w-4/5 m-auto">
                <div>
                    <Link to={"/"}>Home</Link> / <Link to={"/"}>Archive</Link>
                </div>
                <div className="text-right">
                    {courseSemester} : {courseName}
                </div>
            </div>
        </div>
    )
}

export default SubNav
