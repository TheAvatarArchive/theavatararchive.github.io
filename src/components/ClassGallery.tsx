import Avatar from "../components/Avatar";
import { useParams} from "react-router";
import data from "../data/classes.json"
import {useState} from "react";
function ClassGallery() {
    const {c} = useParams()
    function isClass(course){
        return course.name == c
    }

    // @ts-ignore
    const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    // @ts-expect-error
    return (
        <div>
            <div className="w-4/5 pt-20 pb-20 m-auto grid grid-cols-3 gap-14">
                { courseData.roster.map((student)=>{
                    return  <Avatar className={"min-w-full"} key={student.student} c={courseData.name} {...student} />
                })}
            </div>
        </div>
    )
}

export default ClassGallery