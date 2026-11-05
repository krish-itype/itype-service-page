const trustItems = [
  "Free & no-obligation",
  "Reply within 1 working day",
  "Speak to a specialist",
] as const;

function TrustSquare() {
  return (
    <svg
      data-review-cta-trust-icon
      className="relative -top-px mr-[7px] block h-[8px] w-[8px] shrink-0 fill-[#e9e9e9]"
      viewBox="0 0 21.041 21.041"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.51 0H.524C.267 0 .056.209.056.469v20.104c0 .255.211.468.468.468H20.51c.263 0 .476-.213.476-.468V.469C20.986.209 20.772 0 20.51 0Z" />
    </svg>
  );
}

export function ReviewCtaSection() {
  return (
    <section
      data-review-cta-section
      className="relative flex w-full max-w-full flex-col gap-[20px] bg-[#ff3d00] px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px]"
      aria-labelledby="review-cta-heading"
    >
      <div data-review-cta-boxed className="relative flex w-full flex-col">
        <div
          data-review-cta-inner
          className="mx-auto flex w-full max-w-[767px] flex-col items-center gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]"
        >
          <div
            data-review-cta-heading-widget
            className="w-full max-w-full text-center min-[501px]:w-[75%] min-[1025px]:w-[60%]"
          >
            <h2
              id="review-cta-heading"
              data-review-cta-heading
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-white min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Find out why your website isn&apos;t getting enquiries.
            </h2>
          </div>

          <p
            data-review-cta-intro
            className="m-0 w-full text-center font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-white min-[501px]:w-[60%] min-[769px]:w-[40%]"
          >
            Book a free consultation. We’ll review your site with you and show
            you what to fix first.
          </p>

          <div
            data-review-cta-button-widget
            className="flex w-fit justify-center pt-[15px] min-[501px]:w-full"
          >
            <ConsultationTrigger
              data-review-cta-button
              className="inline-block bg-white px-[34px] py-[17px] text-center font-archivo text-[16px] leading-[24px] font-bold tracking-[0.1px] text-black transition-colors duration-300 focus:bg-black focus:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              source="website-review"
            >
              Get a Free Website Review
            </ConsultationTrigger>
          </div>

          <div
            data-review-cta-trust-widget
            className="w-[66%] max-w-[66%] min-[501px]:w-full min-[501px]:max-w-full"
          >
            <ul
              data-review-cta-trust-list
              className="-mx-[12.5px] m-0 flex w-[calc(100%+25px)] list-none flex-row flex-wrap justify-start gap-y-0 p-0 min-[501px]:justify-center"
            >
              {trustItems.map((item) => (
                <li
                  data-review-cta-trust-item
                  className="mx-[12.5px] flex h-[19.5px] items-center"
                  key={item}
                >
                  <TrustSquare />
                  <span
                    data-review-cta-trust-text
                    className="pl-[5px] font-inter text-[13px] leading-[19.5px] font-medium tracking-[0.39px] text-white"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ConsultationTrigger } from "@/components/consultation-trigger";

