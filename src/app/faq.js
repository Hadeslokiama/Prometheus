import React from 'react';
import { AccordionFAQ } from "../components/custom/accordionFAQ";

const FAQ = () => {
  return (
    <section className="py-8 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-300">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <AccordionFAQ />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
