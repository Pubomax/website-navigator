import React, { useState, useEffect } from 'react';

/**
 * Interactive Pricing Tool Component
 * Allows users to compare different service tiers and customize their options
 */

interface PricingFeature {
  id: string;
  name: string;
  description: string;
  includedIn: ('starter' | 'professional' | 'enterprise')[];
  highlight?: boolean;
}

interface PricingOption {
  id: string;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'annual';
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

interface InteractivePricingProps {
  serviceType?: 'automation' | 'digital' | 'transformation';
  className?: string;
}

export function InteractivePricing({ serviceType = 'automation', className = '' }: InteractivePricingProps) {
  // State for selected billing cycle
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  
  // State for customization options
  const [employeeCount, setEmployeeCount] = useState<'1-10' | '11-50' | '50+'>("11-50");
  const [industryType, setIndustryType] = useState<'retail' | 'finance' | 'healthcare' | 'manufacturing' | 'other'>('other');
  
  // State for calculated pricing options
  const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);
  
  // Features for different plans
  const features: PricingFeature[] = [
    {
      id: 'core-platform',
      name: 'Core AI Platform',
      description: 'Access to our core AI automation platform',
      includedIn: ['starter', 'professional', 'enterprise']
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'Automated workflows for routine tasks',
      includedIn: ['starter', 'professional', 'enterprise']
    },
    {
      id: 'data-integration',
      name: 'Data Integration',
      description: 'Connect to your existing data sources',
      includedIn: ['starter', 'professional', 'enterprise']
    },
    {
      id: 'custom-automations',
      name: 'Custom Automations',
      description: 'Build and deploy custom automation workflows',
      includedIn: ['professional', 'enterprise'],
      highlight: true
    },
    {
      id: 'api-access',
      name: 'API Access',
      description: 'Full API access for custom integrations',
      includedIn: ['professional', 'enterprise']
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics',
      description: 'Detailed insights and reporting dashboards',
      includedIn: ['enterprise'],
      highlight: true
    },
    {
      id: 'dedicated-support',
      name: 'Dedicated Support',
      description: '24/7 dedicated support team',
      includedIn: ['enterprise'],
      highlight: true
    },
    {
      id: 'sla',
      name: 'Enterprise SLA',
      description: 'Guaranteed uptime and response times',
      includedIn: ['enterprise']
    }
  ];
  
  // Calculate pricing based on selections
  useEffect(() => {
    const calculatePrice = (basePrice: number): number => {
      // Apply discounts for annual billing
      const cycleMultiplier = billingCycle === 'annual' ? 0.8 : 1; // 20% discount for annual
      
      // Adjust for employee count
      let sizeMultiplier = 1;
      if (employeeCount === '1-10') sizeMultiplier = 0.8;
      if (employeeCount === '50+') sizeMultiplier = 1.3;
      
      // Industry-specific adjustment
      let industryMultiplier = 1;
      if (industryType === 'finance' || industryType === 'healthcare') industryMultiplier = 1.15;
      
      return Math.round(basePrice * cycleMultiplier * sizeMultiplier * industryMultiplier);
    };
    
    // Generate pricing options based on user selections
    const basePrices = {
      starter: 1499,
      professional: 2999,
      enterprise: 5999
    };
    
    const options: PricingOption[] = [
      {
        id: 'starter',
        name: 'Starter Automation',
        price: calculatePrice(basePrices.starter),
        billingCycle,
        features: features
          .filter(f => f.includedIn.includes('starter'))
          .map(f => f.id),
        cta: 'Get Started',
        ctaLink: '/services/ai-automation-starter'
      },
      {
        id: 'professional',
        name: 'Professional Automation',
        price: calculatePrice(basePrices.professional),
        billingCycle,
        features: features
          .filter(f => f.includedIn.includes('professional'))
          .map(f => f.id),
        popular: true,
        cta: 'Schedule Demo',
        ctaLink: '/contact?demo=professional'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Automation',
        price: calculatePrice(basePrices.enterprise),
        billingCycle,
        features: features
          .filter(f => f.includedIn.includes('enterprise'))
          .map(f => f.id),
        cta: 'Contact Sales',
        ctaLink: '/contact?plan=enterprise'
      }
    ];
    
    setPricingOptions(options);
  }, [billingCycle, employeeCount, industryType]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className={`interactive-pricing bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-2">AI Automation Pricing</h2>
      <p className="text-gray-500 mb-8">Customized pricing for your business needs</p>
      
      <div className="customization-options flex flex-col md:flex-row gap-6 mb-8">
        <div className="billing-cycle">
          <label className="block text-sm font-medium text-gray-700 mb-2">Billing Cycle</label>
          <div className="flex p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-4 py-2 rounded ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded ${billingCycle === 'annual' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual (20% off)
            </button>
          </div>
        </div>
        
        <div className="employee-count">
          <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
          <select
            id="employeeCount"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(e.target.value as any)}
            className="block w-full rounded-md border-gray-300 shadow-sm p-2"
          >
            <option value="1-10">Small (1-10 employees)</option>
            <option value="11-50">Medium (11-50 employees)</option>
            <option value="50+">Large (50+ employees)</option>
          </select>
        </div>
        
        <div className="industry-type">
          <label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            id="industryType"
            value={industryType}
            onChange={(e) => setIndustryType(e.target.value as any)}
            className="block w-full rounded-md border-gray-300 shadow-sm p-2"
          >
            <option value="retail">Retail</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="pricing-cards grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pricingOptions.map((option) => (
          <div 
            key={option.id}
            className={`pricing-card relative rounded-lg border ${option.popular ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'} p-6 flex flex-col`}
          >
            {option.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{option.name}</h3>
            <div className="price-container mb-4">
              <span className="text-3xl font-bold">{formatPrice(option.price)}</span>
              <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            
            <ul className="feature-list mb-6 flex-grow">
              {features.map(feature => {
                const included = option.features.includes(feature.id);
                return (
                  <li 
                    key={feature.id} 
                    className={`py-2 flex items-start ${feature.highlight ? 'font-medium' : ''}`}
                  >
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      {included ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={!included ? 'text-gray-400' : ''}>
                      {feature.name}
                    </span>
                    <span 
                      className="ml-1 inline-block"
                      title={feature.description}
                      aria-label={feature.description}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </li>
                );
              })}
            </ul>
            
            <a
              href={option.ctaLink}
              className={`w-full py-2 px-4 rounded-md font-medium text-center ${
                option.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {option.cta}
            </a>
          </div>
        ))}
      </div>
      
      <div className="custom-quote p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <h3 className="text-lg font-semibold mb-2">Need a custom solution?</h3>
        <p className="text-gray-600 mb-4">We offer tailored solutions for complex business needs</p>
        <a 
          href="/contact?custom=true" 
          className="inline-block px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Request Custom Quote
        </a>
      </div>
    </div>
  );
}