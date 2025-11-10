import Title from "../../components/Title.tsx";


function Home() {

    return (
        <>
            <div className="h-full">
                <Title />
                <div className="flex gap-x-12">
                    <div className="flex-2/3">
                        The Avatar Archive is a growing archive of digital selves - a yearly collection of student-made avatars from DES M121 Introduction to Digital Media at Moorpark College
                    </div>
                    <div className="flex-1/3">
                        <p className="mb-3 font-semibold">Explore</p>
                        <ul>
                            <li className="mb-2"><a href="/ClassAvatars">Fall 2025 : 70914</a></li>
                            <li className="mb-2"><a href="/">Fall 2025 : 72001</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home