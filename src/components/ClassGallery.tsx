import Avatar from "../components/Avatar";
import { useParams} from "react-router";
import data from "../data/classes.json"
import {useState} from "react";
import SubNav from "./SubNav.tsx";

function ClassGallery() {
    const {c} = useParams()
    function isClass(course){
        return course.name == c
    }

        const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    return (
            <div>
                <SubNav courseName={courseData.name} courseSemester={courseData.semester} />
                <div className="w-4/5 pt-20 pb-20 m-auto grid grid-cols-4 gap-14 cursor-pointer">
                    { courseData.roster.map((student)=>{
                        return  <Avatar key={student.student} c={courseData.name} {...student} />
                    })}
                </div>
            </div>
    )
}

export default ClassGallery