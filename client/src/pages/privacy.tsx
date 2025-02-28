import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you:
            </p>
            <ul>
              <li>Create an account or sign up for our services</li>
              <li>Fill out forms or surveys</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Send you important updates and notifications</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our services and develop new features</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@minecoregroup.com
              <br />
              Address: 123 Innovation Drive, Toronto, ON M5V 2T6
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
