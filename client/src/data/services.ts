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
    title: "Small Business",
    description: "Solutions for businesses with up to 50 employees",
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
  medium: {
    title: "Mid-Market",
    description: "Solutions for businesses with 51-500 employees",
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
    title: "Enterprise",
    description: "Solutions for businesses with 500+ employees",
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
    description: "Digital solutions for banking and finance",
    services: [
      {
        name: "FinTech Integration",
        description: "Modern financial technology solutions",
        icon: Landmark,
        price: "Custom pricing",
      },
      {
        name: "Financial Analytics",
        description: "Advanced financial data analysis",
        icon: LineChart,
        price: "Custom pricing",
      },
    ],
  },
  healthcare: {
    title: "Healthcare",
    description: "Digital healthcare solutions",
    services: [
      {
        name: "Healthcare Systems",
        description: "Digital health management solutions",
        icon: Stethoscope,
        price: "Custom pricing",
      },
      {
        name: "Patient Care Analytics",
        description: "AI-powered patient care optimization",
        icon: Users,
        price: "Custom pricing",
      },
    ],
  },
  retail: {
    title: "Retail",
    description: "Digital retail solutions",
    services: [
      {
        name: "Retail Automation",
        description: "Automated retail management systems",
        icon: ShoppingCart,
        price: "Custom pricing",
      },
      {
        name: "E-commerce Integration",
        description: "Online retail solutions",
        icon: Code,
        price: "Custom pricing",
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
    title: "Manufacturing",
    description: "Industrial digital solutions",
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
    title: "Professional Services",
    description: "Solutions for service businesses",
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
    title: "Technology",
    description: "Solutions for tech companies",
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
};
