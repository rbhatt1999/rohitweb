import NeuraHeader from '@/components/neura/NeuraHeader'
import NeuraFooter from '@/components/neura/NeuraFooter'
import { NEURA_EMAIL } from '@/components/neura/routes'

export const metadata = {
  title: 'Privacy Policy — NEURA',
  description: 'How NEURA collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <NeuraHeader />
      <main>
        <section className="soon-sec nx-legal">
          <div className="wrap">
            <p className="soon-eyebrow">Legal</p>
            <h1 className="soon-h2">Privacy Policy</h1>
            <p className="nx-legal-date">Last updated: June 29, 2026</p>

            <p>
              NEURA (&ldquo;NEURA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This Privacy Policy explains what information we collect, how we
              use it, and the choices you have. By using our website or joining our waitlist, you agree
              to the practices described here.
            </p>

            <h2>1. Information we collect</h2>
            <p>
              <b>Information you provide.</b> When you join our waitlist or contact us, we collect the
              email address and any other details you choose to share.
            </p>
            <p>
              <b>Information collected automatically.</b> Like most websites, we may collect basic usage
              data such as pages visited, device and browser type, and aggregate analytics. We do not use
              this data to identify you personally.
            </p>

            <h2>2. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Operate, maintain, and improve our website and product;</li>
              <li>Notify you about our launch, product updates, and early-access opportunities;</li>
              <li>Respond to your questions and support requests;</li>
              <li>Detect, prevent, and address technical issues or abuse.</li>
            </ul>

            <h2>3. Sharing your information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted service providers who
              help us operate our website and communicate with you, and only to the extent necessary to
              perform those services. We may also disclose information if required by law.
            </p>

            <h2>4. Data retention</h2>
            <p>
              We keep your information only for as long as needed to fulfill the purposes described in this
              policy, or as required by law. You may ask us to delete your information at any time.
            </p>

            <h2>5. Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, or delete your personal
              information, or to opt out of marketing communications. To exercise these rights, contact us at{' '}
              <a href={`mailto:${NEURA_EMAIL}`} className="soon-mail">{NEURA_EMAIL}</a>. Every email we send also
              includes an unsubscribe link.
            </p>

            <h2>6. Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your information. No method of
              transmission or storage is completely secure, however, and we cannot guarantee absolute security.
            </p>

            <h2>7. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
              updated&rdquo; date above. Continued use of our website after changes take effect constitutes
              acceptance of the revised policy.
            </p>

            <h2>8. Contact us</h2>
            <p>
              Questions about this policy? Email us at{' '}
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
