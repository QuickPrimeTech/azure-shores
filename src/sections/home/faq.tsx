import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Header, H2, SubTitle } from "@/components/typography";

const faqs = [
  {
    question: "Do you require reservations?",
    answer:
      "While walk-ins are welcome, we highly recommend making reservations, especially during peak hours and weekends. You can book online, call us directly, or message us on WhatsApp.",
  },
  {
    question: "What water sports activities do you offer?",
    answer:
      "We offer a variety of water sports including kayaking, paddleboarding, snorkeling, and jet ski rentals. All equipment is provided and our certified instructors ensure a safe and enjoyable experience.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Our chefs are experienced in preparing dishes for various dietary needs including vegetarian, vegan, gluten-free, and allergen-free options. Please inform us of any restrictions when making your reservation.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we offer complimentary valet parking for all our guests. Our oceanfront location also has convenient self-parking options available.",
  },
  {
    question: "Can you host private events?",
    answer:
      "We specialize in private events including weddings, corporate gatherings, and celebrations. Our events team will work with you to create a customized experience that exceeds your expectations.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open daily from 11:00 AM to 11:00 PM. Our water sports activities are available from 9:00 AM to 6:00 PM, weather permitting.",
  },
];

export default function FAQ() {
  return (
    <Section
      className="bg-gray-50"
      aria-labelledby="faq-section-title"
      role="region"
    >
      <Header>
        <H2 id="faq-section-title">Frequently Asked Questions</H2>
        <SubTitle>
          Everything you need to know about your Azure Shores experience
        </SubTitle>
      </Header>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => {
            const triggerId = `faq-trigger-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm px-6"
              >
                <AccordionTrigger
                  id={triggerId}
                  aria-controls={contentId}
                  className="text-left"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent id={contentId} aria-labelledby={triggerId}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Section>
  );
}
