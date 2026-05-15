import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last updated: [Insert date]
          </p>

          <Section title="Overview">
            These Terms and Conditions ("Terms") govern your use of Zemsto’s
            website, applications, and related services (the "Service"). By
            accessing or using the Service, you agree to be legally bound by
            these Terms. If you do not agree, you must discontinue use
            immediately.
          </Section>

          <Section title="1. Use of Services">
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You must not misuse the Service,
            attempt unauthorized access, disrupt system integrity, or interfere
            with other users’ experience.
          </Section>

          <Section title="2. User Accounts">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account. You
            agree to provide accurate and complete information and notify us
            immediately of any unauthorized access.
          </Section>

          <Section title="3. Payments & Transactions">
            Zemsto provides digital payment infrastructure. By using our
            platform, you agree to comply with applicable financial and payment
            regulations. Zemsto is not responsible for losses arising from
            incorrect payment information or unauthorized use of your account.
          </Section>

          <Section title="4. Intellectual Property">
            All content, trademarks, branding, software, and technology are the
            exclusive property of Zemsto and protected by intellectual property
            laws. You may not reproduce, distribute, modify, or create
            derivative works without prior written consent.
          </Section>

          <Section title="5. Prohibited Activities">
            You agree not to:
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Use the Service for fraudulent or harmful activities</li>
              <li>Attempt to reverse engineer or exploit the platform</li>
              <li>Upload malicious software or harmful content</li>
            </ul>
          </Section>

          <Section title="6. Limitation of Liability">
            To the fullest extent permitted by law, Zemsto shall not be liable
            for indirect, incidental, special, or consequential damages
            resulting from the use or inability to use the Service. We do not
            guarantee uninterrupted or error‑free operation.
          </Section>

          <Section title="7. Termination">
            We reserve the right to suspend or terminate your access at any time
            without notice if you violate these Terms or misuse the Service.
          </Section>

          <Section title="8. Changes to Terms">
            We may update these Terms periodically. Continued use of the Service
            after updates constitutes acceptance of the revised Terms.
          </Section>

          <Section title="9. Governing Law">
            These Terms shall be governed and interpreted in accordance with
            applicable laws, without regard to conflict of law principles.
          </Section>

          <Section title="10. Contact Us">
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
