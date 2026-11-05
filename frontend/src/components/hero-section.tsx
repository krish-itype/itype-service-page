const benefits = [
  "Custom website design and development, no templates",
  "SEO-ready, fast and mobile-friendly from day one",
  "Built to work with Google Ads and your marketing",
];

function CheckIcon() {
  return (
    <svg
      className="mr-[6px] h-[24px] w-[24px] flex-none fill-[#f53101]"
      aria-hidden="true"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-[#f4f4f2] px-[20px] min-[501px]:px-0"
    >
      <div
        data-hero-grid
        className="flex w-full flex-col items-center justify-center gap-[20px] bg-[linear-gradient(#0000000d_1px,transparent_1px),linear-gradient(90deg,#0000000d_1px,transparent_1px)] py-[56px] pb-[64px] opacity-90 [background-size:60px_60px]"
      >
        <div
          data-hero-main
          className="flex w-full flex-col items-start justify-between gap-[20px] min-[501px]:w-[95%] min-[769px]:w-[90%] min-[769px]:flex-row min-[1025px]:w-[80%] min-[1481px]:w-[65%]"
        >
          <div
            data-hero-content
            className="relative z-[99] flex w-full flex-col gap-[20px] min-[769px]:w-1/2"
          >
            <div data-hero-eyebrow className="flex w-full py-[15px]">
              <div className="flex w-[60%] items-center min-[501px]:w-[32%] min-[769px]:w-[55%] min-[1025px]:w-[42%] min-[1481px]:w-[40%]">
                <span
                  className="h-[2.1px] min-w-0 flex-1 bg-[#ff3d00]"
                  aria-hidden="true"
                />
                <span className="ml-[10px] block max-w-[95%] shrink-0 font-jakarta text-[12px] leading-[1.3] font-bold tracking-[1.2px] text-[#ff3d00] uppercase min-[769px]:text-[13px] min-[1025px]:text-[12px] min-[1481px]:text-[12.8px]">
                  Website Development Services
                </span>
              </div>
            </div>

            <h1 className="w-full font-archivo text-[40px] leading-[1.2] font-extrabold tracking-[-0.03em] text-black min-[501px]:w-[80%] min-[769px]:w-full min-[769px]:text-[45px] min-[769px]:leading-none min-[1025px]:w-[95%] min-[1025px]:text-[58px] min-[1481px]:text-[62.4px]">
              Professional websites built to
              <br />
              <span className="bg-[#ff3d00] text-white">
                {" "}turn visitors into enquiries.
              </span>
            </h1>

            <p className="m-0 w-full font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-black min-[501px]:w-[85%] min-[1481px]:w-[90%]">
              We’re a website development company that designs and builds
              fast, SEO-ready business websites. Every page is planned to help
              your customers understand what you offer and get in touch.
            </p>

            <ul className="m-0 w-full list-none p-0">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={`flex items-center font-inter text-[16px] leading-[24px] font-medium tracking-[0.48px] text-black ${
                    index > 0 ? "mt-[4.5px]" : ""
                  } ${index < benefits.length - 1 ? "pb-[4.5px]" : ""}`}
                >
                  <CheckIcon />
                  <span className="pl-[5px]">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="w-full py-[10px] min-[1025px]:py-[15px]">
              <div className="w-full border-t border-[#a2a2a2]" />
            </div>

            <div aria-hidden="true" />
          </div>

          <div
            id="consultation"
            data-consultation-card
            className="flex w-full flex-col gap-0 shadow-[0_0_50px_-7px_rgba(0,0,0,0.2)] min-[769px]:w-[42%]"
          >
            <div className="flex flex-col gap-[12px] bg-black px-[28px] pt-[24px] pb-[22px]">
              <p className="m-0 self-start bg-[#ff3d00] p-[7px] font-archivo text-[12px] leading-[1.2] font-bold tracking-[0.36px] text-white uppercase">
                <span>Free · No obligation</span>
              </p>
              <h2 className="font-archivo text-[24px] leading-[1.2] font-extrabold tracking-[0.72px] text-white">
                Get a free website consultation
              </h2>
              <p className="m-0 w-[93%] font-archivo text-[14px] leading-[21px] font-normal tracking-[0.42px] text-white">
                A 30-minute call on your website and where it&apos;s losing
                enquiries. No pressure, no jargon.
              </p>
            </div>

            <div className="flex flex-col gap-[25px] bg-white px-[28px] pt-[26px] pb-[30px]">
              <LeadForm
                formId="hero-consultation"
                source="hero"
                submitLabel="Get My Free Quote"
              />

              <div className="pb-[14.4px] text-center font-jakarta text-[12.48px] leading-[1.2] font-medium tracking-[0.3744px] text-black min-[769px]:leading-[1.6]">
                <strong className="font-bold">
                  We reply within one working day.
                </strong>
                <br />
                Takes about 30 seconds. A real person, not an automated call.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { LeadForm } from "@/components/lead-form";

