import NavBar from "../components/NavBar.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import data from "../data/classes.json";
import AvatarBlurbSection from "../components/AvatarBlurbSection.tsx";
import AvatarEnvSection from "../components/AvatarEnvSection.tsx";
import AvatarConnectionSection from "../components/AvatarConnectionSection.tsx";
import Title from "../components/Title.tsx";
import SubNav from "../components/SubNav.tsx";
import Footer from "../components/Footer.tsx";

function ProfilePage(props) {
    const {c, a} = useParams()
    function isClass(course){
        return course.name == c
    }

    const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    function isAvatar(student){
        return student.avatar.name == a
    }

    const [studentData, setStudentData] = useState(courseData ? courseData.roster.find(isAvatar) :  {})

    useEffect(() => {console.log(studentData)},[studentData])

    return (
        <>
            <Title />
            <SubNav courseSemester={courseData.semester} courseName={courseData.name} />
            <AvatarBlurbSection
                img={studentData.avatar360Gif.file}
                name={studentData.avatar.name}
                tagline={studentData.avatar.tagline}
                about={studentData.avatar.about}
                world={studentData.avatar.world}
            />
            <AvatarEnvSection
                src={studentData.avatarEnvImg.file}
                altText={studentData.avatarEnvImg.altText}
            />
            <div style={{backgroundColor: studentData.styles.background, color: studentData.styles.color}}>
                <AvatarConnectionSection
                    avatarImg={studentData.avatarGif.file}
                    altText={studentData.avatarGif.altText}
                    studentName={studentData.student}
                    quote={studentData.avatar.connection}
                />
            </div>
            <Footer />
        </>
    )
}

export default ProfilePage