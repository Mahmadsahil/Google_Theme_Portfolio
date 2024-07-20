const VideoComm = (props) => {
    const {thumbnail,title,descipton}=props
    return (
        <>
            <hr className="w-10/12"></hr>
            <div className="w-full flex py-2 cursor-pointer">
                <div className="md:h-[80px] w-[130px] rounded-lg overflow-hidden mx-2">
                    <img className="w-full md:w-[130px] object-cover " alt="Project Video" src={thumbnail}></img>
                </div>
                <div>
                    <p className="text-[#1a0dab] pb-2 text-md">{title}</p>
                    <p className="text-sm">{descipton}</p>
                </div>
            </div>
        </>
    )
}

export default VideoComm;