import Avatar from "../components/Avatar";
import { useParams } from "react-router";
import data from "../data/classes.json"
import { useState } from "react";

function ClassGallery() {

    const {c} = useParams()

    function isClass(course){
        return course.name == c
    }

    const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    return (
        <div>
            <div className="grid grid-cols-2 gap-8 mt-10 mb-10 md:grid-cols-3 md:gap-14 w-4/5 m-auto md:pt-20 md:pb-20 ">
                { courseData.roster.map((student)=>{
                    return  <Avatar className={"min-w-full"} key={student.student} c={courseData.name} {...student} />
                })}
            </div>
        </div>
    )
}

export default ClassGallery