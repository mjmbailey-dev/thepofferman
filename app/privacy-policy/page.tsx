import PageSection from "@/components/layouts/PageSection";
import Link from "next/link";

const sections = [
  {
    title: "Information we collect",
    body:
      "We only gather details that help us run our business and communicate with you, such as contact details you share when placing an order or subscribing, preferences you set in cookies, and technical data about how you browse the site.",
    points: [
      "Contact details you provide directly (name, email, phone, and delivery or billing details).",
      "Interaction records like inquiries, bookings, or feedback you submit to us.",
      "Messages you send through our forms are delivered to us via email and are not stored in a site database.",
      "Device and usage data (IP address, browser type, pages visited) captured through analytics.",
      "Cookie and preference data used to remember your choices and improve your experience."
    ]
  },
  {
    title: "How we use your information",
    body:
      "Your data helps us serve you better, keep our operations running smoothly, and share updates you actually care about.",
    points: [
      "Providing services you request, including processing orders, event bookings, and support.",
      "Personalising offers, rewards, and recommendations based on your preferences.",
      "Improving our website, menu, and customer experience through analytics and feedback.",
      "Sending service messages (like confirmations) and, with your consent, marketing updates you can opt out of anytime."
    ]
  },
  {
    title: "Sharing and disclosure",
    body:
      "We do not sell your personal information. We only share it with trusted partners who help us operate, and only when necessary.",
    points: [
      "Service providers like payment processors, analytics, hosting, and email platforms who act on our instructions.",
      "Legal or safety requirements if we must comply with the law or protect our rights and those of our customers.",
      "Business changes, such as a merger or acquisition, where your data would remain protected under this policy."
    ]
  },
  {
    title: "Cookies and preferences",
    body:
      "We use cookies to keep the site running, remember your settings, and understand how visitors use our pages.",
    points: [
      "Essential cookies keep the site secure and functional and cannot be turned off.",
      "Performance and analytics cookies help us improve these are optional and based on your consent.",
      "You can update your cookie choices anytime in our ",
    ]
  },
  {
    title: "Data retention and security",
    body:
      "We keep your information only as long as we need it for the purposes outlined here or as required by law, and we use administrative, technical, and physical safeguards to protect it.",
    points: [
      "Form submissions live in our email inbox and are not stored elsewhere on the website.",
      "Access to personal data is limited to team members and vendors who need it to perform their roles.",
      "We regularly review what we store and delete or anonymise data once it is no longer needed.",
      "While no system is perfect, we work to prevent unauthorised access, misuse, or loss."
    ]
  },
  {
    title: "Your choices",
    body:
      "You remain in control of how we use your information.",
    points: [
      "Opt out of marketing emails at any time using the unsubscribe link in our messages.",
      "Update or correct your details by contacting us with the request.",
      "Disable non-essential cookies or change preferences in the cookie settings page and your browser.",
      "Request access to, or deletion of, your personal information where applicable."
    ]
  },
  {
    title: "Contact us",
    body:
      "Questions or requests? We are here to help and to keep you informed about how we handle your data.",
    points: [
      "Reach out through our usual contact channels or when you see us at events and markets.",
      "Include any details we need to locate your account or prior communications so we can respond quickly.",
      <Link className="link" href="mailto:info@pofferman.com.au">Email us @ info@pofferman.com.au</Link>
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-foreground mt-20">
      <PageSection className="text-center">
          <p className="subtext uppercase tracking-[0.2em]">Privacy policy</p>
          <h1>How We Handle Your Information</h1>
          <p className="lead text-center">
            We collect only what we need to serve fresh poffertjes, improve your experience, and
            keep you in the loop always with transparency and respect for your choices.
          </p>
          <span className="text-sm md:text-base text-muted-foreground">Last updated: 09 Dec 2025</span>
        </PageSection>

      <PageSection>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-card p-6 shadow-md space-y-3">
              <h3>Your trust matters</h3>
              <p>
                We built this page to explain clearly what we collect, why we collect it, and how you
                can stay in control. If anything here is unclear, please let us know.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-md space-y-3">
              <h3>Quick highlights</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>No selling of your personal data.</li>
                <li>Only essential sharing with trusted providers who support our services.</li>
                <li>Clear choices for marketing and cookies.</li>
                <li>Security practices designed to protect your information.</li>
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
                      {section.title === "Cookies and preferences" && index === 2 ? (
                        <>
                          {point}
                          <Link className="ml-1 link" href="/cookies-settings">
                            cookies settings
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
