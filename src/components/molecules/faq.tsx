"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";



const Faq = ({ data }: { data: any }) => {
    return (
        <section className="container">

            <div className="pb-[70px] max-w-[800px] mx-auto">


                <Accordion type="single" defaultValue="item-1" collapsible className="flex flex-col gap-5" >

                    {
                        data.qnaList.map((item: {
                            id: number;
                            title: string;
                            details: string;
                        }) => {
                            const { id, title, details } = item;
                            return (

                                <AccordionItem key={id} value={`item-${id}`}>
                                    <AccordionTrigger>{title}</AccordionTrigger>
                                    <AccordionContent>
                                        {details}
                                    </AccordionContent>
                                </AccordionItem>

                            )
                        })
                    }
                </Accordion>

            </div>
        </section>
    )
}

export default Faq;
