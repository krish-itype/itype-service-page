const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We discuss your goals, budget and timeline, then send a clear quote.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "Sitemap, wireframes and designs you review and approve.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "We develop, optimise for speed and SEO, and set up lead tracking.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We go live, measure results and keep improving.",
  },
] as const;

const cardBorders = [
  "border",
  "border-x border-b min-[501px]:border-t min-[501px]:border-l-0 min-[769px]:border-l-0",
  "border-x border-b min-[501px]:border-t-0 min-[769px]:border-t min-[769px]:border-l-0",
  "border-x border-b min-[501px]:border-l-0 min-[769px]:border-t min-[769px]:border-l-0",
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
          How it works
        </span>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      data-process-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-[#f4f4f2] px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[768px]:flex-nowrap"
      aria-labelledby="process-heading"
    >
      <div className="relative flex w-full flex-col min-[769px]:px-[10px]">
        <div className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <Eyebrow />

          <div className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[50%]">
            <h2
              id="process-heading"
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              A simple, low-risk process{" "}
              <span className="text-[#a9a9a9]">from first call to launch.</span>
            </h2>
          </div>

          <div className="relative grid w-full grid-cols-1 grid-rows-[repeat(4,1fr)] gap-0 pt-[25px] min-[501px]:grid-cols-2 min-[501px]:grid-rows-[repeat(2,1fr)] min-[769px]:grid-cols-4 min-[769px]:grid-rows-[1fr]">
            {steps.map((step, index) => (
              <article
                className={`relative flex flex-col flex-wrap gap-[10px] border-[#e6e6e6] bg-white p-[20px] min-[768px]:flex-nowrap ${cardBorders[index]}`}
                key={step.number}
              >
                <p
                  className="m-0 font-archivo text-[34px] leading-[47.6px] font-extrabold tracking-[1.02px] text-white [-webkit-text-stroke:1.5px_#ff3d00]"
                  aria-hidden="true"
                >
                  {step.number}
                </p>
                <h3 className="m-0 font-archivo text-[18px] leading-[25.2px] font-semibold tracking-[-0.3px] text-black">
                  {step.title}
                </h3>
                <p className="m-0 w-full max-w-full font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-[#202020]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
