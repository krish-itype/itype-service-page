"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does website development cost?",
    answer:
      "It depends on the number of pages, design needs, features and integrations. After a free consultation, you get a clear, fixed quote before any work begins, with no hidden costs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites take 4 to 8 weeks from approved plan to launch. Larger custom builds take longer. We’ll give you a timeline with your quote.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We review what’s working, fix what isn’t and rebuild it to bring in more enquiries, keeping your SEO rankings protected during the move.",
  },
  {
    question: "Will my website work with Google Ads and SEO?",
    answer:
      "Yes. Every site is built with SEO basics, fast load times and ad-ready landing pages to help you rank and lower your cost per lead.",
  },
  {
    question: "Can you connect my CRM and enquiry forms?",
    answer:
      "Yes. We connect forms to your CRM, email or WhatsApp so every lead reaches the right person quickly.",
  },
  {
    question: "What happens on the free consultation?",
    answer:
      "A 30-minute call to understand your business, review your current site and recommend the right approach. No sales pressure, just clear advice.",
  },
] as const;

function Eyebrow() {
  return (
    <div className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap">
      <div className="flex min-w-0 flex-1 py-[8px]" aria-hidden="true">
        <span className="flex w-full border-t border-[rgba(145,145,145,0.7)]" />
      </div>
      <div className="relative flex shrink-0 items-center">
        <span className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 bg-[#f53101]" />
        <span className="block pl-[5px] font-archivo text-[13px] leading-[1.5] font-semibold tracking-[0.39px] text-black uppercase min-[501px]:text-[15px] min-[501px]:tracking-[0.45px]">
          Before you book
        </span>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      data-faq-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-white px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[768px]:flex-nowrap"
      aria-labelledby="faq-heading"
    >
      <div className="relative flex w-full flex-col min-[769px]:px-[10px]">
        <div className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <Eyebrow />

          <div className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[55%]">
            <h2
              id="faq-heading"
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Your questions, <span className="text-[#a9a9a9]">answered simply.</span>
            </h2>
          </div>

          <div className="relative flex w-full flex-row flex-wrap gap-[20px] pt-[30px] min-[769px]:flex-nowrap">
            <div className="w-full border-b border-[#d4d4d4]">
              {faqs.map((faq, index) => {
                const open = index === openIndex;
                const buttonId = `faq-button-${index}`;
                const panelId = `faq-panel-${index}`;
                return (
                  <div key={faq.question}>
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        className="flex min-h-[66.5px] w-full items-center justify-between gap-[10px] border-0 border-t border-[#d4d4d4] bg-transparent py-[20px] text-left font-archivo text-[18px] leading-[25.5px] font-semibold tracking-[-0.1px] text-[#1f2124] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black min-[769px]:min-h-[68px] min-[1025px]:max-[1480px]:text-[20px] min-[1025px]:max-[1480px]:leading-[30px]"
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(open ? -1 : index)}
                      >
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-[24px] leading-[20px] font-normal" aria-hidden="true">
                          {open ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!open}
                    >
                      <p className="m-0 pb-[20px] font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-[#4e4e4e] min-[501px]:max-[768px]:w-[80%]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
