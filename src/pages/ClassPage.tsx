import ClassGallery from "../components/ClassGallery.tsx";
import Title from "../components/Title.tsx";
import Footer from "../components/Footer.tsx";
import SubNav from "../components/SubNav.tsx";
import {useParams} from "react-router";
import {useState} from "react";
import data from "../data/classes.json";

function ClassPage() {
    // This page is a template that should dynamically display each semester avatar gallery

    const {c, a} = useParams()
    function isClass(course){
        return course.name == c
    }

    const [courseData] = useState(data ? data.find(isClass) :  {})

    function isAvatar(student){
        return student.avatar.name == a
    }

    const [studentData] = useState(courseData ? courseData.roster.find(isAvatar) :  {})

    // useEffect(() => {console.log(studentData)},[studentData])

    return (
        <>
            <Title />
            <SubNav previousPage={"Home"} rightData1={courseData.semester} rightData2={courseData.name} />
            <ClassGallery />
            <Footer />
        </>
    )
}

export default ClassPage