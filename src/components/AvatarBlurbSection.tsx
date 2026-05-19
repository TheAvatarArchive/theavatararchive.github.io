
function AvatarBlurbSection({img, name, tagline, about, world}) {

    return (
        <div className="grid grid-cols-10 gap-40 text-4xl w-4/5 m-auto pt-16 pb-16">
            <div className="col-span-4">
                <img src={img} alt=""/>
            </div>
            <div className="col-span-6">
                <div className="mb-10">
                    <div className="text-5xl font-bold mb-4">
                        {name}
                    </div>
                    <div className="text-3xl font-bold">
                        {tagline}
                    </div>
                </div>
                <div className="mb-10 text-justify">
                    <div className="border-b-2 mb-4 text-2xl w-full font-bold uppercase">
                        About
                    </div>
                    <div className="text-base">
                        {about}
                    </div>
                </div>
                <div className="text-justify">
                    <div className="border-b-2 mb-4 text-2xl w-full font-bold uppercase">
                        World
                    </div>
                    <div className="text-base">
                        {world}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarBlurbSection
