const trustItems = [
  "Custom-built websites",
  "Conversion-focused design",
  "SEO & Google Ads-ready",
  "Fast & mobile-first",
];

function TrustCheckIcon() {
  return (
    <span
      data-trust-strip-icon
      className="relative flex w-[17.5px] shrink-0"
      aria-hidden="true"
    >
      <svg
        className="mr-[3.5px] block h-[14px] w-[14px] fill-[#ff3d00]"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    </span>
  );
}

export function TrustStrip() {
  return (
    <section
      data-trust-strip
      className="relative flex w-full max-w-full flex-col gap-[20px] bg-black"
      aria-label="Website development advantages"
    >
      <div
        data-trust-strip-boxed
        className="relative mx-auto flex w-[calc(100%_-_40px)] flex-col min-[501px]:w-full"
      >
        <div
          data-trust-strip-inner
          className="mx-auto flex w-full max-w-[767px] grow flex-col flex-wrap gap-[20px] py-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[501px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]"
        >
          <div
            data-trust-strip-widget
            className="relative block w-full max-w-full"
          >
            <ul
              data-trust-strip-list
              className="-mx-[15px] m-0 flex list-none flex-wrap justify-start p-0 min-[501px]:justify-center min-[1025px]:-mx-[45px]"
            >
              {trustItems.map((item, index) => (
                <li
                  data-trust-strip-item
                  className="relative mx-[15px] flex w-[42%] items-center justify-start min-[768px]:w-auto min-[1025px]:mx-[45px]"
                  key={item}
                >
                  <TrustCheckIcon />
                  <span
                    data-trust-strip-text
                    className="block pl-[5px] font-archivo text-[13px] leading-[1.7] font-bold tracking-[0.39px] text-white min-[501px]:leading-[1.5]"
                  >
                    {item}
                  </span>
                  {index < trustItems.length - 1 ? (
                    <span
                      className="hidden h-full w-px shrink-0 border-l border-[#dddddd] min-[768px]:relative min-[768px]:left-[15px] min-[768px]:block min-[1025px]:left-[45px]"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
