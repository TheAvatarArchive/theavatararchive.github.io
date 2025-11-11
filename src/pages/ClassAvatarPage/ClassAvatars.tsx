import Avatar from "../../components/Avatar.tsx";
import NavBar from "../../components/NavBar.tsx";

function ClassAvatars() {

    return (
        <div>
            <NavBar />
            <div className="grid sm:col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 m-auto">
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
                <div>
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default ClassAvatars