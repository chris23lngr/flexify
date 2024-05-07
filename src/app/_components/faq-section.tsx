import {
  SectionHeaderDescription,
  SectionHeaderHeading,
  SectionHeaderPill,
} from '@/components/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {} from '@radix-ui/react-accordion';
import Link from 'next/link';

const FaqItems = [
  {
    question: 'What is SAAS, and how does it work?',
    answer:
      'SAAS stands for Software as a Service, a cloud-based software distribution model where applications are hosted by a third-party provider and accessed by users over the internet. Users typically pay a subscription fee to access the software, which is managed and maintained by the provider.',
  },
  {
    question: 'How is SAAS different from traditional software?',
    answer:
      'Unlike traditional software, SAAS eliminates the need for users to install and maintain applications on their own computers or servers. SAAS applications are accessed via a web browser, offering greater flexibility, scalability, and accessibility.',
  },
  {
    question: 'What are the benefits of using SAAS for my business?',
    answer:
      'SAAS offers numerous benefits, including cost savings, scalability, automatic updates, and accessibility from anywhere with an internet connection. It also allows for easier collaboration and integration with other tools and services.',
  },
  {
    question: 'Is my data safe with a SAAS provider?',
    answer:
      'Yes, reputable SAAS providers implement robust security measures to protect user data. This includes encryption, access controls, regular security audits, and compliance with industry standards such as GDPR and HIPAA, depending on the nature of the data.',
  },
  {
    question: 'Can I customize a SAAS application to fit my business needs?',
    answer:
      'Many SAAS applications offer customization options to tailor the software to your specific business requirements. This may include configuring settings, adding custom fields, or integrating with other systems through APIs.',
  },
  {
    question: 'How often are SAAS applications updated?',
    answer:
      'SAAS applications are typically updated regularly by the provider to introduce new features, improvements, and security patches. Updates are usually applied automatically, ensuring users always have access to the latest version of the software.',
  },
  {
    question: 'What happens if I want to cancel my SAAS subscription?',
    answer:
      'If you decide to cancel your SAAS subscription, you may lose access to the software and any data stored within it, depending on the terms of your agreement with the provider. Be sure to review the cancellation policy and any potential fees before making a decision.',
  },
  {
    question:
      'How can I get support for technical issues with a SAAS application?',
    answer:
      'SAAS providers typically offer various support channels, such as email, live chat, and knowledge bases, to assist users with technical issues. Some providers may also offer dedicated support teams or premium support plans for additional assistance.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="container mb-4">
        <SectionHeaderPill>FAQ</SectionHeaderPill>
      </div>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <SectionHeaderHeading>
            Frequently Asked Questions
          </SectionHeaderHeading>
          <SectionHeaderDescription>
            Get answers to common questions about our platform, pricing, and
            features. Can't find what you're looking for?{' '}
            <Link
              href={'/contact'}
              className="font-medium underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Contact us
            </Link>{' '}
            for more information.
          </SectionHeaderDescription>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {FaqItems.map((item, index) => (
              <AccordionItem key={index} value={`faqItem${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
