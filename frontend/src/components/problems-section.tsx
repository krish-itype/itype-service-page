import type { ReactNode } from "react";

const problems: Array<{ title: string; description: ReactNode }> = [
  {
    title: "It looks outdated next to competitors.",
    description: (
      <>
        Visitors <strong>doubt your business</strong> before they ever call.
      </>
    ),
  },
  {
    title: "Visitors can't tell what you offer.",
    description: (
      <>
        People <strong>leave in seconds</strong> when the message isn’t clear.
      </>
    ),
  },
  {
    title: "Traffic arrives but enquiries don't.",
    description: (
      <>
        You <strong>{"pay for clicks "}</strong>that never turn into leads.
      </>
    ),
  },
  {
    title: "Your Google Ads pages don't convert.",
    description: (
      <>
        Higher cost per lead and <strong>wasted ad spend.</strong>
      </>
    ),
  },
  {
    title: "It doesn't work well on mobile.",
    description: (
      <>
        Most visitors browse on phones and{" "}
        <strong>leave a slow, clunky site.</strong>
      </>
    ),
  },
  {
    title: "There's no clear next step.",
    description: (
      <>
        Interested visitors <strong>don’t know how to contact you.</strong>
      </>
    ),
  },
];

function EyebrowSquare() {
  return (
    <svg
      data-problems-eyebrow-icon
      className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 fill-[#f53101]"
      viewBox="0 0 21.041 21.041"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.51 0H.524C.267 0 .056.209.056.469v20.104c0 .255.211.468.468.468H20.51c.263 0 .476-.213.476-.468V.469C20.986.209 20.772 0 20.51 0Z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <span
      data-problem-title-icon-wrapper
      className="flex shrink-0 pr-[5px]"
      aria-hidden="true"
    >
      <svg
        data-problem-title-icon
        className="mr-[3.75px] block h-[15px] w-[15px] fill-[#f53101]"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m284.286 256.002 221.857-221.858c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.94 19.94 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285Z" />
      </svg>
    </span>
  );
}

export function ProblemsSection() {
  return (
    <section
      data-problems-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-[#f4f4f2] px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[1481px]:flex-nowrap"
      aria-labelledby="problems-heading"
    >
      <div
        data-problems-boxed
        className="relative flex w-full flex-col min-[769px]:px-[10px]"
      >
        <div
          data-problems-inner
          className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]"
        >
          <div
            data-problems-eyebrow
            className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap"
          >
            <div
              data-problems-eyebrow-divider
              className="flex min-w-0 flex-1 py-[8px]"
              aria-hidden="true"
            >
              <span
                data-problems-eyebrow-line
                className="flex w-full border-t-2 border-[rgba(230,230,230,0.41)]"
              />
            </div>
            <div
              data-problems-eyebrow-item
              className="relative flex shrink-0 items-center"
            >
              <EyebrowSquare />
              <span
                data-problems-eyebrow-text
                className="block pl-[5px] font-archivo text-[13px] leading-[1.5] font-semibold tracking-[0.39px] text-black uppercase min-[501px]:text-[15px] min-[501px]:tracking-[0.45px]"
              >
                Why it matters
              </span>
            </div>
          </div>

          <div
            data-problems-heading-widget
            className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[55%] min-[1481px]:w-1/2"
          >
            <h2
              id="problems-heading"
              data-problems-heading
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Your website should bring you customers,{" "}
              <span data-problems-heading-muted className="text-[#a9a9a9]">
                not turn them away.
              </span>
            </h2>
          </div>

          <p
            data-problems-intro
            className="m-0 w-full font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-[#242424] min-[501px]:w-[60%] min-[769px]:w-[45%]"
          >
            If your site gets visitors but few enquiries, one of these is
            usually the reason.
          </p>

          <div
            data-problems-grid
            className="relative grid w-full grid-cols-1 grid-rows-[1fr_1fr] gap-0 pt-[25px] min-[501px]:grid-cols-2"
          >
            {problems.map((problem, index) => (
              <article
                data-problem-card
                className={`relative flex flex-col flex-wrap gap-[10px] border border-[#d4d4d4] bg-white p-[20px] min-[768px]:flex-nowrap ${
                  index > 0 ? "border-t-0" : ""
                } ${index === 1 ? "min-[501px]:border-t" : ""} ${
                  index % 2 === 1 ? "min-[501px]:border-l-0" : ""
                }`}
                key={problem.title}
              >
                <div
                  data-problem-title-widget
                  className="relative block w-full max-w-full"
                >
                  <div
                    data-problem-title-item
                    className="relative flex w-full items-center"
                  >
                    <CrossIcon />
                    <h3
                      data-problem-title-text
                      className="m-0 block pl-[5px] font-archivo text-[16px] leading-[24px] font-bold tracking-[0.48px] text-black"
                    >
                      {problem.title}
                    </h3>
                  </div>
                </div>
                <p
                  data-problem-description
                  className="m-0 w-full pl-[26px] font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-black [&_strong]:font-bold [&_strong]:text-[#ff3d00]"
                >
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
