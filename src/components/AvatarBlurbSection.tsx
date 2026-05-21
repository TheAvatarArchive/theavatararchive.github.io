
function AvatarBlurbSection({img, name, tagline, about, world}) {

    return (
        <div className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-10 md:gap-40 md:text-4xl md:pt-16 md:pb-16 min-h-[calc(100vh-8rem)] ">
            <div className="md:col-span-4 md:sticky md:top-0">
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
