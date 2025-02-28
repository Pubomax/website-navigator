import { motion } from "framer-motion";

export default function Terms() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              Our services are provided "as is" and "as available." You agree to use them only for lawful purposes and in accordance with these Terms.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by Minecore Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Minecore Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: legal@minecoregroup.com
              <br />
              Address: 123 Innovation Drive, Toronto, ON M5V 2T6
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
