import { AiTwotoneMail } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const Profile = () => {


    return (
        <>
            <div className="flex flex-col items-center text-center ">
                <img className="w-32 md:w-40 shadow md:rounded-[50%]" alt="Profile logo" src="https://avatars.githubusercontent.com/u/117533136?v=4"></img>
                <p className="font-medium text-slate-600 mt-2">Mohammad Sahil L Achanoor</p>
                <p className="p-2 text-sm md:text-base text-gray-700">A Detailed oriented and Committed Engineering Professional with a Diploma in Computer Science Engineering. Well-versed in writing code to create systems that are reliable and user-friendly</p>

                <hr className="w-11/12 h-[2px] m-2 bg-gray-600 "></hr>

                <div className="w-full my-2 ml-4">
                    <div className="flex gap-2 items-center py-2 w-full  mx-2">
                        <AiTwotoneMail className="text-2xl" />
                        <p className="text-left text-[#1a0dab]">sahilachanur@gmail.com</p>
                    </div>

                    <div className="flex gap-2 items-center py-2 w-full mx-2">
                        <BsPhone className="text-2xl" />
                        <p className="text-left text-[#1a0dab]">6363420179</p>
                    </div>

                    <div className="flex gap-2 items-center  py-2 w-full mx-2">
                        <CiLinkedin className="text-2xl" />
                        <a className="text-left text-[#1a0dab]" href="https://www.linkedin.com/in/md-sahil-achanoor-2a686423a/">Linkedin Profile</a>
                    </div>

                    <div className="flex gap-2 items-center  py-2 w-full mx-2">
                        <AiFillGithub className="text-2xl" />
                        <a className="text-left text-[#1a0dab]" href="https://github.com/Mahmadsahil">Github Profile</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;