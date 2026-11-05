import { LeadForm } from "@/components/lead-form";

const reviewItems = [
  "Your current website and where it's losing enquiries",
  "Your goals, customers and competitors",
  "Quick wins you can act on straight away",
  "A clear quote and timeline",
] as const;

function Eyebrow() {
  return (
    <div className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap">
      <div className="flex min-w-0 flex-1 py-[8px]" aria-hidden="true">
        <span className="flex w-full border-t border-[rgba(145,145,145,0.7)]" />
      </div>
      <div className="relative flex shrink-0 items-center">
        <span className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 bg-[#f53101]" />
        <span className="block pl-[5px] font-archivo text-[15px] leading-[1.5] font-semibold tracking-[0.45px] text-white uppercase">
          Book your free call
        </span>
      </div>
    </div>
  );
}

export function FinalCtaSection() {
  return (
    <section
      data-final-cta-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-[#0a0a0a] px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[768px]:flex-nowrap"
      aria-labelledby="final-cta-heading"
    >
      <div className="relative flex w-full flex-col min-[769px]:px-[10px]">
        <div className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[40px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[501px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:flex-row min-[769px]:items-stretch min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <div className="relative flex w-full flex-col flex-wrap gap-[20px] min-[501px]:p-[10px] min-[768px]:flex-nowrap min-[769px]:w-[50.6%]">
            <Eyebrow />

            <h2
              id="final-cta-heading"
              className="m-0 w-full font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-white min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Get a website that{" "}
              <span className="text-[#a9a9a9]">brings in more customers.</span>
            </h2>

            <p className="m-0 w-full font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-[#ccc] min-[501px]:w-[80%]">
              Your first call is about your business, not a sales pitch. We’ll cover:
            </p>

            <ul className="m-0 w-full list-none pt-[9px]">
              {reviewItems.map((item, index) => (
                <li
                  className={`flex items-center py-[5.25px] font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-[#ccc] ${
                    index === 2 ? "max-[500px]:min-h-[58.5px]" : ""
                  }`}
                  key={item}
                >
                  <span className="mr-[14px] h-px w-[11px] shrink-0 bg-[#ff3d00]" aria-hidden="true" />
                  <span className="min-w-0 flex-1">{item}</span>
                </li>
              ))}
            </ul>

            <div className="h-[31px] w-full border-t border-[#333]" aria-hidden="true" />

            <div className="flex w-full flex-col gap-[10px]">
              <a
                className="flex items-center gap-[10px] font-archivo text-[16px] leading-[25.5px] font-bold tracking-[0.1px] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white min-[769px]:max-[1024px]:text-[18px] min-[769px]:max-[1024px]:leading-[27px] min-[1025px]:leading-[24px]"
                href="tel:+919898754737"
              >
                <svg className="h-[18px] w-[18px] shrink-0 fill-[#ff3d00]" viewBox="0 0 512 512" aria-hidden="true">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                <span>+91 9898754737</span>
              </a>
              <p className="m-0 font-inter text-[13px] leading-[19.5px] font-normal tracking-[0.1px] text-[#ccc]">
                Prefer to talk now? Call us directly.
              </p>
            </div>
          </div>

          <div className="relative flex w-full flex-col flex-wrap gap-[20px] min-[768px]:flex-nowrap min-[769px]:w-[49.4%]">
            <div className="w-full bg-white px-[28px] pt-[26px] pb-[30px]">
              <h3 className="m-0 font-archivo text-[24px] leading-[28.8px] font-extrabold tracking-[0.72px] text-black">
                Book a free consultation
              </h3>
              <p className="mt-[10px] mb-0 w-[93%] font-archivo text-[14px] leading-[21px] font-normal tracking-[0.42px] text-[#3b3b3b]">
                We reply within one working day. No obligation.
              </p>
              <div className="mt-[25px] pb-[20px]">
                <LeadForm
                  formId="final-consultation"
                  source="final-cta"
                  submitLabel="Book a Free Consultation"
                />
              </div>
              <p className="mt-[5px] mb-0 font-jakarta text-[12.48px] leading-[1.2] font-medium tracking-[0.3744px] text-black min-[769px]:leading-[1.6]">
                Free &amp; no-obligation. We’ll review your requirements and get back to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
