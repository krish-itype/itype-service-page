import { AnimatedCounter } from "@/components/animated-counter";

const beforeItems = [
  "Outdated design",
  "Confusing navigation",
  "Talks about you, not the customer",
  "Weak or hidden contact options",
  "Few trust signals",
  "Slow and hard to use on mobile",
] as const;

const afterItems = [
  "Modern, trustworthy design",
  "Easy, clear navigation",
  "Customer-focused messaging",
  "Clear calls-to-action on every page",
  "Reviews, results and credentials on show",
  "Fast, mobile-friendly experience",
] as const;

const stats: ReadonlyArray<{
  target: number;
  decimals?: number;
  title: string;
}> = [
  { target: 1000, title: "Websites Delivered" },
  { target: 20, title: "Years Experience" },
  { target: 25, title: "Industries Served" },
  { target: 4.9, decimals: 1, title: "Client Rating" },
];

function Eyebrow() {
  return (
    <div className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap">
      <div className="flex min-w-0 flex-1 py-[8px]" aria-hidden="true">
        <span className="flex w-full border-t border-[rgba(145,145,145,0.7)]" />
      </div>
      <div className="relative flex shrink-0 items-center">
        <span className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 bg-[#f53101]" />
        <span className="block pl-[5px] font-archivo text-[13px] leading-[1.5] font-semibold tracking-[0.39px] text-black uppercase min-[501px]:text-[15px] min-[501px]:tracking-[0.45px]">
          The transformation
        </span>
      </div>
    </div>
  );
}

function ComparisonCard({
  items,
  tone,
  title,
}: {
  items: readonly string[];
  tone: "before" | "after";
  title: string;
}) {
  const dark = tone === "after";
  return (
    <article
      className={`relative flex w-full flex-col flex-wrap gap-[20px] border p-[20px] min-[501px]:p-[30px] min-[769px]:w-1/2 min-[768px]:flex-nowrap ${
        dark ? "border-black bg-black" : "border-[#d4d4d4] bg-transparent"
      }`}
    >
      <h3
        className={`m-0 flex items-center font-archivo text-[15px] leading-[22.5px] font-semibold tracking-[0.45px] uppercase ${
          dark ? "text-[#ff3d00]" : "text-[#a9a9a9]"
        }`}
      >
        <span
          className={`mr-[10px] h-[10px] w-[10px] shrink-0 ${
            dark ? "bg-[#a9a9a9]" : "bg-[#a9a9a9]"
          }`}
          aria-hidden="true"
        />
        {title}
      </h3>
      <ul
        className={`m-0 list-none border-t pt-[9px] ${
          dark ? "border-[#333]" : "border-[#d4d4d4]"
        }`}
      >
        {items.map((item, index) => (
          <li
            className={`flex items-center border-b py-[11.1665px] font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] last:border-b-0 last:py-[11.6665px] ${
              dark ? "border-[#333] text-white" : "border-[#d4d4d4] text-[#292929]"
            } ${dark && index === 3 ? "max-[500px]:min-h-[71.31px]" : ""}`}
            key={item}
          >
            <span
              className={`mr-[10px] h-px w-[11px] shrink-0 ${
                dark ? "bg-[#ff3d00]" : "bg-[#a9a9a9]"
              }`}
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function TransformationSection() {
  return (
    <section
      data-transformation-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-white px-[20px] pt-[50px] pb-0 min-[501px]:px-0 min-[501px]:pt-[88px] min-[768px]:flex-nowrap"
      aria-labelledby="transformation-heading"
    >
      <div className="relative flex w-full flex-col min-[769px]:px-[10px]">
        <div className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <Eyebrow />

          <div className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[55%]">
            <h2
              id="transformation-heading"
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              From online brochure{" "}
              <span className="text-[#a9a9a9]">to lead generator.</span>
            </h2>
          </div>

          <div className="relative flex w-full flex-row flex-wrap items-stretch gap-[20px] pt-[30px] min-[769px]:flex-nowrap">
            <ComparisonCard title="Before" tone="before" items={beforeItems} />
            <ComparisonCard title="After" tone="after" items={afterItems} />
          </div>

          <div className="relative grid w-full grid-cols-2 grid-rows-[auto_auto] gap-0 pt-[20px] min-[501px]:grid-rows-[repeat(2,1fr)] min-[501px]:pt-[70px] min-[769px]:grid-cols-4 min-[769px]:grid-rows-[1fr]">
            {stats.map((stat, index) => (
              <article
                className={`relative flex flex-col flex-wrap gap-[8px] p-[20px] min-[501px]:max-[768px]:min-h-[151.188px] min-[501px]:p-[40px] min-[768px]:flex-nowrap min-[769px]:max-[1024px]:min-h-[167.781px] ${
                  index % 2 === 0 ? "border-r-2" : ""
                } ${index < 2 ? "border-b min-[769px]:border-b-0" : ""} ${
                  index === 1 ? "min-[769px]:border-r-2" : ""
                } ${index === 2 ? "min-[769px]:border-r-2" : ""} border-[#e6e6e6]`}
                key={stat.title}
              >
                <p className="m-0 flex font-archivo text-[28px] leading-[39.2px] font-extrabold tracking-[0.84px] text-[#a9a9a9] min-[1025px]:text-[40px] min-[1025px]:leading-[56px] min-[1025px]:tracking-[1.2px]">
                  <AnimatedCounter target={stat.target} decimals={stat.decimals} />
                  <span className="ml-[8px]">+</span>
                </p>
                <h3 className="m-0 font-archivo text-[12px] leading-[15.6px] font-bold tracking-[0.36px] text-[#a9a9a9] uppercase">
                  {stat.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
