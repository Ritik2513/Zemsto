import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  py-16 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: [Insert date]
          </p>

          <Section title="Overview">
            Zemsto ("we", "our", or "us") values your privacy and is committed
            to protecting your personal data. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you
            use our website, applications, and related services (the "Service").
            By using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </Section>

          <Section title="1. Information We Collect">
            <SubTitle>Personal Information</SubTitle>
            <ul className="list-disc ml-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Account credentials (if applicable)</li>
              <li>Information you provide when contacting us</li>
            </ul>
            <SubTitle>Usage & Technical Data</SubTitle>
            <ul className="list-disc ml-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and interactions</li>
              <li>Diagnostic and analytics data</li>
            </ul>
            <SubTitle>Cookies</SubTitle>
            We may use cookies and similar technologies to improve
            functionality, analyze usage, and remember preferences. You may
            disable cookies in your browser settings.
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide and maintain the Service</li>
              <li>Improve and personalize user experience</li>
              <li>Communicate updates and provide support</li>
              <li>Detect fraud and maintain security</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3 font-medium">
              We do not sell or rent your personal data.
            </p>
          </Section>

          <Section title="3. Legal Basis for Processing">
            Where required by law, we process personal data based on consent,
            contractual necessity, legal obligations, and legitimate business
            interests.
          </Section>

          <Section title="4. Data Sharing">
            We may share information with trusted service providers, legal
            authorities when required, or during business transfers such as
            mergers or acquisitions.
          </Section>

          <Section title="5. Data Retention">
            We retain data only as long as necessary to provide services, comply
            with legal obligations, and resolve disputes.
          </Section>

          <Section title="6. Data Security">
            We implement appropriate safeguards to protect your data. However,
            no internet transmission is completely secure.
          </Section>

          <Section title="7. Your Privacy Rights">
            You may request access, correction, deletion, restriction, or
            portability of your personal data and withdraw consent at any time.
          </Section>

          <Section title="8. Children's Privacy">
            Our Service is not intended for children under 13. We do not
            knowingly collect data from children.
          </Section>

          <Section title="9. Third‑Party Links">
            We are not responsible for privacy practices of external sites
            linked from our Service.
          </Section>

          <Section title="10. Policy Updates">
            We may update this policy periodically. Continued use of the Service
            means you accept the updated policy.
          </Section>

          <Section title="11. Contact Us">
            <p>
              Email: <span className="font-medium">info@zemsto.com</span>
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 text-slate-800">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function SubTitle({ children }) {
  return <h3 className="font-semibold text-slate-700 mt-4">{children}</h3>;
}
