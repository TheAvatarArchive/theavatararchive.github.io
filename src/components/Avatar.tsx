import { Link } from "react-router";

function Avatar() {

    return (
        <Link to="/AvatarProfilePage">
            <img
                className="mask mask-square rounded-3xl w-full h-full"
                src="../../public/BananaMan.gif"
                alt="BananaMan"
            />
        </Link>
    )
}

export default Avatar