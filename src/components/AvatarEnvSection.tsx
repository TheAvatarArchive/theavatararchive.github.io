

function AvatarEnvSection({src, altText} ) {

    return (
        <div className="">
            <img
                className="w-screen h-full"
                src={src}
                alt={altText}
            />
        </div>
    )
}

export default AvatarEnvSection