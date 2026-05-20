import {Link, } from "react-router";
import Title from "../components/Title.tsx";


function HomePage() {

    return (
        <>
            <div className="h-1/6 mb-20">
                <Title />
            </div>
            <div className="grid grid-cols-12 gap-5 h-4/6 w-5/6 m-auto overflow-y-clip ">
                <div className="col-span-8 text-xl md:text-5xl/16 font-medium">
                    The Avatar Archive is a growing archive of digital selves — a yearly collection of student-made avatars from DES
                    M121: Introduction to Digital Media @ Moorpark College.
                </div>
                <div className="col-span-3 col-start-10 md:text-2xl">
                    <div className="mb-3 uppercase font-bold text-left pt-4">Explore</div>
                    <div className="grow-span-full grid grid-rows-subgrid gap-4 font-medium">
                        <div>
                            <Link to={"/class/70914"} className="hover-1">
                                Fall_2025 : 70914
                            </Link>
                        </div>
                        <div>
                            <Link to={"/class/31128"} className="hover-1">
                                Fall_2025 : 72001
                            </Link>
                        </div>
                        <div>
                            <Link to={"/class/31128"} className="hover-1">
                                Spring_2026 : 31128
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage