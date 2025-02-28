import { Banknote, Clock, Cloud, Code, Cog, FileText, HelpCircle, Lock, MessageCircle, Shield, Star, Users } from "lucide-react";

export const faqCategories = {
  general: {
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Minecore Group offer?",
        answer: "We offer comprehensive digital transformation solutions including AI integration, automation, analytics, cloud services, and custom software development tailored to businesses of all sizes."
      },
      {
        question: "How long has Minecore Group been in business?",
        answer: "Minecore Group has been delivering innovative digital solutions to businesses since 2015, with a proven track record of successful transformations across multiple industries."
      },
      {
        question: "Which industries do you serve?",
        answer: "We serve a wide range of industries including finance, healthcare, retail, manufacturing, technology, and professional services. Each solution is customized to meet industry-specific needs."
      },
      {
        question: "Do you work with international clients?",
        answer: "Yes, we work with clients globally, providing remote and on-site services as needed. Our solutions are designed to work across different time zones and regions."
      },
      {
        question: "What makes Minecore Group different from other providers?",
        answer: "Our unique combination of cutting-edge technology expertise, industry experience, and customer-centric approach sets us apart. We focus on delivering measurable business value and long-term partnerships."
      }
    ]
  },
  technical: {
    title: "Technical Questions",
    icon: Code,
    questions: [
      {
        question: "What technologies do you specialize in?",
        answer: "We specialize in modern web technologies, cloud platforms, AI/ML frameworks, and enterprise software solutions. Our tech stack includes React, Node.js, Python, AWS, Azure, and various AI tools."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we have extensive experience in system integration. We can seamlessly connect new solutions with your existing infrastructure while ensuring data consistency and security."
      },
      {
        question: "How do you ensure system security?",
        answer: "We implement industry-standard security practices, including encryption, secure authentication, regular security audits, and compliance with relevant regulations like GDPR and HIPAA."
      },
      {
        question: "Do you provide API documentation?",
        answer: "Yes, all our solutions come with comprehensive API documentation, including usage examples, endpoint descriptions, and integration guides."
      },
      {
        question: "What is your approach to scalability?",
        answer: "Our solutions are built with scalability in mind, using cloud-native architectures, microservices, and efficient resource management to handle growing business needs."
      }
    ]
  },
  process: {
    title: "Process & Implementation",
    icon: Cog,
    questions: [
      {
        question: "What is your project implementation process?",
        answer: "Our process includes initial consultation, requirements gathering, solution design, development, testing, deployment, and ongoing support. We follow agile methodologies for efficient delivery."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. Small projects might take 2-3 months, while larger transformations can take 6-12 months. We provide detailed timelines during consultation."
      },
      {
        question: "Do you provide staff training?",
        answer: "Yes, we offer comprehensive training programs for your team, including documentation, workshops, and hands-on sessions to ensure smooth adoption of new systems."
      },
      {
        question: "What support do you offer after implementation?",
        answer: "We provide ongoing technical support, maintenance, updates, and optimization services. Our support packages can be customized based on your needs."
      },
      {
        question: "How do you handle project changes?",
        answer: "We follow a structured change management process, evaluating impact, costs, and timelines for any requested changes. All changes are documented and approved before implementation."
      }
    ]
  },
  security: {
    title: "Security & Compliance",
    icon: Shield,
    questions: [
      {
        question: "How do you handle sensitive data?",
        answer: "We follow strict data protection protocols, including encryption at rest and in transit, secure access controls, and regular security audits. All sensitive data handling complies with relevant regulations."
      },
      {
        question: "What security certifications do you have?",
        answer: "Our team maintains various security certifications including ISO 27001, and we regularly update our security practices to meet industry standards."
      },
      {
        question: "How do you ensure data privacy?",
        answer: "We implement robust privacy measures, including data minimization, secure storage, and strict access controls. Our solutions comply with GDPR and other privacy regulations."
      },
      {
        question: "What is your backup policy?",
        answer: "We implement automated backup systems with multiple redundancies, ensuring data safety and business continuity. Backup frequency and retention periods are customizable."
      },
      {
        question: "How do you handle security incidents?",
        answer: "We have a comprehensive incident response plan, including immediate notification, rapid response, thorough investigation, and preventive measures implementation."
      }
    ]
  },
  pricing: {
    title: "Pricing & Billing",
    icon: Banknote,
    questions: [
      {
        question: "How do you structure your pricing?",
        answer: "Our pricing is typically project-based or subscription-based, depending on the service. We provide detailed quotes after understanding your specific requirements."
      },
      {
        question: "Do you offer flexible payment terms?",
        answer: "Yes, we offer various payment options including monthly, quarterly, or milestone-based payments. We can work with you to find a suitable payment structure."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, including any potential additional expenses for scaling or extra features."
      },
      {
        question: "Do you offer service packages?",
        answer: "Yes, we offer pre-designed service packages as well as custom solutions. Packages can be tailored to match your budget and requirements."
      },
      {
        question: "What is included in maintenance costs?",
        answer: "Maintenance costs typically cover regular updates, security patches, technical support, and system monitoring. Specific inclusions are detailed in the service agreement."
      }
    ]
  },
  support: {
    title: "Support & Communication",
    icon: MessageCircle,
    questions: [
      {
        question: "What are your support hours?",
        answer: "We provide support during standard business hours (9 AM - 6 PM EST) with 24/7 emergency support available for critical issues."
      },
      {
        question: "How can I contact support?",
        answer: "Support is available through multiple channels including email, phone, live chat, and our ticket system. Emergency support has dedicated contact numbers."
      },
      {
        question: "What is your response time?",
        answer: "We aim to respond to standard queries within 4 hours and urgent issues within 1 hour during business hours. Critical issues receive immediate attention."
      },
      {
        question: "Do you provide regular progress updates?",
        answer: "Yes, we provide regular project updates through scheduled meetings, progress reports, and our project management platform."
      },
      {
        question: "Can I request feature enhancements?",
        answer: "Yes, we welcome feature requests and enhancement suggestions. These are evaluated based on feasibility and impact, then prioritized accordingly."
      }
    ]
  }
};
