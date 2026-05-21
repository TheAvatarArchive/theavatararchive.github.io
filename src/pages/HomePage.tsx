import {Link, useParams,} from "react-router";
import Title from "../components/Title.tsx";

function HomePage() {

    return (
        <>
            <Title />
            <div className="grid grid-rows-3 md:grid-cols-12 md:grid-rows-6 md:gap-5 h-4/5 w-5/6 m-auto">
                <div className="md:col-span-8 md:row-start-2 text-2xl font-medium uppercase md:text-5xl/16">
                    The Avatar Archive is a growing archive of digital selves — a yearly collection of student-made avatars from DES
                    M121: Introduction to Digital Media @ Moorpark College.
                </div>
                <div className="row-start-3 md:col-span-3 md:col-start-10 md:row-start-2 md:text-2xl">
                    <div className="text-xl uppercase font-bold text-left mb-5 md:pt-4 md:mb-10">Explore</div>
                    <div className="grow-span-full grid grid-rows-subgrid text-lg font-medium gap-2 md:gap-6 ">
                        <div>
                            <Link to={"/class/70914"} className="hover-1">
                                Fall_2025 : 70914
                            </Link>
                        </div>
                        <div>
                            <Link to={"/class/72001"} className="hover-1">
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