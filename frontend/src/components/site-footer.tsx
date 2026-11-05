import Image from "next/image";
import { ConsultationTrigger } from "@/components/consultation-trigger";

const basePath = "/service-based-website-development-company";

const developmentServices = [
  "Website Development Services",
  "Business Website Development",
  "Custom Website Development",
  "Company Website Design",
  "Website Redesign",
  "Landing Page Development",
  "E-commerce Website Development",
  "Responsive Web Design",
] as const;

const solutions = [
  "Small Business Websites",
  "Service Business Websites",
  "B2B Websites",
  "Manufacturing Businesses",
  "Industrial Companies",
  "IT & SaaS Companies",
  "Logistics & 3PL Companies",
  "Construction & Engineering",
  "Professional Services",
  "Technology Companies",
] as const;

const markets = ["India", "Australia", "USA", "UK"] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="m-0 font-archivo text-[16px] leading-[24px] font-bold tracking-[-0.1px] text-white">
        {children}
      </h2>
      <span className="block h-[2px] w-[50px] bg-[#ff3d00]" aria-hidden="true" />
    </>
  );
}

function FooterList({ items }: { items: readonly string[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li
          className="mb-[8px] font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-white last:mb-0"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-[28px] w-[28px] fill-white" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="relative w-full bg-black px-[20px] min-[501px]:px-0">
        <div className="mx-auto w-full max-w-[767px] pt-[60px] pb-[15px] min-[501px]:w-[90%] min-[501px]:max-w-[90%] min-[1025px]:w-[80%] min-[1025px]:max-w-[80%] min-[1481px]:w-[65%] min-[1481px]:max-w-[65%]">
          <div className="flex w-full flex-row flex-wrap gap-x-[20px] gap-y-[30px] min-[1025px]:flex-nowrap min-[1025px]:gap-[30px]">
            <div className="flex min-h-[191.594px] w-full min-w-0 flex-col flex-wrap gap-[15px] min-[501px]:min-h-0 min-[768px]:flex-nowrap min-[1025px]:w-[25%] min-[1025px]:shrink">
              <Image
                className="h-auto w-[25%] min-[501px]:w-[16%] min-[1025px]:w-[44%]"
                src={`${basePath}/assets/logo-white.webp`}
                width={2560}
                height={881}
                alt="Itype"
                loading="eager"
              />
              <p className="m-0 font-archivo text-[14px] leading-[24px] font-bold tracking-[-0.1px] text-white">
                Website Development Company Building Websites That Generate Leads
              </p>
              <p className="m-0 font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-[rgba(255,255,255,0.94)]">
                We design and develop professional websites for businesses, helping them attract the right visitors, explain their value clearly and turn traffic into enquiries.
              </p>
            </div>

            <div className="flex min-h-[291.203px] w-full min-w-0 flex-col flex-wrap gap-[20px] min-[501px]:min-h-[358.406px] min-[501px]:w-[48%] min-[768px]:min-h-[433.203px] min-[768px]:w-[30%] min-[768px]:flex-nowrap min-[1025px]:min-h-0 min-[1025px]:w-[25%] min-[1025px]:shrink">
              <FooterHeading>Website Development Service</FooterHeading>
              <FooterList items={developmentServices} />
            </div>

            <div className="flex min-h-[349.203px] w-full min-w-0 flex-col flex-wrap gap-[20px] min-[501px]:min-h-[358.406px] min-[501px]:w-[47%] min-[768px]:min-h-[433.203px] min-[768px]:w-[25%] min-[768px]:flex-nowrap min-[1025px]:min-h-0 min-[1025px]:w-[22%] min-[1025px]:shrink">
              <FooterHeading>Solutions</FooterHeading>
              <FooterList items={solutions} />
            </div>

            <div className="flex min-h-[175.203px] w-full min-w-0 flex-col flex-wrap gap-[20px] min-[501px]:min-h-[209.203px] min-[501px]:w-[48%] min-[768px]:min-h-[433.203px] min-[768px]:w-[12%] min-[768px]:flex-nowrap min-[1025px]:min-h-0 min-[1025px]:w-[12%] min-[1025px]:shrink">
              <FooterHeading>Markets</FooterHeading>
              <FooterList items={markets} />
            </div>

            <div className="flex min-h-[185.203px] w-full min-w-0 flex-col flex-wrap gap-[20px] min-[501px]:min-h-[209.203px] min-[501px]:w-[47%] min-[768px]:min-h-[433.203px] min-[768px]:w-[24%] min-[768px]:flex-nowrap min-[1025px]:min-h-0 min-[1025px]:w-[15%] min-[1025px]:shrink">
              <FooterHeading>Contact Info</FooterHeading>
              <div className="flex flex-col gap-[8px] font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-white">
                <p className="m-0">Ready to turn your website into a B2B lead-generation channel?</p>
                <a className="text-white no-underline focus-visible:outline-2 focus-visible:outline-white" href="mailto:sales@itype.design">
                  sales@itype.design
                </a>
                <a className="text-white no-underline focus-visible:outline-2 focus-visible:outline-white" href="tel:+919898754737">
                  +91 9898754737
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[30px] h-px w-full bg-[#333]" aria-hidden="true" />
          <p className="mt-[15px] mb-0 font-inter text-[14px] leading-[21px] font-normal tracking-[0.1px] text-white min-[501px]:text-center">
            © 2026 ITYPE. All rights reserved. | Professional website design services for businesses.
          </p>
        </div>
      </footer>

      <div className="fixed right-0 bottom-0 left-0 z-40 flex min-h-[85px] flex-col justify-center border-t border-[#d4d4d4] bg-white px-[20px] min-[769px]:min-h-[95px] min-[1025px]:hidden">
        <div className="grid grid-cols-2 gap-[10px]">
          <ConsultationTrigger
            className="bg-[#ff3d00] px-[10px] py-[13px] text-center font-archivo text-[13px] leading-[19.5px] font-bold text-white"
            source="mobile-footer"
          >
            Get My Free Quote
          </ConsultationTrigger>
          <a
            className="bg-black px-[10px] py-[13px] text-center font-archivo text-[13px] leading-[19.5px] font-bold text-white no-underline"
            href="tel:+919898754737"
          >
            Talk to Us
          </a>
        </div>
      </div>

      <a
        className="fixed right-[14px] bottom-[105px] z-30 grid h-[50px] w-[50px] place-items-center rounded-full bg-[#25d366] shadow-[0_2px_10px_rgba(0,0,0,0.25)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black min-[501px]:right-[20px] min-[769px]:bottom-[115px] min-[1025px]:bottom-[20px]"
        href="https://wa.me/919898754737"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Itype on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
