import NavBar from "../../components/NavBar.tsx";
import AvatarBlurbSection from "../../components/AvatarBlurbSection.tsx";
import AvatarEnvSection from "../../components/AvatarEnvSection.tsx";
import AvatarConnectionSection from "../../components/AvatarConnectionSection.tsx";


function Home() {

    return (
        <>
            <NavBar />
            <AvatarBlurbSection />
            <AvatarEnvSection />
            <AvatarConnectionSection />
        </>
    )
}

export default Home