
function AvatarConnectionSection({ avatarImg, altText, quote, studentName}) {

    return (
        <div className=" ">
            <div className="h-screen grid grid-cols-11 grid-rows-11 gap-5 w-4/5 m-auto">
                <div className="col-span-5 row-span-7 row-start-3">
                    <img src={avatarImg} alt={altText} className="rounded-4xl"  />
                </div>
                <div className="col-span-5 col-start-7 row-start-4 row-span-5">
                    <div className="flex align-middle">
                        <div className="grid grid-rows-subgrid gap-6">
                            <div className="text-2xl font-medium uppercase">
                                My Connection
                            </div>
                            <div className="text-4xl italic leading-normal">
                                "{quote}"
                            </div>
                            <div>
                                -- {studentName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarConnectionSection