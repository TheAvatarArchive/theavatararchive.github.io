import {Link, } from "react-router";
import Title from "../components/Title.tsx";


function HomePage(props) {

    return (
        <>
            <div className="h-1/6 mb-20">
                <Title />
            </div>
            <div className="grid grid-cols-8 gap-40 h-4/6 w-5/6 m-auto overflow-y-clip ">
                <div className="col-span-6 text-xl md:text-5xl/16 pr-40">
                    The Avatar Archive is a growing archive of digital selves — a yearly collection of student-made avatars from DES
                    M121: Introduction to Digital Media @ Moorpark College.
                </div>
                <div className="col-span-2 md:text-2xl">
                    <div className="mb-3 uppercase font-bold text-left pt-4">Explore</div>
                    <ul>
                        <li className="mb-3 font-medium">
                            <Link to={"/class/70914"}>
                                Fall 2025 : 70914
                            </Link>
                        </li>
                        <li className="mb-3 font-medium">
                            <Link to={"/class/72001"}>
                                Fall 2025 : 72001
                            </Link>
                        </li>
                        <li className="mb-3 font-medium">
                            <Link to={"/class/31128"}>
                                Spring 2026 : 31128
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage