const services = [
  {
    number: "01",
    title: "Strategy & Planning",
    description:
      "We map your services, customers and goals before any design starts.",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "Clean, professional layouts that build trust and guide visitors to act.",
  },
  {
    number: "03",
    title: "SEO Foundations",
    description:
      "Fast, well-structured pages that help you rank on Google.",
  },
  {
    number: "04",
    title: "Custom Development",
    description:
      "Secure, scalable builds with an easy CMS your team can update.",
  },
  {
    number: "05",
    title: "Landing Pages for Ads",
    description:
      "High-converting pages that match your Google Ads and lower lead costs.",
  },
  {
    number: "06",
    title: "Tracking & Leads",
    description:
      "See which pages and campaigns bring enquiries, then improve them.",
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

function EyebrowSquare() {
  return (
    <svg
      data-services-eyebrow-icon
      className="mr-[2.5px] block h-[10px] w-[10px] shrink-0 fill-[#f53101] text-[#333333]"
      viewBox="0 0 21.041 21.041"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.51 0H.524C.267 0 .056.209.056.469v20.104c0 .255.211.468.468.468H20.51c.263 0 .476-.213.476-.468V.469C20.986.209 20.772 0 20.51 0Z" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section
      data-services-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-black px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[1481px]:flex-nowrap"
      aria-labelledby="services-heading"
    >
      <div
        data-services-boxed
        className="relative flex w-full flex-col min-[769px]:px-[10px]"
      >
        <div
          data-services-inner
          className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]"
        >
          <div
            data-services-eyebrow
            className="relative flex w-full flex-row-reverse flex-wrap-reverse items-center justify-center gap-[20px] min-[768px]:flex-nowrap"
          >
            <div
              data-services-eyebrow-divider
              className="flex min-w-0 flex-1 py-[8px]"
              aria-hidden="true"
            >
              <span
                data-services-eyebrow-line
                className="flex w-full border-t border-[rgba(230,230,230,0.41)]"
              />
            </div>
            <div
              data-services-eyebrow-item
              className="relative flex shrink-0 items-center"
            >
              <EyebrowSquare />
              <span
                data-services-eyebrow-text
                className="block pl-[5px] font-archivo text-[13px] leading-[1.5] font-semibold tracking-[0.39px] text-white uppercase min-[501px]:text-[15px] min-[501px]:tracking-[0.45px]"
              >
                Our website development services
              </span>
            </div>
          </div>

          <div
            data-services-heading-widget
            className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-1/2"
          >
            <h2
              id="services-heading"
              data-services-heading
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-white min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Not just a website.{" "}
              <span data-services-heading-muted className="text-[#a9a9a9]">
                A website that wins business.
              </span>
            </h2>
          </div>

          <p
            data-services-intro
            className="m-0 w-full font-inter text-[16px] leading-[24px] font-normal tracking-[0.1px] text-[#cccccc] min-[501px]:w-[60%] min-[769px]:w-[45%]"
          >
            Strategy, design and development working together for one goal:
            turning visitors into customers.
          </p>

          <div
            data-services-grid
            className="relative grid w-full grid-cols-1 grid-rows-[repeat(2,1fr)] gap-0 pt-[25px] min-[501px]:grid-cols-2 min-[769px]:grid-cols-3"
          >
            {services.map((service, index) => (
              <article
                data-service-card
                className={`group relative flex flex-col flex-wrap gap-[10px] border-[#333333] bg-black p-[30px] transition-[background-color] duration-500 hover:bg-[#4242428a] min-[768px]:flex-nowrap ${cardBorders[index]}`}
                key={service.number}
              >
                <p
                  data-service-number
                  aria-hidden="true"
                  className="m-0 font-archivo text-[34px] leading-[1.4] font-extrabold tracking-[1.02px] text-black [-webkit-text-stroke:1.5px_#4e4e4e] group-hover:[-webkit-text-stroke-color:#ff3d00]"
                >
                  {service.number}
                </p>
                <h3
                  data-service-title
                  className="m-0 font-archivo text-[19px] leading-[1.4] font-bold tracking-[0.57px] text-white"
                >
                  {service.title}
                </h3>
                <p
                  data-service-description
                  className="m-0 font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-[#c4c4c4]"
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
