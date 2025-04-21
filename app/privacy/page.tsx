import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-100 to-white">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            At The Cheesecake Cookie Company, we take your privacy seriously. This policy outlines how we collect, use,
            and protect your information.
          </p>
          <div className="mt-6 text-sm text-gray-500">Last Updated: April 17, 2023</div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Information We Collect</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                We collect information that you provide directly to us, such as when you create an account, place an
                order, contact us, or subscribe to our newsletter. This information may include:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Your name, email address, postal address, phone number, and
                  other similar contact information.
                </li>
                <li>
                  <strong>Order Information:</strong> Details about the products you purchase, delivery preferences, and
                  payment information.
                </li>
                <li>
                  <strong>Account Information:</strong> Your username, password, and preferences.
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when you contact our customer service team or
                  communicate with us through social media.
                </li>
              </ul>
              <p>
                We also automatically collect certain information when you visit our website or use our mobile
                application, including:
              </p>
              <ul>
                <li>
                  <strong>Device Information:</strong> Information about your device, browser type, IP address, and
                  operating system.
                </li>
                <li>
                  <strong>Usage Information:</strong> How you interact with our website, including pages visited, time
                  spent, and links clicked.
                </li>
                <li>
                  <strong>Location Information:</strong> General location information based on your IP address or more
                  precise location if you grant permission.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="prose prose-purple max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders, account, or customer service inquiries</li>
                <li>Send you marketing communications, such as newsletters or promotional offers</li>
                <li>Improve our website, products, and services</li>
                <li>Detect and prevent fraud or unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Sharing Your Information</h2>
            <div className="prose prose-purple max-w-none">
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that perform services on our behalf, such as
                  payment processing, delivery, and marketing.
                </li>
                <li>
                  <strong>Business Partners:</strong> Companies with whom we partner to offer joint promotions or
                  products.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, to protect our rights, or in response to a
                  legal process.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties for their own marketing purposes without your
                consent.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                These technologies help us:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your experience</li>
                <li>Deliver relevant advertising</li>
              </ul>
              <p>
                You can manage your cookie preferences through your browser settings. However, disabling cookies may
                limit your ability to use certain features of our website.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your Rights and Choices</h2>
            <div className="prose prose-purple max-w-none">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li>Access and review the information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw your consent</li>
                <li>Request the transfer of your information to another service</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@cheesecakecookiecompany.com">privacy@cheesecakecookiecompany.com</a>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Data Security</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, loss, or alteration. However, no method of transmission over the Internet
                or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Children's Privacy</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Changes to This Policy</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about
                how we are protecting your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact Us</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
                us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@cheesecakecookiecompany.com">privacy@cheesecakecookiecompany.com</a>
                <br />
                <strong>Phone:</strong> (310) 561-2581
                <br />
                <strong>Address:</strong> 1560 S Lewis, Anaheim, CA 92805
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
