import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service — KalayHomes";
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
        Terms of Service
      </h1>
      <p className="font-sans text-sm text-stone-500 mb-12">
        Last updated: May 2, 2025
      </p>

      <div className="prose-stone space-y-8 font-sans text-sm leading-relaxed text-stone-700">
        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the KalayHomes website (kalayhomes.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">2. Products & Pricing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All products are handcrafted and may have slight variations in color, size, and texture. These variations are a hallmark of artisanal quality and are not considered defects.</li>
            <li>Prices are listed in INR and are subject to change without notice.</li>
            <li>We reserve the right to limit quantities and refuse any order at our discretion.</li>
            <li>Product images are for illustration purposes and may differ slightly from the actual item.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">3. Orders & Payment</h2>
          <p>
            When you place an order, you are making an offer to purchase. We reserve the right to accept or decline your order. Payment must be received in full before your order is shipped. We accept major credit cards, debit cards, and UPI.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">4. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Shipping times are estimates and not guaranteed delivery dates.</li>
            <li>Risk of loss and title for items pass to you upon delivery to the carrier.</li>
            <li>We are not responsible for delays caused by shipping carriers, customs, or force majeure events.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">5. Returns & Exchanges</h2>
          <p>
            We accept returns within 14 days of delivery for unused items in their original packaging. Custom or personalized items are non-returnable. Shipping costs for returns are the responsibility of the buyer unless the item is defective or incorrect.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">6. Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos, product designs, and branding — is the intellectual property of KalayHomes and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">7. Limitation of Liability</h2>
          <p>
            KalayHomes shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site or purchase of products. Our total liability shall not exceed the amount paid by you for the specific product giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">8. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the site</li>
            <li>Interfere with or disrupt the website or its servers</li>
            <li>Scrape or collect data from the site without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the site after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-stone-900 mb-3">11. Contact</h2>
          <p>
            For any questions regarding these terms, please reach out to us at{" "}
            <a href="mailto:support@kalayhomes.com" className="text-stone-900 underline hover:text-[#E7A823] transition-colors">
              support@kalayhomes.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
