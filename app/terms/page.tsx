import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Please read these Terms of Service carefully before using our website or ordering our products.
          </p>
          <div className="mt-6 text-sm text-gray-500">Last Updated: April 17, 2023</div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Agreement to Terms</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                These Terms of Service constitute a legally binding agreement between you and The Cheesecake Cookie
                Company ("we," "us," or "our") governing your access to and use of our website, mobile application, and
                services, including the purchase of our products.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use our services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Changes to Terms</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                by updating the "Last Updated" date at the top of these Terms. Your continued use of our services after
                such changes constitutes your acceptance of the new Terms.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Account Registration</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                To access certain features of our services, you may need to create an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all activities that occur under your account.
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Orders and Payments</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                <strong>Product Availability:</strong> All products are subject to availability. We reserve the right to
                discontinue or modify any product without notice.
              </p>
              <p>
                <strong>Pricing:</strong> All prices are in US dollars and are subject to change without notice. Prices
                do not include applicable taxes, delivery fees, or other charges, which will be added to your order.
              </p>
              <p>
                <strong>Payment:</strong> We accept various payment methods as indicated on our website. By providing
                payment information, you represent and warrant that you have the legal right to use the payment method
                and that the information you provide is accurate.
              </p>
              <p>
                <strong>Order Confirmation:</strong> After placing an order, you will receive an email confirmation with
                your order details. This email is not an acceptance of your order; we reserve the right to accept or
                decline your order for any reason.
              </p>
              <p>
                <strong>Cancellations and Modifications:</strong> Once an order is placed, it may not be possible to
                cancel or modify it. Please contact our customer service team as soon as possible if you need to make
                changes to your order.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Delivery</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                <strong>Delivery Areas:</strong> We deliver to specific areas as indicated on our website. Delivery may
                not be available in all locations.
              </p>
              <p>
                <strong>Delivery Times:</strong> We strive to deliver orders within the estimated timeframe. However,
                delivery times are not guaranteed and may be affected by factors beyond our control, such as weather
                conditions or traffic.
              </p>
              <p>
                <strong>Delivery Issues:</strong> If you experience any issues with your delivery, please contact our
                customer service team immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Product Information</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                <strong>Product Descriptions:</strong> We strive to provide accurate descriptions of our products.
                However, we do not warrant that product descriptions or other content on our website are accurate,
                complete, reliable, current, or error-free.
              </p>
              <p>
                <strong>Allergens and Dietary Information:</strong> While we make efforts to provide accurate allergen
                and dietary information, we cannot guarantee that our products are free from allergens or suitable for
                specific dietary requirements. If you have allergies or dietary restrictions, please contact us before
                placing an order.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Returns and Refunds</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                Due to the perishable nature of our products, we generally do not accept returns. However, if you are
                not satisfied with your order or if there is an issue with your delivery, please contact our customer
                service team within 24 hours of receiving your order.
              </p>
              <p>
                We may offer a refund, replacement, or store credit at our discretion, depending on the circumstances.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Intellectual Property</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                Our website, including its content, features, and functionality, is owned by The Cheesecake Cookie
                Company and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our website without our prior
                written consent.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">User Content</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                By submitting content to our website (such as reviews, comments, or photos), you grant us a
                non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use, reproduce, modify, adapt,
                publish, translate, create derivative works from, distribute, and display such content in any media.
              </p>
              <p>
                You represent and warrant that you own or control all rights to the content you submit and that the
                content does not violate these Terms or any applicable law.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Prohibited Activities</h2>
            <div className="prose prose-purple max-w-none">
              <p>You agree not to:</p>
              <ul>
                <li>Use our services in any way that violates any applicable law or regulation</li>
                <li>Use our services for any unauthorized or illegal purpose</li>
                <li>Attempt to interfere with the proper functioning of our services</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
                <li>Use any robot, spider, or other automatic device to access our services</li>
                <li>Introduce any viruses, trojan horses, worms, or other harmful material</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED,
                OR THAT OUR SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
                COMPONENTS.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS,
                OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION
                WITH YOUR USE OF OUR SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Indemnification</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                You agree to defend, indemnify, and hold harmless The Cheesecake Cookie Company, its affiliates, and
                their respective officers, directors, employees, and agents from and against any claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees)
                arising out of or relating to your violation of these Terms or your use of our services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
            <div className="prose prose-purple max-w-none">
              <p>
                These Terms and your use of our services are governed by and construed in accordance with the laws of
                the State of California, without giving effect to any choice or conflict of law provision or rule.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of or related to these Terms or our services shall be
                instituted exclusively in the federal courts of the United States or the courts of the State of
                California, in each case located in Orange County. You waive any and all objections to the exercise of
                jurisdiction over you by such courts and to venue in such courts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact Us</h2>
            <div className="prose prose-purple max-w-none">
              <p>If you have any questions or concerns about these Terms, please contact us at:</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@cheesecakecookiecompany.com">legal@cheesecakecookiecompany.com</a>
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
