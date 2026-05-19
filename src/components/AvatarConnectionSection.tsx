
function AvatarConnectionSection({ avatarImg, altText, quote, studentName}) {

    return (
        <div className="w-full h-screen">
            <div className="grid grid-cols-2 gap-16 w-4/5 m-auto">
                <div className="pt-55">
                    <img src={avatarImg} alt={altText} className="rounded-4xl" />
                </div>
                <div className="pt-80">
                    <div className="text-xl font-semibold uppercase mb-6">
                        My Connection
                    </div>
                    <div className="text-4xl italic mb-4">
                        "{quote}"
                    </div>
                    <div>
                        -- {studentName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarConnectionSection