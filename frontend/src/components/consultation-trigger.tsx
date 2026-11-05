"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

export const CONSULTATION_MODAL_EVENT = "itype:open-consultation";

type ConsultationTriggerProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  source: string;
};

export function ConsultationTrigger({
  children,
  className,
  source,
  ...anchorProps
}: ConsultationTriggerProps) {
  function openModal(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const analyticsWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };
    analyticsWindow.dataLayer?.push({
      event: "consultation_modal_open",
      cta_source: source,
    });
    window.dispatchEvent(
      new CustomEvent(CONSULTATION_MODAL_EVENT, { detail: { source } }),
    );
  }

  return (
    <a
      {...anchorProps}
      className={className}
      href="#consultation"
      onClick={openModal}
    >
      {children}
    </a>
  );
}
