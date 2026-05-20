// import { Link } from "react-router";
import SubNav from "./SubNav.tsx";
// import classes from "../data/classes.json"
import Title from "./Title";

function NavBar() {

    return (
        <div className="w-full border-b-2 border-primary-200">
            <Title />
            <SubNav courseSemester={undefined} courseName={undefined}  />
        </div>
    )
}

export default NavBar