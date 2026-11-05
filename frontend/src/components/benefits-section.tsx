const benefits = [
  {
    icon: "shield",
    title: "Strategy before design",
    description: "We learn your business before designing a single page.",
  },
  {
    icon: "chart",
    title: "Built around your customers",
    description: "Content and structure follow how your buyers decide.",
  },
  {
    icon: "stopwatch",
    title: "Conversion-focused",
    description: "Every page has a clear purpose and a clear call to action.",
  },
  {
    icon: "search",
    title: "SEO-ready",
    description: "Built to help you get found on Google from launch.",
  },
  {
    icon: "bolt",
    title: "Google Ads-friendly",
    description:
      "Pages that improve Quality Score and make ad spend work harder.",
  },
  {
    icon: "mobile",
    title: "Mobile-first",
    description: "Fast, easy to use and built to convert on every device.",
  },
] as const;

const cardBorders = [
  "border-t border-r-0 border-b border-l max-[502px]:border-r",
  "border-t border-r-0 border-b border-l max-[502px]:border-t-0 max-[502px]:border-r max-[502px]:border-b-0 max-[400px]:border-t max-[400px]:border-b min-[501px]:max-[502px]:border-t min-[501px]:max-[502px]:border-b",
  "border",
  "border-t-0 border-r-0 border-b border-l max-[502px]:border-r",
  "border-t-0 border-r-0 border-b border-l max-[502px]:border-r",
  "border-t-0 border-r border-b border-l",
] as const;

type BenefitIconName = (typeof benefits)[number]["icon"];

