import { FAQ } from "../constants"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const Faq = () => {
  return (
    <div className="container mx-auto my-20 ">
        <h2 className="mb-20 text-center tracking-tighter sm:text-7xl lg:text-5xl">
            FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={faq.value}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default Faq