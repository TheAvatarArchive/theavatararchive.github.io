
function AvatarConnectionSection({ avatarImg, altText, quote, studentName}) {

    return (
        <div className=" ">
            <div className="w-4/5 m-auto pt-10 pb-10 gap-10 md:h-screen grid grid-cols-1 md:grid-cols-11 md:grid-rows-11 md:gap-5">
                <div className="md:col-span-5 md:row-span-7 md:row-start-3">
                    <img src={avatarImg} alt={altText} className="rounded-4xl"  />
                </div>
                <div className="md:col-span-5 md:col-start-7 md:row-start-4 md:row-span-5">
                    <div className="flex align-middle">
                        <div className="grid grid-rows-subgrid gap-3 md:gap-6">
                            <div className="text-xl md:text-2xl font-medium uppercase">
                                My Connection
                            </div>
                            <div className="text-2xl md:text-4xl italic leading-normal">
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