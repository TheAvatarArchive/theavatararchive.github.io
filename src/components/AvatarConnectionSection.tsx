import Avatar from "./Avatar.tsx";

function AvatarConnectionSection() {

    return (
        <div className="dark-bg grid grid-cols-2 gap-10 text-4xl mb-20">
            <div className="p-40">
                <Avatar />
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-xl font-semibold uppercase mb-6">
                    My Connection
                </div>
                <div className="text-xxl pr-40">
                    “Bananaman embodies my love of bananas alongside my curiosity about trash - how we create, value, and coexist with it.”
                </div>
            </div>
        </div>
    )
}

export default AvatarConnectionSection
