"use client";

import { FormEvent, useState } from "react";

const budgetOptions = [
  "Rs. 20,000 - Rs. 40,000",
  "Rs. 40,000 - Rs. 60,000",
  "Rs. 60,000 - Rs. 1,20,000",
  "More than Rs. 1,20,000",
] as const;

const fieldClass =
  "h-[40px] w-full rounded-none border border-[#d8d8d8] bg-[rgba(233,233,233,0.41)] font-jakarta text-[14px] leading-[21px] font-medium tracking-[0.42px] text-black outline-none placeholder:text-black placeholder:opacity-60 focus-visible:border-black focus-visible:ring-1 focus-visible:ring-black";
const groupClass = "mb-[20px] flex w-full flex-col items-stretch px-[10px]";
const labelClass =
  "w-full pb-[7px] font-archivo text-[12px] leading-[1.2] font-semibold tracking-[0.36px] text-black uppercase min-[769px]:leading-[1.6]";

type LeadFormProps = {
  formId: string;
  source: string;
  submitLabel: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

export function LeadForm({ formId, source, submitLabel }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  function track(event: string) {
    const analyticsWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };
    analyticsWindow.dataLayer?.push({ event, form_source: source });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("unconfigured");
      track("consultation_form_unconfigured");
      return;
    }

    setStatus("submitting");
    track("consultation_form_submit");
    const payload = new FormData(form);
    payload.set("source", source);
    payload.set("page_url", window.location.href);
    const query = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = query.get(key);
      if (value) payload.set(key, value);
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("The enquiry service did not accept the request.");
      form.reset();
      setStatus("success");
      track("consultation_form_success");
    } catch {
      setStatus("error");
      track("consultation_form_error");
    }
  }

  const message =
    status === "success"
      ? "Thank you. Your enquiry has been sent and our team will contact you shortly."
      : status === "error"
        ? "We could not send your enquiry. Please try again or call +91 9898754737."
        : status === "unconfigured"
          ? "Online delivery is being configured. Please call +91 9898754737 for now."
          : "";

  return (
    <form
      className="w-full"
      onSubmit={submit}
      aria-label="Book a free consultation"
      noValidate
    >
      <div className="-mx-[10px] -mb-[20px] flex flex-wrap">
        <div className={`${groupClass} min-[501px]:w-1/2`}>
          <label className={labelClass} htmlFor={`${formId}-name`}>
            Name
          </label>
          <input
            className={`${fieldClass} px-[16px] py-[8px]`}
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className={`${groupClass} min-[501px]:w-1/2`}>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            {source === "hero" ? "Email" : "Work Email"}
          </label>
          <input
            className={`${fieldClass} px-[16px] py-[8px]`}
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </div>

        <div className={groupClass}>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone / WhatsApp
          </label>
          <input
            className={`${fieldClass} px-[16px] py-[8px]`}
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 52165 51561"
            required
          />
        </div>

        <div className={groupClass}>
          <label className={labelClass} htmlFor={`${formId}-budget`}>
            Budget
          </label>
          <div className="relative w-full">
            <select
              className={`${fieldClass} block appearance-none py-[5px] pr-[20px] pl-[14px]`}
              id={`${formId}-budget`}
              name="budget"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Choose A Range
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-[9px] h-[12px] w-[12px] -translate-y-1/2 fill-black"
              aria-hidden="true"
              viewBox="0 0 10 6"
            >
              <path d="M0 0h10L5 6z" />
            </svg>
          </div>
        </div>

        <div className={`${groupClass} items-stretch`}>
          <button
            className="w-full rounded-none border-0 bg-[#f53101] p-[15px] font-archivo text-[16px] leading-[24px] font-bold tracking-[0.1px] text-white transition-none hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-wait disabled:opacity-70"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : submitLabel}
          </button>
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor={`${formId}-company`}>Company website</label>
          <input id={`${formId}-company`} name="company_website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {message ? (
        <p
          className={`mt-[18px] mb-0 font-inter text-[13px] leading-[19.5px] ${
            status === "success" ? "text-[#176a35]" : "text-[#9b1c1c]"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
