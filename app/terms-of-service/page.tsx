import PageSection from "@/components/layouts/PageSection";
import Link from "next/link";

const sections = [
  {
    title: "Accepting these terms",
    body:
      "By visiting our site, placing a catering order, or booking our market stall, you agree to these terms and the policies we link here.",
    points: [
      "You must be at least 18 or have permission from a parent or guardian to use our services.",
      "If you book on behalf of a business or event, you confirm you are authorised and that entity also accepts these terms.",
      "We may update these terms from time to time; the updated date will be noted and continued use means you accept the changes."
    ]
  },
  {
    title: "Using our site",
    body:
      "Use the site to browse menus, request quotes, and confirm bookings. We work to keep information accurate and available.",
    points: [
      "Menu items, pricing, and availability can change based on season, supply, and event requirements.",
      "We may add, remove, or pause parts of the site to maintain quality or security.",
      "Do not attempt to disrupt, test, or reverse engineer the site or any related systems."
    ]
  },
  {
    title: "Bookings, deposits, and payments",
    body:
      "We want booking and payment to be clear so events run smoothly.",
    points: [
      "A booking is confirmed only when we provide written confirmation (for example, by email) and, where required, receive a deposit.",
      "Prices include applicable taxes and fees where shown; payments are processed through trusted providers subject to their terms.",
      "If we cannot fulfil a booking, we will let you know and offer a refund or alternative where required by law."
    ]
  },
  {
    title: "Cancellations and changes",
    body:
      "Plans shift. We outline how changes are handled so we can plan staff and stock.",
    points: [
      "Please give as much notice as possible for changes to guest counts, timing, or location.",
      "Deposits may be non-refundable within the notice window stated in your confirmation unless required by law.",
      "Severe weather, safety concerns, or access issues may require us to adjust service; we will work with you on alternatives."
    ]
  },
  {
    title: "Event access and requirements",
    body:
      "To serve safely, we may need certain onsite conditions.",
    points: [
      "Provide suitable space, access, and any permits needed for a food stall, including power and water if required.",
      "Let us know about venue rules (loading times, parking, noise limits) that affect setup and service.",
      "You are responsible for obtaining venue approvals unless we have agreed in writing to handle them."
    ]
  },
  {
    title: "Food safety and allergens",
    body:
      "We take food safety seriously and want guests to feel informed.",
    points: [
      "Our products may contain or come into contact with common allergens such as gluten, dairy, eggs, nuts, and soy.",
      "Please share dietary requirements early; we will advise what we can accommodate and any limits.",
      "Once food is handed over or served, you are responsible for safe handling outside our control."
    ]
  },
  {
    title: "Acceptable use",
    body:
      "We want our site and services to stay safe and respectful for everyone.",
    points: [
      "Do not post or transmit anything unlawful, harmful, or infringing on others' rights.",
      "Do not use automated tools to scrape or overload the site beyond what is reasonably necessary to use our services.",
      "We may suspend or end access if these rules are breached or if needed to protect our business or users."
    ]
  },
  {
    title: "Intellectual property",
    body:
      "Our content, branding, and technology are protected. We grant you a limited licence to use the site as intended.",
    points: [
      "You may view, share, and link to the site for personal, non-commercial use, provided you do not misrepresent or modify our materials.",
      "All trademarks, logos, and content remain ours or our licensors'; no rights transfer beyond what is needed to use the site.",
      "You must not use our brand or content in a way that suggests endorsement without written permission."
    ]
  },
  {
    title: "Liability and warranties",
    body:
      "We provide the site and services using reasonable care, but some risks are outside our control.",
    points: [
      "The site and services are provided \"as is\" and \"as available\"; we do not guarantee uninterrupted or error-free access.",
      "To the fullest extent allowed by law, we exclude liability for indirect or consequential losses.",
      "Nothing in these terms limits rights you have under consumer laws or our responsibility for loss caused by our negligence where the law does not allow exclusion."
    ]
  },
  {
    title: "Indemnity and governing law",
    body:
      "If your actions cause loss or claims for us or others, you may need to cover those costs.",
    points: [
      "You agree to indemnify us for reasonable losses arising from your breach of these terms or misuse of the site, except where we cause the issue.",
      "These terms are governed by the laws of Victoria, Australia, and disputes will be handled in that jurisdiction, subject to mandatory local consumer protections.",
      "If a clause is unenforceable, the rest of the terms remain in effect."
    ]
  },
  {
    title: "Contact and feedback",
    body:
      "We want these terms to be clear and practical. Reach out anytime with questions.",
    points: [
      "Get in touch if you need clarification before placing an order or booking an event.",
      "For details on how we handle personal information, please see our ",
      <Link className="link" href="mailto:info@pofferman.com.au">Email us @ info@pofferman.com.au</Link>
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-background text-foreground mt-20">
      <PageSection className="text-center">
        <p className="subtext uppercase tracking-[0.2em]">Terms of service</p>
        <h1>Terms That Keep Things Fair</h1>
        <p className="lead text-center">
          These terms explain how we provide our market stall and event catering services so you know
          what to expect and how we keep things fair for everyone.
        </p>
        <span className="text-sm md:text-base text-muted-foreground">Last updated: 09 Dec 2025</span>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-card p-6 shadow-md space-y-3">
            <h3>Our commitment</h3>
            <p>
              We aim to be transparent about how we operate, honour consumer protections, and resolve
              issues quickly if something goes wrong.
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-md space-y-3">
            <h3>Your commitment</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Use the site responsibly and respect others' rights.</li>
              <li>Provide accurate information when requesting quotes, booking, or ordering.</li>
              <li>Reach out if you spot an error or need clarification.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3>{section.title}</h3>
              <p className="text-muted-foreground">{section.body}</p>
              <ul className="list-disc pl-5 space-y-2">
                {section.points.map((point, index) => (
                  <li key={index} className="text-foreground/80">
                    {section.title === "Contact and feedback" && index === 1 ? (
                      <>
                        For details on how we handle personal information, please see our
                        <Link className="ml-1 link" href="/privacy-policy">
                          Privacy Policy
                        </Link>
                        .
                      </>
                    ) : (
                      point
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
