import {Link, useParams,} from "react-router";
import Title from "../components/Title.tsx";

function HomePage() {

    return (
        <>
            <Title />
            <div className="grid grid-cols-12 grid-rows-6 gap-5 h-4/5 w-5/6 m-auto">
                <div className="col-span-8 row-start-2 text-xl md:text-5xl/16 font-medium uppercase">
                    The Avatar Archive is a growing archive of digital selves — a yearly collection of student-made avatars from DES
                    M121: Introduction to Digital Media @ Moorpark College.
                </div>
                <div className="col-span-3 col-start-10 row-start-2 md:text-2xl">
                    <div className="text-3xl uppercase font-bold text-left mb-10 pt-4">Explore</div>
                    <div className="grow-span-full grid grid-rows-subgrid gap-6 font-medium">
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