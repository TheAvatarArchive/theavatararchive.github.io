import NavBar from "../components/NavBar.tsx";
import ClassGallery from "../components/ClassGallery.tsx";
import Title from "../components/Title.tsx";
import Footer from "../components/Footer.tsx";

function ClassPage() {
    // This page is a template that should dynamically display each semester avatar gallery

    return (
        <>
            <Title />
            <ClassGallery />
            <Footer />
        </>
    )
}

export default ClassPage