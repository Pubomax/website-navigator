import { motion } from "framer-motion";
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Conditions d'Utilisation" : "Terms of Service",
  lastUpdated: isPathFrench ? "Dernière mise à jour" : "Last updated",
  sections: isPathFrench ? [
    {
      title: "1. Accord des Conditions",
      content: "En accédant ou en utilisant nos services, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'êtes pas d'accord avec une partie des conditions, vous ne pouvez pas accéder à nos services."
    },
    {
      title: "2. Utilisation des Services",
      content: "Nos services sont fournis \"tels quels\" et \"selon leur disponibilité\". Vous acceptez de les utiliser uniquement à des fins légales et conformément à ces Conditions."
    },
    {
      title: "3. Comptes Utilisateurs",
      content: "Lorsque vous créez un compte chez nous, vous devez fournir des informations exactes et complètes. Vous êtes responsable du maintien de la sécurité de votre compte."
    },
    {
      title: "4. Propriété Intellectuelle",
      content: "Le service et son contenu original, ses fonctionnalités et ses fonctionnalités sont la propriété de Minecore Group et sont protégés par les lois internationales sur les droits d'auteur, les marques de commerce, les brevets, les secrets commerciaux et autres lois sur la propriété intellectuelle."
    },
    {
      title: "5. Limitation de Responsabilité",
      content: "En aucun cas, Minecore Group, ni ses directeurs, employés, partenaires, agents, fournisseurs ou affiliés, ne seront responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif."
    },
    {
      title: "6. Modifications des Conditions",
      content: "Nous nous réservons le droit de modifier ou de remplacer ces Conditions à tout moment. Nous fournirons un avis de tout changement en publiant les nouvelles Conditions sur cette page."
    },
    {
      title: "7. Informations de Contact",
      content: "Si vous avez des questions sur ces Conditions, veuillez nous contacter :\nEmail : legal@minecoregroup.com\nAdresse : 123 Innovation Drive, Toronto, ON M5V 2T6"
    }
  ] : [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services."
    },
    {
      title: "2. Use of Services",
      content: "Our services are provided \"as is\" and \"as available.\" You agree to use them only for lawful purposes and in accordance with these Terms."
    },
    {
      title: "3. User Accounts",
      content: "When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account."
    },
    {
      title: "4. Intellectual Property",
      content: "The service and its original content, features, and functionality are owned by Minecore Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall Minecore Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages."
    },
    {
      title: "6. Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page."
    },
    {
      title: "7. Contact Information",
      content: "If you have any questions about these Terms, please contact us:\nEmail: legal@minecoregroup.com\nAddress: 123 Innovation Drive, Toronto, ON M5V 2T6"
    }
  ]
});

export default function Terms() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">{content.title}</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">{content.lastUpdated}: {new Date().toLocaleDateString()}</p>

            {content.sections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                <p>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}