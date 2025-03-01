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
        answer: "Minecore Group has been delivering innovative digital solutions to businesses since 2020, with a proven track record of successful transformations across multiple industries."
      },
      {
        question: "Which industries do you serve?",
        answer: "We serve a wide range of industries including finance, healthcare, retail, manufacturing, and public sector. Each solution is customized to meet industry-specific needs."
      },
      {
        question: "What makes Minecore Group different from other providers?",
        answer: "Our unique combination of cutting-edge technology expertise, industry experience, and customer-centric approach sets us apart. We focus on delivering measurable business value and long-term partnerships."
      }
    ]
  },
  services: {
    title: "Our Services",
    icon: Star,
    questions: [
      {
        question: "What is included in the Digital Foundation Package?",
        answer: "The Digital Foundation Package includes infrastructure assessment, cloud setup, basic process automation, security foundation, and employee digital skills training."
      },
      {
        question: "How does your AI Automation solution work?",
        answer: "Our AI Automation solution combines machine learning, natural language processing, and robotic process automation to streamline operations, enhance decision-making, and improve efficiency."
      },
      {
        question: "What type of custom software solutions do you offer?",
        answer: "We develop tailored software solutions including enterprise applications, mobile apps, web platforms, and integrated systems designed to meet your specific business requirements."
      },
      {
        question: "Do you provide ongoing support after implementation?",
        answer: "Yes, we offer comprehensive post-implementation support including maintenance, updates, optimization, and 24/7 technical assistance through our Intelligent Support Package."
      }
    ]
  },
  technical: {
    title: "Technical Questions",
    icon: Code,
    questions: [
      {
        question: "What technologies do you use for development?",
        answer: "We utilize modern web technologies, cloud platforms (AWS, Azure, GCP), AI/ML frameworks, and enterprise software solutions including React, Node.js, Python, and various AI tools."
      },
      {
        question: "How do you ensure system security?",
        answer: "We implement industry-standard security practices, including encryption, secure authentication, regular security audits, and compliance with relevant regulations like GDPR and HIPAA."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we specialize in system integration, connecting new solutions with your existing infrastructure while ensuring data consistency and security."
      }
    ]
  },
  implementation: {
    title: "Implementation Process",
    icon: Cog,
    questions: [
      {
        question: "What is your project implementation approach?",
        answer: "We follow an agile methodology with phases including initial consultation, requirements gathering, solution design, development, testing, deployment, and ongoing support."
      },
      {
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary by project scope. Digital Foundation Package typically takes 2-3 months, while comprehensive transformations may take 6-12 months."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we offer comprehensive training programs including documentation, workshops, and hands-on sessions to ensure smooth adoption of new systems."
      }
    ]
  },
  pricing: {
    title: "Pricing & Billing",
    icon: Banknote,
    questions: [
      {
        question: "How is your pricing structured?",
        answer: "We offer both project-based and subscription-based pricing models. Each solution is priced based on scope, complexity, and resource requirements."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we maintain complete pricing transparency. All costs, including potential scaling or additional feature expenses, are clearly outlined in our proposals."
      },
      {
        question: "Do you offer flexible payment terms?",
        answer: "Yes, we provide various payment options including monthly, quarterly, or milestone-based payments to accommodate your business needs."
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
        question: "What is your response time for support issues?",
        answer: "We aim to respond to standard queries within 4 hours and urgent issues within 1 hour during business hours. Critical issues receive immediate attention."
      }
    ]
  }
};