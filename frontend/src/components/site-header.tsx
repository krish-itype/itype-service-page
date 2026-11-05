import Image from "next/image";
import { ConsultationTrigger } from "@/components/consultation-trigger";

const basePath = "/service-based-website-development-company";

const headerClass =
  "relative z-20 w-full overflow-hidden min-[501px]:overflow-visible";

const shellClass = "w-full bg-white px-[2%] min-[501px]:px-0";

const innerClass =
  "mx-auto flex w-[95%] items-center justify-between gap-5 pt-[4%] pb-[3%] " +
  "min-[501px]:w-[95%] min-[501px]:py-[3%] " +
  "min-[769px]:w-[90%] min-[769px]:py-[0.8%] min-[1025px]:w-[80%] min-[1481px]:w-[65%]";

const brandClass =
  "flex w-[30%] basis-[30%] shrink flex-col items-start justify-center p-0 " +
  "min-[501px]:w-[20%] min-[501px]:basis-[20%] min-[1025px]:w-[25%] min-[1025px]:basis-[25%]";

const brandLinkClass =
  "block w-full focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black";

const logoClass =
  "inline-block h-auto w-full max-w-full align-middle min-[501px]:w-[73%] min-[1025px]:w-[36%]";

const actionsClass =
  "flex w-[60%] basis-[60%] shrink flex-col flex-nowrap items-end justify-end gap-0 " +
  "min-[501px]:w-[75%] min-[501px]:basis-[75%] min-[501px]:flex-row min-[501px]:flex-wrap min-[501px]:items-center min-[501px]:gap-[25px] " +
  "min-[501px]:max-[599px]:gap-y-[27px] " +
  "min-[769px]:w-full min-[769px]:flex-1 min-[769px]:basis-full";

const phoneClass =
  "hidden items-center gap-[10px] whitespace-nowrap p-0 font-archivo text-[16px] leading-[1.5] font-bold tracking-[0.1px] text-black no-underline fill-black " +
  "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black min-[501px]:inline-flex min-[599px]:-translate-y-px";

const consultationClass =
  "inline-block rounded-none border-0 bg-[#fe3100] p-[10px] text-center font-archivo text-[15px] leading-[1.5] font-semibold tracking-[0.1px] text-white no-underline transition-none " +
  "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-black " +
  "min-[501px]:px-[24px] min-[501px]:py-[12px] min-[501px]:text-[16px] min-[1481px]:text-[12.8px]";

export function SiteHeader() {
  return (
    <header className={headerClass}>
      <div className={shellClass}>
        <div className={innerClass}>
          <div className={brandClass}>
            <a
              className={brandLinkClass}
              href={`${basePath}/`}
              aria-label="Itype Design service website development page"
            >
              <Image
                className={logoClass}
                src={`${basePath}/assets/logo-black.webp`}
                width={2560}
                height={881}
                alt="Itype"
                priority
              />
            </a>
          </div>

          <div className={actionsClass}>
            <a className={phoneClass} href="tel:+919898754737">
              <svg
                className="h-[1em] w-[1em] flex-none"
                aria-hidden="true"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <span>+91 9898754737</span>
            </a>

            <ConsultationTrigger
              className={consultationClass}
              source="header"
            >
              Book a Free Consultation
            </ConsultationTrigger>
          </div>
        </div>
      </div>
    </header>
  );
}
