import React from "react";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";
import SEO from "@/components/SEO";
import { SITE_URL } from "@/utils/seo";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for The Reel Room — how we handle and protect your personal information when you inquire about or book our Vancouver screening room and studio rental."
        canonical={`${SITE_URL}/privacy`}
      />
      <ReelRoomNavigation />
      <main className="container mx-auto px-4 py-16 pt-32 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <p className="mb-4">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="mb-4">
            At The Reel Room, we value your privacy and are committed to protecting
            your personal data. This privacy policy explains how we collect,
            use, and safeguard your information when you use our website or book
            our private screening room and production studio rental in Vancouver, British Columbia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We collect information that you provide directly to us or that we
            generate about you when you use our services:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Personal identification information:</strong> Name, email
              address, phone number, postal address, nationality, and
              identification details (when required for booking)
            </li>
            <li className="mb-2">
              <strong>Booking information:</strong> Preferred dates and times,
              session duration, guest or crew count, event type, and payment
              information
            </li>
            <li className="mb-2">
              <strong>Communication records:</strong> Details of inquiries,
              customer service interactions, and feedback
            </li>
            <li className="mb-2">
              <strong>Technical data:</strong> IP address, browser type and
              version, time zone setting, browser plug-in types and versions,
              operating system and platform, and other technology on the devices
              you use to access our website
            </li>
            <li className="mb-2">
              <strong>Usage data:</strong> Information about how you use our
              website, including the pages you visit, the time and date of your
              visit, and the time spent on those pages
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Facilitating bookings:</strong> To process and fulfill
              your studio rental requests, manage payments, and provide
              customer support
            </li>
            <li className="mb-2">
              <strong>Personalized service:</strong> To tailor our facility
              recommendations and services to your event or production needs
            </li>
            <li className="mb-2">
              <strong>Communication:</strong> To respond to your inquiries,
              provide information about your bookings, and inform you about our
              services, special offers, and updates that may interest you
            </li>
            <li className="mb-2">
              <strong>Improvement of services:</strong> To analyze how our
              website is used, develop new features, and improve our customer
              experience
            </li>
            <li className="mb-2">
              <strong>Legal and safety reasons:</strong> To comply with legal
              obligations, resolve disputes, and enforce our agreements
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Legal Basis for Processing
          </h2>
          <p className="mb-4">
            We process your personal data based on one or more of the following
            legal grounds:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Contract performance:</strong> Processing is necessary to
              fulfill our contractual obligations to you when you book the
              studio
            </li>
            <li className="mb-2">
              <strong>Legitimate interests:</strong> Processing is necessary for
              our legitimate business interests, such as fraud prevention and
              marketing of our services
            </li>
            <li className="mb-2">
              <strong>Legal compliance:</strong> Processing is necessary to
              comply with our legal obligations
            </li>
            <li className="mb-2">
              <strong>Your consent:</strong> Where you have given us specific
              consent to process your data for particular purposes
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Share Your Information
          </h2>
          <p className="mb-4">We may share your personal information with:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Service providers:</strong> Third parties who provide
              services on our behalf, such as payment processing, website
              hosting, IT support, and marketing
            </li>
            <li className="mb-2">
              <strong>Legal authorities:</strong> When required by law, court
              order, or governmental regulation
            </li>
            <li className="mb-2">
              <strong>Production partners:</strong> In connection with providing
              you with additional services such as catering coordination,
              technical support, or other event-related services
            </li>
          </ul>
          <p className="mb-4">
            We do not sell your personal data to third parties. When we share
            data with service providers, we ensure they provide adequate
            safeguards for your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            International Transfers
          </h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries
            outside of Canada where data protection laws may be different. When
            we transfer your personal data outside Canada, we ensure a similar
            degree of protection is afforded to it by implementing appropriate
            safeguards and ensuring that the transfer complies with data
            protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="mb-4">
            We will keep your personal information for as long as necessary to
            fulfill the purposes for which we collected it, including to satisfy
            any legal, accounting, or reporting requirements. To determine the
            appropriate retention period, we consider the amount, nature, and
            sensitivity of the personal data, the potential risk of harm from
            unauthorized use or disclosure, and the applicable legal
            requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="mb-4">
            Our website uses cookies and similar tracking technologies to
            distinguish you from other users, analyze trends, administer the
            website, track user movements around the website, and gather
            demographic information about our user base as a whole. You can
            control the use of cookies at the individual browser level, but if
            you choose to disable cookies, it may limit your use of certain
            features or functions on our website.
          </p>
          <p className="mb-4">
            We use essential cookies to keep the site working, and analytics
            cookies (such as Vercel Analytics) to understand how visitors use
            the site. We do not use advertising or third-party tracking cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding
            your personal data:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <strong>Access:</strong> Request access to your personal data
            </li>
            <li className="mb-2">
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete data
            </li>
            <li className="mb-2">
              <strong>Erasure:</strong> Request deletion of your personal data
            </li>
            <li className="mb-2">
              <strong>Restriction:</strong> Request restriction of processing of
              your data
            </li>
            <li className="mb-2">
              <strong>Portability:</strong> Request the transfer of your data to
              you or a third party
            </li>
            <li className="mb-2">
              <strong>Objection:</strong> Object to processing of your personal
              data
            </li>
            <li className="mb-2">
              <strong>Withdraw consent:</strong> Withdraw consent at any time
              where we rely on consent to process your data
            </li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact us using the
            information provided in the &quot;Contact Us&quot; section below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We have implemented appropriate technical and organizational
            measures to protect your personal data from unauthorized access,
            use, disclosure, alteration, or destruction. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to Our Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this privacy policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any material changes by
            posting the new privacy policy on this page and updating the
            &quot;Last Updated&quot; date.
          </p>
          <p className="mb-4">
            We encourage you to review this privacy policy periodically for any
            changes. Changes to this privacy policy are effective when they are
            posted on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this privacy policy or our
            privacy practices, please contact us at:
          </p>
          <p className="mb-4">
            <strong>The Reel Room</strong>
            <br />
            Email: info@reelroom.ca
            <br />
            Phone: +1 (604) 555-1234
            <br />
            Mount Pleasant, Vancouver, BC, Canada
          </p>
        </section>
      </main>
      <ReelRoomFooter />
    </>
  );
}
