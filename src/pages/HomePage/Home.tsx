import Title from "../../components/Title.tsx";


function Home() {

    return (
        <>
            <div>
                <Title />
                <div className="grid grid-cols-5 gap-12 w-3/5 m-auto">
                    <div className="col-span-4 text-3xl font-normal pr-30">
                        The Avatar Archive is a growing archive of digital selves - a yearly collection of student-made avatars from DES M121 Introduction to Digital Media at Moorpark College
                    </div>
                    <div className="flex-1/3">
                        <p className="mb-3 text-lg uppercase font-semibold">Explore</p>
                        <ul>
                            <li className="mb-2 text-base"><a href="/ClassAvatars">Fall 2025 : 70914</a></li>
                            <li className="mb-2 text-base"><a href="/">Fall 2025 : 72001</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home