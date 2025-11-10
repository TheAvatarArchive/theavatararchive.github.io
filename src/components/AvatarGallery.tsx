import Avatar from "./Avatar.tsx";


function AvatarGallery() {

    return (
        <div className="grid grid-cols-4 gap-4">
            <div>
                {/*<Avatar />*/}
                <img className="" src="/assets/BananaMan.png" alt="BananaMan"/>

            </div>
            <div>
                <Avatar />
            </div>
            <div>
                <Avatar />
            </div>
        </div>
    )
}

export default AvatarGallery