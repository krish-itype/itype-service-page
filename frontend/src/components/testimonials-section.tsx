"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    company: "Global Power Solutions",
    quote:
      "We are extremely happy with the website developed for our company. The design is modern, professional, and easy to navigate, while effectively communicating our services and capabilities. The team was knowledgeable, reliable, and easy to work with throughout the project. We would definitely recommend their services to other businesses.",
  },
  {
    company: "Elevate Psych",
    quote:
      "ITYPE made me a beautiful website and they were communicative all along the way. I got what I wanted and more as they were able to adapt to the needs of my business throughout the process. Their work is high quality and well worth it. Highly recommend!",
  },
  {
    company: "TreyBridge",
    quote:
      "We had a great experience working with the website design team. They took the time to understand our business and translated our vision into a professional, modern website. The communication throughout the project was excellent, and we are very pleased with the final result. We would highly recommend their website design and development services.",
  },
  {
    company: "AxisPeak Capital",
    quote:
      "Working with the website design agency was an excellent experience. They created a sophisticated and professional website that represents our brand and services extremely well. The team was responsive, creative, and attentive to our requirements throughout the entire process. We are very happy with the outcome and would confidently recommend them.",
  },
  {
    company: "Goldstone Consulting",
    quote:
      "We are very pleased with the website created for our business. The team understood our requirements and developed a clean, professional, and user-friendly website that makes our services much easier to present to potential clients. Their professionalism, attention to detail, and support throughout the project were outstanding.",
  },
  {
    company: "McCray Global Protection",
    quote:
      "Our experience with the website design agency was excellent from start to finish. They delivered a strong, professional website that reflects our company's brand, services, and global presence. The team was creative, responsive, and committed to getting every detail right. We highly recommend them to any business looking for a professional website.",
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
          Client reviews
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(2);
  const pointerStart = useRef<number | null>(null);
  const testimonial = testimonials[active];

  function show(index: number) {
    setActive((index + testimonials.length) % testimonials.length);
  }

  return (
    <section
      data-testimonials-section
      className="relative flex w-full max-w-full flex-col flex-wrap gap-[20px] bg-[#f4f4f2] px-[20px] py-[50px] min-[501px]:px-0 min-[501px]:py-[88px] min-[768px]:flex-nowrap"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative flex w-full flex-col min-[769px]:px-[10px]">
        <div className="mx-auto flex w-full max-w-[767px] flex-col flex-wrap gap-[20px] min-[501px]:w-[95%] min-[501px]:max-w-[95%] min-[768px]:flex-nowrap min-[769px]:w-[90%] min-[769px]:max-w-[90%] min-[769px]:py-[10px] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <Eyebrow />

          <div className="relative block w-full max-w-full min-[501px]:w-[75%] min-[769px]:w-[65%] min-[1025px]:w-[50%]">
            <h2
              id="testimonials-heading"
              className="m-0 font-archivo text-[32px] leading-[1.06] font-extrabold tracking-[-0.3px] text-black min-[769px]:text-[42px] min-[1025px]:text-[50px]"
            >
              Businesses that trust us{" "}
              <span className="text-[#a9a9a9]">with their websites.</span>
            </h2>
          </div>

          <div
            className="relative w-full overflow-hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client reviews"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") show(active - 1);
              if (event.key === "ArrowRight") show(active + 1);
            }}
            onPointerDown={(event) => {
              pointerStart.current = event.clientX;
            }}
            onPointerUp={(event) => {
              if (pointerStart.current === null) return;
              const distance = event.clientX - pointerStart.current;
              if (Math.abs(distance) > 50) show(active + (distance < 0 ? 1 : -1));
              pointerStart.current = null;
            }}
          >
            <article
              className="flex min-h-[253px] flex-col justify-between pb-[24px] min-[769px]:min-h-[201px] min-[769px]:pb-[30px]"
              aria-live="polite"
              aria-label={`Review ${active + 1} of ${testimonials.length}`}
            >
              <blockquote className="m-0 max-w-full font-archivo text-[20px] leading-[26px] font-medium tracking-[-0.4px] text-black min-[1025px]:text-[24px] min-[1025px]:leading-[31.2px]">
                {testimonial.quote}
              </blockquote>
              <p className="m-0 font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-[#ff3d00]">
                {testimonial.company}
              </p>
            </article>

            <div className="mt-[16px] flex h-[24px] items-center justify-center gap-[10px]" aria-label="Choose a review">
              {testimonials.map((item, index) => (
                <button
                  className={`h-[6px] w-[6px] rounded-full border-0 p-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black ${
                    index === active ? "bg-black" : "bg-[#bdbdbd]"
                  }`}
                  key={item.company}
                  type="button"
                  aria-label={`Show review from ${item.company}`}
                  aria-current={index === active ? "true" : undefined}
                  onClick={() => show(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
