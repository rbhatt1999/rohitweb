import NeuraHeader from '@/components/neura/NeuraHeader'
import NeuraFooter from '@/components/neura/NeuraFooter'
import { NEURA_EMAIL } from '@/components/neura/routes'

export const metadata = {
  title: 'Terms of Service — NEURA',
  description: 'The terms that govern your use of the NEURA website and services.',
}

export default function TermsPage() {
  return (
    <>
      <NeuraHeader />
      <main>
        <section className="soon-sec nx-legal">
          <div className="wrap">
            <p className="soon-eyebrow">Legal</p>
            <h1 className="soon-h2">Terms of Service</h1>
            <p className="nx-legal-date">Last updated: June 29, 2026</p>

            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the NEURA website
              and any services we make available (collectively, the &ldquo;Service&rdquo;). By accessing or
              using the Service, you agree to be bound by these Terms. If you do not agree, please do not use
              the Service.
            </p>

            <h2>1. Eligibility</h2>
            <p>
              You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Service.
              By using it, you represent that you meet this requirement.
            </p>

            <h2>2. Use of the Service</h2>
            <p>
              The Service is currently offered on a pre-launch basis, including a waitlist and informational pages.
              You agree to use the Service only for lawful purposes and not to misuse, disrupt, or attempt to gain
              unauthorized access to it or its related systems.
            </p>

            <h2>3. Waitlist and communications</h2>
            <p>
              Joining our waitlist does not guarantee access to the product, pricing, or any specific features.
              By joining, you consent to receive launch and product communications from us. You can unsubscribe
              at any time.
            </p>

            <h2>4. Intellectual property</h2>
            <p>
              The Service, including its content, branding, and software, is owned by NEURA and protected by
              intellectual-property laws. We grant you a limited, non-exclusive, non-transferable license to access
              and use the Service for its intended purpose. You may not copy, modify, or distribute any part of it
              without our permission.
            </p>

            <h2>5. Disclaimers</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any
              kind, express or implied. Information on the website, including product descriptions and previewed
              pricing, is subject to change and may not reflect the final product.
            </p>

            <h2>6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, NEURA will not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of, or inability to use, the Service.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time, with or without notice, for any
              reason, including violation of these Terms.
            </p>

            <h2>8. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will revise the &ldquo;Last updated&rdquo;
              date above. Continued use of the Service after changes take effect constitutes acceptance of the revised
              Terms.
            </p>

            <h2>9. Contact us</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a href={`mailto:${NEURA_EMAIL}`} className="soon-mail">{NEURA_EMAIL}</a>.
            </p>

            <p className="nx-legal-note">
              This document is a general template provided for informational purposes and is not legal advice.
            </p>
          </div>
        </section>
      </main>
      <NeuraFooter />
    </>
  )
}
