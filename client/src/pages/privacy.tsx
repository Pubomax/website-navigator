import { motion } from "framer-motion";
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Politique de Confidentialité" : "Privacy Policy",
  lastUpdated: isPathFrench ? "Dernière mise à jour" : "Last updated",
  sections: isPathFrench ? [
    {
      title: "1. Informations que Nous Collectons",
      content: "Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous :",
      items: [
        "Créez un compte ou vous inscrivez à nos services",
        "Remplissez des formulaires ou des sondages",
        "Vous abonnez à notre newsletter",
        "Nous contactez pour obtenir de l'aide"
      ]
    },
    {
      title: "2. Comment Nous Utilisons Vos Informations",
      content: "Nous utilisons les informations collectées pour :",
      items: [
        "Fournir et maintenir nos services",
        "Vous envoyer des mises à jour et notifications importantes",
        "Répondre à vos commentaires et questions",
        "Améliorer nos services et développer de nouvelles fonctionnalités"
      ]
    },
    {
      title: "3. Partage d'Informations",
      content: "Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les circonstances suivantes :",
      items: [
        "Avec votre consentement",
        "Pour respecter les obligations légales",
        "Pour protéger nos droits et notre sécurité"
      ]
    },
    {
      title: "4. Sécurité des Données",
      content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès, la modification, la divulgation ou la destruction non autorisés."
    },
    {
      title: "5. Vos Droits",
      content: "Vous avez le droit de :",
      items: [
        "Accéder à vos informations personnelles",
        "Corriger les informations inexactes",
        "Demander la suppression de vos informations",
        "Vous désinscrire des communications marketing"
      ]
    },
    {
      title: "6. Nous Contacter",
      content: "Si vous avez des questions sur cette Politique de Confidentialité, veuillez nous contacter :\nEmail : privacy@minecoregroup.com\nAdresse : 123 Innovation Drive, Toronto, ON M5V 2T6"
    }
  ] : [
    {
      title: "1. Information We Collect",
      content: "We collect information that you provide directly to us, including when you:",
      items: [
        "Create an account or sign up for our services",
        "Fill out forms or surveys",
        "Subscribe to our newsletter",
        "Contact us for support"
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to:",
      items: [
        "Provide and maintain our services",
        "Send you important updates and notifications",
        "Respond to your comments and questions",
        "Improve our services and develop new features"
      ]
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:",
      items: [
        "With your consent",
        "To comply with legal obligations",
        "To protect our rights and safety"
      ]
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to:",
      items: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Opt-out of marketing communications"
      ]
    },
    {
      title: "6. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us:\nEmail: privacy@minecoregroup.com\nAddress: 123 Innovation Drive, Toronto, ON M5V 2T6"
    }
  ]
});

export default function Privacy() {
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
                <p>{section.content}</p>
                {section.items && (
                  <ul>
                    {section.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}