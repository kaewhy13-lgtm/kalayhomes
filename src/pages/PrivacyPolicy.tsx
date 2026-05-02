import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — KalayHomes";
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link
        to="/"
        className="font-sans text-xs tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors mb-8 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="font-display text-3xl md:text-4xl tracking-wide text-stone-900 mb-4">
        Privacy Policy
      </h1>
      <p className="font-sans text-sm text-stone-500 mb-12">
        Last updated: May 2, 2025
      </p>

      <div className="prose-stone space-y-8 font-sans text-sm leading-relaxed text-stone-700">
        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">1. Information We Collect</h2>
          <p>
            When you visit KalayHomes or make a purchase, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, shipping and billing address, phone number, and payment details when you place an order.</li>
            <li><strong>Account Information:</strong> Email and password if you create an account.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages viewed, time spent, and device/browser information.</li>
            <li><strong>Cookies:</strong> Small text files stored on your device to improve your browsing experience. See Section 5 for details.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and provide customer support</li>
            <li>Send promotional communications (only with your consent)</li>
            <li>Improve our website, products, and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">3. How We Share Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your data with:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Payment Processors:</strong> To securely process transactions.</li>
            <li><strong>Shipping Partners:</strong> To deliver your orders.</li>
            <li><strong>Analytics Providers:</strong> To understand website usage (anonymized data).</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information, including SSL encryption for all data transmissions. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Access, correct, or delete your personal data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of the data we hold about you</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:support@kalayhomes.com" className="text-stone-900 underline hover:text-[#E7A823] transition-colors">
              support@kalayhomes.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">7. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order data is retained for a minimum of 5 years for tax and legal compliance.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">9. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at:{" "}
            <a href="mailto:support@kalayhomes.com" className="text-stone-900 underline hover:text-[#E7A823] transition-colors">
              support@kalayhomes.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
