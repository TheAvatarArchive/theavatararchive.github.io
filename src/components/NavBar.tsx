// import { Link } from "react-router";
import SubNav from "./SubNav.tsx";
// import classes from "../data/classes.json"
import Title from "./Title";

function NavBar() {

    // const classList = classes.map(classes =>
    //     <li className="text-lg mb-2" key={classes.id}>
    //         {/*<Link to={`/${semester.semester}/${semester.name}`}>*/}
    //         <Link to={`/ClassPage`}>
    //             {classes.semester} : {classes.name}
    //         </Link>
    //     </li>
    // )

    return (
        <div className="w-full border-b-2 border-primary-200">
            <Title />
            <SubNav  />
            {/*<div className="flex-none">*/}
            {/*    <div className="drawer drawer-end">*/}
            {/*        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>*/}

            {/*        <label className="btn btn-ghost swap swap-rotate z-10" htmlFor="my-drawer">*/}
            {/*            <svg className="swap-off fill-current [:checked~*_&]:-rotate-45! [:checked~*_&]:opacity-0!"*/}
            {/*                 xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">*/}
            {/*                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>*/}
            {/*            </svg>*/}
            {/*            <svg className="swap-on fill-current [:checked~*_&]:rotate-0! [:checked~*_&]:opacity-100!"*/}
            {/*                 xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">*/}
            {/*                <polygon*/}
            {/*                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>*/}
            {/*            </svg>*/}
            {/*        </label>*/}
            {/*        <div className="drawer-content">*/}
            {/*        </div>*/}
            {/*        <div className="drawer-side">*/}
            {/*            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay opacity-0"></label>*/}
            {/*            <ul className="menu w-full min-h-screen bg-base-200 text-lg-content p-4 mt-19 uppercase">*/}
            {/*                { classList }*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default NavBar