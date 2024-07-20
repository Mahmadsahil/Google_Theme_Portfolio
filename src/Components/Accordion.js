import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const Accordion = (props) => {
    const { question, answer } = props
    const [accordion, setAccordion] = useState(false);

    const hancleAccordion = () => {
        setAccordion(!accordion);
    }

    return (
        <>
            {/* Accordion */}
            {/* People also ask */}
            <div>
                <div className="w-full md:w-10/12 py-2">
                    <hr className="w-12/12"></hr>
                    <div className="flex  justify-between items-center cursor-pointer" onClick={hancleAccordion}>
                        <p className="text-md font-bold text-gray-600 p-2">{question}</p>
                        {accordion ?  <FiChevronUp className="text-xl text-gray-600" /> : <FiChevronDown className="text-xl text-gray-600" /> }
                    </div>
                    {accordion ?
                        <p className="text-md text-gray-600 px-2">{answer}</p>
                        : ""}
                </div>
            </div>
        </>
    )
}

export default Accordion;