function EyebrowSquare() {
  return (
    <svg
      data-benefits-eyebrow-icon
      className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 fill-[#f53101]"
      viewBox="0 0 21.041 21.041"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.51 0H.524C.267 0 .056.209.056.469v20.104c0 .255.211.468.468.468H20.51c.263 0 .476-.213.476-.468V.469C20.986.209 20.772 0 20.51 0Z" />
    </svg>
  );
}

function BenefitIcon({ icon }: { icon: BenefitIconName }) {
  const commonProps = {
    "aria-hidden": true,
    "data-benefit-icon-svg": true,
    className: "block h-[18px] w-[18px] fill-white",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  if (icon === "shield") {
    return (
      <svg {...commonProps} viewBox="0 0 512 512">
        <path d="m459.669 82.906-196-81.377c-4.91-2.038-10.429-2.039-15.338 0l-196 81.377c-7.465 3.1-12.331 10.388-12.331 18.471v98.925c0 136.213 82.329 258.74 208.442 310.215 4.844 1.977 10.271 1.977 15.116 0 126.111-51.474 208.442-174.001 208.442-310.215v-98.925c0-8.083-4.865-15.371-12.331-18.471zm-27.669 117.396c0 115.795-68 222.392-176 269.974-105.114-46.311-176-151.041-176-269.974v-85.573l176-73.074 176 73.074zm-198.106 67.414 85.964-85.963c7.81-7.81 20.473-7.811 28.284 0s7.81 20.474-.001 28.284l-100.105 100.105c-7.812 7.812-20.475 7.809-28.284 0l-55.894-55.894c-7.811-7.811-7.811-20.474 0-28.284s20.474-7.811 28.284 0z" />
      </svg>
    );
  }

  if (icon === "chart") {
    return (
      <svg {...commonProps} viewBox="0 0 8.4666665 8.4666669">
        <g transform="translate(0 -288.533)">
          <path d="m.78562533 289.06067a.26460982.26460982 0 0 0-.2599325.26768v6.87865a.26460982.26460982 0 0 0 .2635498.26562h6.88123387a.26465001.26465001 0 1 0 0-.52917h-6.6151003v-6.6151a.26460982.26460982 0 0 0-.26975087-.26768zm6.87865017 1.72031a.26460982.26460982 0 0 0-.181385.0801l-2.7150794 2.71508-1.1363648-1.25006a.26460982.26460982 0 0 0-.3731038-.0176l-1.5880167 1.45521a.26481563.26481563 0 1 0 .3576009.39068l1.3926797-1.27538 1.1425661 1.25781a.26460982.26460982 0 0 0 .3824055.01l2.9104165-2.91196a.26460982.26460982 0 0 0-.191719-.4532z" />
        </g>
      </svg>
    );
  }

  if (icon === "stopwatch") {
    return (
      <svg {...commonProps} viewBox="0 0 448 512">
        <path d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
      </svg>
    );
  }

  if (icon === "search") {
    return (
      <svg {...commonProps} viewBox="0 0 512 512">
        <path d="M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
      </svg>
    );
  }

  if (icon === "bolt") {
    return (
      <svg {...commonProps} viewBox="0 0 512.002 512.002">
        <path d="m201.498 512.002c-1.992 0-4.008-.398-5.934-1.229-6.741-2.907-10.387-10.266-8.617-17.39l50.724-204.178h-136.67c-4.947 0-9.576-2.439-12.373-6.52s-3.402-9.278-1.617-13.892l100.262-259.204c2.235-5.779 7.793-9.589 13.989-9.589h137.961c5.069 0 9.795 2.56 12.565 6.806 2.768 4.246 3.206 9.603 1.162 14.242l-59.369 134.76h117.42c5.486 0 10.534 2.995 13.164 7.81 2.63 4.814 2.422 10.68-.543 15.296l-209.496 326.192c-2.833 4.412-7.651 6.896-12.628 6.896zm-78.612-252.796h133.967c4.615 0 8.973 2.125 11.816 5.76s3.854 8.378 2.741 12.857l-33.454 134.664 145.584-226.68h-112.959c-5.069 0-9.795-2.56-12.564-6.806s-3.207-9.603-1.163-14.241l59.37-134.76h-104.681z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} viewBox="0 0 320 512">
      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
    </svg>
  );
}

export function BenefitsSection() {
  return (
    <section
      data-benefits-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-white px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[1481px]:flex-nowrap"
      aria-labelledby="benefits-heading"
    >
      <div
        data-benefits-boxed
        className="relative flex w-full flex-col min-[769px]:px-[10px]"
      >
        <div
          data-benefits-inner
          className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]"
        >
          <div
            data-benefits-eyebrow
            className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap"
          >
            <div
              data-benefits-eyebrow-divider
              className="flex min-w-0 flex-1 py-[8px]"
              aria-hidden="true"
            >
              <span
                data-benefits-eyebrow-line
                className="flex w-full border-t border-[rgba(145,145,145,0.7)]"
              />
            </div>
            <div
              data-benefits-eyebrow-item
              className="relative flex shrink-0 items-center"
            >
              <EyebrowSquare />
              <span
                data-benefits-eyebrow-text
                className="block pl-[5px] font-archivo text-[13px] leading-[1.5] font-semibold tracking-[0.39px] text-black uppercase min-[501px]:text-[15px] min-[501px]:tracking-[0.45px]"
              >
                Why businesses choose us
              </span>
            </div>
          </div>

          <div
            data-benefits-heading-widget
            className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[55%]"
          >
            <h2
              id="benefits-heading"
              data-benefits-heading
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              A website built to grow your business,{" "}
              <span data-benefits-heading-muted className="text-[#a9a9a9]">
                not just look good.
              </span>
            </h2>
          </div>

          <div
            data-benefits-grid
            className="relative grid w-full grid-cols-1 grid-rows-[repeat(2,1fr)] gap-0 pt-[25px] min-[501px]:grid-cols-2 min-[769px]:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <article
                data-benefit-card
                className={`relative flex flex-col flex-wrap gap-[10px] border-[#e6e6e6] bg-white p-[30px] transition-colors duration-500 min-[768px]:flex-nowrap ${cardBorders[index]}`}
                key={benefit.title}
              >
                <div
                  data-benefit-icon-widget
                  className="relative block h-[56px] w-full max-w-full"
                >
                  <span
                    data-benefit-icon
                    className="inline-flex h-[50px] w-[50px] items-center justify-center bg-black text-white"
                  >
                    <BenefitIcon icon={benefit.icon} />
                  </span>
                </div>
                <h3
                  data-benefit-title
                  className="m-0 font-archivo text-[19px] leading-[1.4] font-bold tracking-[-0.3px] text-black"
                >
                  {benefit.title}
                </h3>
                <p
                  data-benefit-description
                  className="m-0 w-full max-w-full font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-[#292929]"
                >
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
