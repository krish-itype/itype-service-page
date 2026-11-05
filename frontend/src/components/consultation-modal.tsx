"use client";

import { useEffect, useRef, useState } from "react";
import { CONSULTATION_MODAL_EVENT } from "@/components/consultation-trigger";
import { LeadForm } from "@/components/lead-form";

export function ConsultationModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [source, setSource] = useState("modal");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function open(event: Event) {
      const detail = (event as CustomEvent<{ source?: string }>).detail;
      setSource(detail?.source || "modal");
      dialog?.showModal();
      document.body.style.overflow = "hidden";
    }

    function unlock() {
      document.body.style.overflow = "";
    }

    window.addEventListener(CONSULTATION_MODAL_EVENT, open);
    dialog.addEventListener("close", unlock);
    return () => {
      window.removeEventListener(CONSULTATION_MODAL_EVENT, open);
      dialog.removeEventListener("close", unlock);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="m-auto w-[calc(100%_-_40px)] max-w-[560px] border-0 bg-transparent p-0 backdrop:bg-black/70"
      aria-labelledby="consultation-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="relative bg-white shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="bg-black px-[28px] pt-[26px] pb-[24px] text-white">
          <button
            className="absolute top-[14px] right-[14px] grid h-[34px] w-[34px] place-items-center text-[28px] leading-none text-white hover:text-[#ff3d00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            type="button"
            aria-label="Close consultation form"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
          <p className="m-0 inline-block bg-[#ff3d00] p-[7px] font-archivo text-[12px] leading-[1.2] font-bold tracking-[0.36px] uppercase">
            Free · No obligation
          </p>
          <h2
            id="consultation-modal-title"
            className="mt-[12px] pr-[36px] font-archivo text-[24px] leading-[1.2] font-extrabold tracking-[0.72px]"
          >
            Book a free consultation
          </h2>
          <p className="mt-[10px] mb-0 font-archivo text-[14px] leading-[21px]">
            Tell us what you need. We reply within one working day.
          </p>
        </div>
        <div className="px-[28px] pt-[26px] pb-[30px]">
          <LeadForm
            formId="modal-consultation"
            source={`modal-${source}`}
            submitLabel="Book a Free Consultation"
          />
        </div>
      </div>
    </dialog>
  );
}
