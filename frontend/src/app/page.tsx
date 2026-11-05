import { BenefitsSection } from "@/components/benefits-section";
import { ConsultationModal } from "@/components/consultation-modal";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProblemsSection } from "@/components/problems-section";
import { ProcessSection } from "@/components/process-section";
import { ReviewCtaSection } from "@/components/review-cta-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TransformationSection } from "@/components/transformation-section";
import { TrustStrip } from "@/components/trust-strip";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Business Website Development",
      provider: {
        "@type": "Organization",
        name: "Itype Design",
        url: "https://itypedesigns.com/",
        telephone: "+91 9898754737",
        email: "sales@itype.design",
      },
      areaServed: ["India", "Australia", "United States", "United Kingdom"],
      url: "https://itypedesigns.com/service-based-website-development-company/",
      description:
        "Professional, SEO-ready business websites built to turn visitors into enquiries.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        [
          "How much does website development cost?",
          "It depends on the number of pages, design needs, features and integrations. After a free consultation, you get a clear, fixed quote before any work begins, with no hidden costs.",
        ],
        [
          "How long does it take to build a website?",
          "Most business websites take 4 to 8 weeks from approved plan to launch. Larger custom builds take longer. We’ll give you a timeline with your quote.",
        ],
        [
          "Can you redesign my existing website?",
          "Yes. We review what’s working, fix what isn’t and rebuild it to bring in more enquiries, keeping your SEO rankings protected during the move.",
        ],
        [
          "Will my website work with Google Ads and SEO?",
          "Yes. Every site is built with SEO basics, fast load times and ad-ready landing pages to help you rank and lower your cost per lead.",
        ],
        [
          "Can you connect my CRM and enquiry forms?",
          "Yes. We connect forms to your CRM, email or WhatsApp so every lead reaches the right person quickly.",
        ],
        [
          "What happens on the free consultation?",
          "A 30-minute call to understand your business, review your current site and recommend the right approach. No sales pressure, just clear advice.",
        ],
      ].map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ProblemsSection />
        <ServicesSection />
        <ReviewCtaSection />
        <BenefitsSection />
        <ProcessSection />
        <TransformationSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <ConsultationModal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
