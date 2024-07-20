const NamedSkill = (props) => {
    const { name, img, imgSize } = props
    return (
        <>
            <div className="w-36 h-14 p-2 md:w-[200px] md:h-[100px] flex justify-center items-center flex-col gap-1 md:p-4 cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-2xl ">
                <img className={imgSize} alt="Skill logo" src={img}></img>
                <p className="text-gray-600 text-sm md:text-base font-bold">{name}</p>
            </div>
        </>
    )
}

export default NamedSkill;