import { Shield, Code, Bot, Brain, HeadsetIcon, Globe } from "lucide-react";

export const solutions = [
  {
    id: "digital-foundation",
    name: "Digital Foundation Package",
    description: "Complete digital presence setup for micro & small businesses",
    targetClient: "Micro & small businesses",
    icon: Globe,
    keyDeliverables: [
      "Professional website development",
      "Social media platform setup and integration",
      "Basic CRM implementation",
      "Lead nurturing automation",
      "Sales process automation",
    ],
    pricingModel: {
      type: "One-time + Retainer",
      details: "One-time setup fee + optional maintenance retainer",
    },
    benefits: [
      "Establish strong online presence",
      "Automate customer engagement",
      "Streamline sales processes",
      "Reduce manual workload",
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation Consulting",
    description: "Strategic guidance for comprehensive digital transformation",
    targetClient: "SMEs to large enterprises",
    icon: Brain,
    keyDeliverables: [
      "Comprehensive digital audit",
      "Strategy development workshops",
      "Transformation roadmap creation",
      "Change management planning",
      "Implementation guidance",
    ],
    pricingModel: {
      type: "Project + Retainer",
      details: "Project-based fee + optional ongoing retainer",
    },
    benefits: [
      "Clear transformation strategy",
      "Expert-guided implementation",
      "Change management support",
      "Measurable outcomes",
    ]
  },
  {
    id: "ai-automation-starter",
    name: "AI & Automation Starter Package",
    description: "Entry-level AI and automation solutions for businesses",
    targetClient: "Businesses starting with AI",
    icon: Bot,
    keyDeliverables: [
      "AI chatbot implementation",
      "Basic analytics setup",
      "Robotic Process Automation (RPA)",
      "System integration",
      "Staff training",
    ],
    pricingModel: {
      type: "Project + Subscription",
      details: "Project fee + recurring maintenance subscription",
    },
    benefits: [
      "Automate routine tasks",
      "Enhance customer service",
      "Data-driven insights",
      "Improved efficiency",
    ]
  },
  {
    id: "custom-ai-automation",
    name: "Custom AI & Automation Package",
    description: "Advanced AI solutions tailored to enterprise needs",
    targetClient: "Mid-to-large enterprises",
    icon: Brain,
    keyDeliverables: [
      "Custom AI model development",
      "Advanced RPA implementation",
      "Enterprise system integration",
      "Continuous support and optimization",
      "Performance monitoring",
    ],
    pricingModel: {
      type: "Milestone + Value",
      details: "Milestone-based fee, value-based pricing, support contract",
    },
    benefits: [
      "Customized AI solutions",
      "Seamless integration",
      "Scalable automation",
      "Ongoing optimization",
    ]
  },
  {
    id: "custom-software",
    name: "Custom Software & Platform Development",
    description: "Bespoke software solutions for unique business needs",
    targetClient: "Businesses needing bespoke apps",
    icon: Code,
    keyDeliverables: [
      "Custom application development",
      "API integration",
      "Third-party system integration",
      "User training",
      "Technical support",
    ],
    pricingModel: {
      type: "Project + Support",
      details: "Project fee + optional ongoing support",
    },
    benefits: [
      "Tailored functionality",
      "Seamless integration",
      "Comprehensive training",
      "Ongoing support",
    ]
  },
  {
    id: "intelligent-support",
    name: "Intelligent Support & Contact Center",
    description: "AI-powered customer support solutions",
    targetClient: "Businesses focused on customer support",
    icon: HeadsetIcon,
    keyDeliverables: [
      "AI chatbot deployment",
      "Voice/IVR integration",
      "Multi-channel support setup",
      "Analytics dashboard",
      "Performance reporting",
    ],
    pricingModel: {
      type: "Integration + Subscription",
      details: "Integration fee + monthly managed service subscription",
    },
    benefits: [
      "24/7 customer support",
      "Reduced response times",
      "Multi-channel presence",
      "Data-driven insights",
    ]
  }
];
