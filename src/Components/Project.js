const Project = (props) => {
    const { projectName, imgUrl, videoLink, githubLink, demoLink } = props;
    return (
        <>

            <div className="w-[300px] shadow-md rounded-3xl p-4 flex flex-col items-center cursor-pointer">
                <p className=" text-base font-bold text-gray-600">{projectName}</p>
                <img className="my-4" alt="project" src={imgUrl}></img>
                <div className="flex gap-3">
                    <a href={demoLink}><button className="py-1 text-sm px-2 bg-slate-200 hover:bg-slate-300 rounded-lg">Live Demo</button></a>
                    <a href={githubLink}><button className="py-1 text-sm px-2 bg-slate-200 hover:bg-slate-300 rounded-lg">Source Code</button></a>
                    <a href={videoLink}><button className="py-1 text-sm px-2 bg-slate-200 hover:bg-slate-300 rounded-lg">Video</button></a>
                </div>
            </div>
        </>
    )
}

export default Project;