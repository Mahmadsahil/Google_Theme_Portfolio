import { RiVideoLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import Accordion from "./Accordion";
import VideoComm from "./VideoComm";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import NetflixGPT from "../Utils/Netflix.png"
import MDGenie from "../Utils/mdgenie.png"
import YouTube from "../Utils/youtube.png"


const All = () => {
    return (
        <>
            <div className="w-full bg-white flex flex-col-reverse items-center md:flex-row md:justify-end px-4">
                <div className="w-full md:w-6/12 bg-white py-4  " >
                    <div className="w-full md:w-10/12 mb-4">
                        <p className="text-xl text-[#1a0dab]">Mohammad Sahil : Frontend Developer (React)</p>
                        <p className="text-gray-600">Frontend developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.</p>
                    </div>

                    {/* Accordion */}
                    <div className="my-6">

                        <div className=" flex items-center justify-start">
                            <p className="flex items-center justify-center text-2xl p-2">People also ask </p>
                            <SlOptionsVertical className="text-md text-gray-800" />
                        </div>
                        <Accordion question="What skills does Sahil have?" answer="Sahil is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind" />
                        <Accordion question="What services does Sahil provide?" answer="Sahil provides fully responsive frontend applications with React Js" />
                        <Accordion question="Is Sahil frontend or backend developer?" answer="Sahil is a frontend web developer, Experienced in developing react apllications." />
                    </div>


                    {/* Video Section */}
                    <div className="my-6">
                        <div>
                            <p className="flex justify-start items-center my-4 text-2xl "> <RiVideoLine className="mx-2" /> Project Videos <SlOptionsVertical className="mx-2 text-lg" /></p>
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <Link to={"project"} >  <VideoComm thumbnail={MDGenie}
                                title="MDGenie" descipton="AI-powered product suggestions" /></Link>
                            <Link to={"project"} > <VideoComm thumbnail={NetflixGPT}
                                title="Movie Streaming Platform with TMDB Integration" descipton="web application mirrors the Netflix streaming platform" /></Link>
                            <Link to={"project"} > <VideoComm thumbnail={YouTube}
                                title="NetflixGPT" descipton="Video Streaming Platform with YouTube API Integration" /></Link>
                            <div className="Video Streaming Platform">
                                <Link to={"project"} > <button className="flex p-1 my-2 md:my-0  w-[200px] justify-center textba md:text-lg text-center items-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-2xl cursor-pointer">View all <GoArrowRight className="mx-1" /></button></Link>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="w-full md:w-4/12 md:h-[560px] m-2 p-2 bg-white border-2 border-gray-100 rounded-2xl">
                    <Profile />
                </div>
            </div>
        </>
    )
}

export default All;