import Project from "./Project";
import NetflixGPT from "../Utils/Netflix.png"
import MDGenie from "../Utils/mdgenie.png"
import YouTube from "../Utils/youtube.png"
import MDFood from "../Utils/Swiggy.png"

const Projects = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center py-4">
                <div className="w-full md:w-10/12 flex flex-wrap items-center justify-center gap-8">
                    <Project projectName="AI-powered product suggestions Webapp" imgUrl={MDGenie}
                        demoLink={"https://mdgenie.vercel.app/"} githubLink={"https://github.com/Mahmadsahil/MDGenie"}
                        videoLink={"https://www.linkedin.com/posts/md-sahil-achanoor-2a686423a_react-javascript-namastereact-activity-7220421571574648832-yFyJ?utm_source=share&utm_medium=member_desktop"} />

                    <Project projectName="Movie Streaming Platform with TMDB Integration Webapp" imgUrl={NetflixGPT}
                        demoLink={"mdnetflixgpt.vercel.app/"} githubLink={"https://github.com/Mahmadsahil/NetflixGPT"}
                        videoLink={"https://www.linkedin.com/posts/md-sahil-achanoor-2a686423a_react-javascript-namastereact-activity-7220417407364874240-lv_H?utm_source=share&utm_medium=member_desktop"} />

                    < Project projectName="Online foor ordering Webapp" imgUrl={MDFood}
                        demoLink={"https://mdfood.vercel.app/"} githubLink={"https://github.com/Mahmadsahil/MDFood"}
                        videoLink={"https://www.linkedin.com/posts/md-sahil-achanoor-2a686423a_react-javascript-namastereact-activity-7220406477922975744-jDnQ?utm_source=share&utm_medium=member_desktop"} />

                    <Project projectName="Video Streaming Platform with YouTube API Integration Webapp" imgUrl={YouTube}
                        demoLink={"https://youtube-git-main-md-sahils-projects-c06f7ed6.vercel.app/"} githubLink={"https://github.com/Mahmadsahil/Youtube"}
                        videoLink={"https://www.linkedin.com/posts/md-sahil-achanoor-2a686423a_react-javascript-namastedev-activity-7220413009792258049-tjgS?utm_source=share&utm_medium=member_desktop"} />
                </div>
            </div>
        </>
    )
}
export default Projects;