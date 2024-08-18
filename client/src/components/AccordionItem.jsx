import React, { useState } from 'react';
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`border-b border-gray-200 ${isOpen ? 'bg-[#EDCB91]':'bg-[#7DA2C7]'}`}>
            <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={toggleAccordion}
            >
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-[var(--clr-dark)]">{title}</span>
                    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className=" p-4 text-[var(--clr-dark)]">{content}</div>
            </div>
        </div>
    );
};

export default AccordionItem