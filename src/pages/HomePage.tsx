import {Link, useParams} from "react-router";
import Title from "../components/Title.tsx";
import Footer from "../components/Footer.tsx";


function HomePage(props) {

    return (
        <>
            <div className="h-full w-full">
                <Title />
                <div className="flex h-100 w-5/6 ml-auto mr-auto gap-10">
                    <div className="flex-3/4 align-center justify-center text-xl md:text-4xl text-justify pt-6 pb-6">
                        The Avatar Archive is a growing archive of digital selves — a yearly collection of student-made avatars from DES
                        M121: Introduction to Digital Media @ Moorpark College.
                    </div>
                    <div className="flex-1/4 align-middle justify-center text-xl md:text-4xl text-justify pt-6 pb-6">
                        <div className="mb-3 text-lg uppercase font-semibold">Explore</div>
                        <ul>
                            {/*{ classDirectory }*/}
                            <li className="text-lg mb-2">
                                <Link to={"/class/70914"}>
                                    Fall 2025 : 70914
                                </Link>
                            </li>
                            <li className="text-lg mb-2">
                                <Link to={"/class/72001"}>
                                    Fall 2025 : 72001
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage