import React from 'react'
import AccordionItem from './AccordionItem';
const Accordion = () => {
  return (
    <section>
        <div className="lg:w-2/3 w-full mx-auto my-24 px-5">
        <AccordionItem
          title="Aemion+® AF3 Membrane Pretreatment & Handling"
          content="Membrane handling, storage, and pre-treatment instructions for Aemion+® AF3 Membranes."
        />
        <AccordionItem
          title="Pemion®: Membrane Handling & Storage"
          content="Membrane handling, storage, and pre-treatment instructions for Pemion® Membranes."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        <AccordionItem
          title="Aemion+® AP3: Ionomer Dispersion & Ink Formulation"
          content="Ionomer handling, mixing, and formulation instructions for Aemion+® AP3."
        />
        {/* Add more AccordionItem components as needed */}
      </div>
    </section>
  )
}

export default Accordion
