import {
  Building2,
  Bot,
  Brain,
  Code,
  ChartBar,
  Shield,
  Cloud,
  Factory,
  ShoppingCart,
  Stethoscope,
  Landmark,
  Briefcase,
  LineChart,
  Settings,
  Database,
  Users,
} from "lucide-react";

export const businessSizes = {
  small: {
    title: { en: "Small Business", fr: "Petite Entreprise" },
    description: "Solutions for businesses with up to 50 employees",
    weight: 2,
    services: [
      {
        name: "Digital Starter Pack",
        description: "Essential digital tools and automation for small businesses",
        icon: Building2,
        price: "Starting at $2,500",
      },
      {
        name: "Small Business AI Suite",
        description: "AI-powered tools tailored for small business operations",
        icon: Bot,
        price: "Starting at $1,500",
      },
    ],
  },
  mid_market: {
    title: { en: "Mid-Market", fr: "Marché Intermédiaire" },
    description: "Solutions for businesses with 51-500 employees",
    weight: 3,
    services: [
      {
        name: "Enterprise Integration",
        description: "Comprehensive digital transformation solutions",
        icon: Brain,
        price: "Custom pricing",
      },
      {
        name: "Advanced Analytics",
        description: "Data-driven insights and business intelligence",
        icon: ChartBar,
        price: "Custom pricing",
      },
    ],
  },
  enterprise: {
    title: { en: "Enterprise", fr: "Grande Entreprise" },
    description: "Solutions for businesses with 500+ employees",
    weight: 5,
    services: [
      {
        name: "Global Digital Infrastructure",
        description: "Enterprise-wide digital transformation",
        icon: Cloud,
        price: "Contact for pricing",
      },
      {
        name: "Enterprise AI Platform",
        description: "Custom AI solutions for large organizations",
        icon: Database,
        price: "Contact for pricing",
      },
    ],
  },
};

export const sectors = {
  finance: {
    title: "Financial Services",
    frenchTitle: "Services Financiers",
    description: "Digital solutions for banking and finance",
    frenchDescription: "Solutions numériques pour la banque et la finance",
    services: [
      {
        name: "FinTech Integration",
        frenchName: "Intégration FinTech",
        description: "Modern financial technology solutions",
        frenchDescription: "Solutions technologiques financières modernes",
        icon: Landmark,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
      {
        name: "Financial Analytics",
        frenchName: "Analyse Financière",
        description: "Advanced financial data analysis",
        frenchDescription: "Analyse avancée des données financières",
        icon: LineChart,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
    ],
  },
  healthcare: {
    title: "Healthcare",
    frenchTitle: "Santé",
    description: "Digital healthcare solutions",
    frenchDescription: "Solutions numériques pour la santé",
    services: [
      {
        name: "Healthcare Systems",
        frenchName: "Systèmes de Santé",
        description: "Digital health management solutions",
        frenchDescription: "Solutions de gestion numérique de la santé",
        icon: Stethoscope,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
      {
        name: "Patient Care Analytics",
        frenchName: "Analyse des Soins aux Patients",
        description: "AI-powered patient care optimization",
        frenchDescription: "Optimisation des soins aux patients alimentée par l'IA",
        icon: Users,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
    ],
  },
  retail: {
    title: "Retail",
    frenchTitle: "Commerce de Détail",
    description: "Digital retail solutions",
    frenchDescription: "Solutions numériques pour le commerce de détail",
    services: [
      {
        name: "Retail Automation",
        frenchName: "Automatisation du Commerce",
        description: "Automated retail management systems",
        frenchDescription: "Systèmes automatisés de gestion du commerce",
        icon: ShoppingCart,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
      {
        name: "E-commerce Integration",
        frenchName: "Intégration E-commerce",
        description: "Online retail solutions",
        frenchDescription: "Solutions de commerce en ligne",
        icon: Code,
        price: "Custom pricing",
        frenchPrice: "Prix sur mesure",
      },
    ],
  },
};

export const needs = {
  automation: {
    title: "Automation",
    description: "Process automation solutions",
    services: [
      {
        name: "Workflow Automation",
        description: "Streamline business processes",
        icon: Settings,
        price: "Custom pricing",
      },
      {
        name: "AI-Powered Automation",
        description: "Intelligent automation solutions",
        icon: Bot,
        price: "Custom pricing",
      },
    ],
  },
  security: {
    title: "Security",
    description: "Digital security solutions",
    services: [
      {
        name: "Cybersecurity Suite",
        description: "Comprehensive security solutions",
        icon: Shield,
        price: "Custom pricing",
      },
      {
        name: "Security Automation",
        description: "Automated security monitoring",
        icon: Bot,
        price: "Custom pricing",
      },
    ],
  },
  analytics: {
    title: "Analytics",
    description: "Business intelligence solutions",
    services: [
      {
        name: "Data Analytics Platform",
        description: "Advanced data analysis tools",
        icon: ChartBar,
        price: "Custom pricing",
      },
      {
        name: "Predictive Analytics",
        description: "AI-powered business forecasting",
        icon: LineChart,
        price: "Custom pricing",
      },
    ],
  },
};

export const industries = {
  manufacturing: {
    title: { en: "Manufacturing", fr: "Fabrication" },
    description: "Industrial digital solutions",
    weight: 4,
    services: [
      {
        name: "Industrial Automation",
        description: "Smart manufacturing solutions",
        icon: Factory,
        price: "Custom pricing",
      },
      {
        name: "Quality Control AI",
        description: "AI-powered quality assurance",
        icon: Bot,
        price: "Custom pricing",
      },
    ],
  },
  professional: {
    title: { en: "Professional Services", fr: "Services Professionnels" },
    description: "Solutions for service businesses",
    weight: 3,
    services: [
      {
        name: "Service Automation",
        description: "Professional service optimization",
        icon: Briefcase,
        price: "Custom pricing",
      },
      {
        name: "Client Management",
        description: "Intelligent client relationship tools",
        icon: Users,
        price: "Custom pricing",
      },
    ],
  },
  technology: {
    title: { en: "Technology", fr: "Technologie" },
    description: "Solutions for tech companies",
    weight: 5,
    services: [
      {
        name: "Tech Integration",
        description: "Advanced technology integration",
        icon: Code,
        price: "Custom pricing",
      },
      {
        name: "DevOps Automation",
        description: "Automated development operations",
        icon: Settings,
        price: "Custom pricing",
      },
    ],
  },
  retail: {
    title: { en: "Retail & E-commerce", fr: "Commerce de Détail" },
    description: "Digital retail solutions",
    weight: 3,
    services: [
      {
        name: "Retail Automation",
        description: "Automated retail management systems",
        icon: ShoppingCart,
        price: "Custom pricing",
      },
    ],
  },
  healthcare: {
    title: { en: "Healthcare", fr: "Santé" },
    description: "Digital healthcare solutions",
    weight: 4,
    services: [
      {
        name: "Healthcare Systems",
        description: "Digital health management solutions",
        icon: Stethoscope,
        price: "Custom pricing",
      },
    ],
  },
  finance: {
    title: { en: "Financial Services", fr: "Services Financiers" },
    description: "Digital solutions for banking and finance",
    weight: 5,
    services: [
      {
        name: "FinTech Integration",
        description: "Modern financial technology solutions",
        icon: Landmark,
        price: "Custom pricing",
      },
    ],
  },
};