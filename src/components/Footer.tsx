
function Footer() {

    return (
        <div className="border-t-2 border-primary-200 pt-4 pb-4">
            <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-1 gap-1 md:grid-cols-3 md:h-20">
                <div className="inline-flex gap-1 text-left md:pt-7">
                    <div className="uppercase font-bold">Course:</div>
                    DES M121 Intro to Digital Media
                </div>
                <div className="inline-flex gap-1 md:text-2xl md:text-center md:pt-6">
                    <div className="uppercase font-bold">Project:</div>
                    The Avatar Archive :-)
                </div>
                <div className="inline-flex md:justify-end gap-1  md:pt-7">
                    <div className="uppercase font-bold">Campus:</div>
                    Moorpark College
                </div>
            </div>
        </div>
    )
}

export default Footer