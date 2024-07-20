import NamedSkill from "./NamedSkill";

const Skills = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center ">
                <div className="w-11/12 md:w-9/12 p-4">
                    <div className="mb-2">
                        <p className="text-gray-600 text-base md:text-lg">Md Sahil loves to develop innovative web apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive web apps.</p>
                    </div>

                    <div className="w-full flex justify-center my-8">
                        <div className="w-11/12 md:w-6/12 bg-slate-300 p-6 text-center rounded-2xl">
                            <p className="text-center text-xl font-bold p-1 text-gray-700">Frontend Skills</p>
                            <p className="text-gray-700">JavaScript, React Js, Redux, Jest, Html5, CSS3, Tailwind Css</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center flex-wrap gap-4 my-4">
                        <NamedSkill imgSize="w-6 md:w-12" name="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <NamedSkill imgSize="w-6 md:w-12" name="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <NamedSkill imgSize="w-6 md:w-12" name="Redux" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <NamedSkill imgSize="w-6 md:w-12" name="HTML 5" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <NamedSkill imgSize="w-6 md:w-12" name="CSS 3" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <NamedSkill imgSize="w-34" name="Tailwind CSS" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" />
                    </div>

                </div>
            </div>
        </>
    )
};

export default Skills;