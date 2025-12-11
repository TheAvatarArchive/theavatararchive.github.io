import {Link} from "react-router";

function Avatar(props) {

    return (
        <>
            <Link  to={"/class/"+props.c+"/profile/"+props.avatar.name}>
                <img
                    className="rounded-3xl"
                    src={props.avatarGif.file}
                    alt={props.avatarGif.altText}
                />
            </Link>
        </>
    )
}

export default Avatar