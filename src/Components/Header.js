import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [searchValue, setSearchValue] = useState("Md Sahil L Achanoor");
    const navigate = useNavigate();

    const handleCancelBtn = () => {
        setSearchValue("")
    }
    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearchBtn = () => {
        if (searchValue === "") {
            setSearchValue("Md Sahil L Achanoor")
        }
        switch (searchValue.toLowerCase()) {
            case 'all':
                navigate('/');
                break;
            case 'skill':
                navigate('/skill');
                break;
            case 'project':
                navigate('/project');
                break;
            case 'achivements':
                navigate('/achivements');
                break;
            case 'AIAssistant':
                navigate('/aiAssistant');
                break;
            default:
                alert('Invalid search term. Please try: All, Skill, Project, or AIAssistant');
                break;
        }
    }

    return (

        <div className="h-36 w-full flex-col justify-center p-4 ">
            <div className="w-full flex justify-between  items-center">
                <div className="w-11/12 md:w-8/12 flex items-center text-center ">
                    <div className="md:mr-8 ">
                        <img className="hidden md:block w-[6rem] mx-2 md:mx-4" alt="Google logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"></img>
                        <img className="block md:hidden w-9 md:mx-4" alt="Google smoll logo" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"></img>
                    </div>

                    <div className="w-full flex justify-center items-center p-2 mx-4 md:mx-14 my-4 rounded-3xl bg-slate-100">
                        <input className="w-full md:w-11/12 px-2 md:pl-3 md:py-[2px] text-gray-800 bg-slate-100  text-sm outline-none"
                            value={searchValue} type="text" onChange={handleOnChange}></input>
                        <BsXLg className="text-lg mx-2 text-gray-700 cursor-pointer font-bold" onClick={handleCancelBtn} />
                        <AiOutlineSearch className="text-2xl text-blue-400 mx-1 cursor-pointer" onClick={handleSearchBtn} />
                    </div>

                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center md:text-xl text-white text-center bg-green-600 rounded-[50%] p-2 " >
                    M
                </div>
            </div>

            <div className="w-full flex justify-end item-end">
                <ul className="w-full md:w-[86%] flex">
                    <Link to={"/"}><li className="py-2 px-2 md:py-2 md:px-4 w-18 md:text-sm text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 cursor-pointer">All</li></Link>
                    <Link to={"/skill"}><li className="py-2 px-2 md:py-2 md:px-4 w-18 md:text-sm text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 cursor-pointer">Skills</li></Link>
                    <Link to={"/project"}><li className="py-2 px-2 md:py-2 md:px-4 w-18 md:text-sm text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 cursor-pointer">Projects</li></Link>
                    <Link to={"/achivements"}><li className="py-2 px-2 md:py-2 md:px-4 w-18 md:text-sm text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 cursor-pointer">Achivements</li></Link>
                    <Link to={"/aiAssistant"}><li className="py-2 px-2 md:py-2 md:px-4 w-18 md:text-sm text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 cursor-pointer">AIAssistant</li></Link>
                </ul>
            </div>
        </div>

    )
}

export default Header;