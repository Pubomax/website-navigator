import React, { useEffect, useState } from 'react';

/**
 * Trust Indicators Component
 * 
 * Displays trust badges, certifications, third-party reviews, and guarantees
 * to build credibility and increase conversion rates
 */

interface TrustIndicatorProps {
  className?: string;
  variant?: 'compact' | 'standard' | 'detailed';
  showReviews?: boolean;
  showCertifications?: boolean;
  showPartners?: boolean;
  showGuarantee?: boolean;
}

interface ReviewPlatform {
  name: string;
  logo: string;
  rating: number; 
  reviewCount: number;
  url: string;
}

interface Certification {
  name: string;
  logo: string;
  description: string;
  url?: string;
}

interface Partner {
  name: string;
  logo: string;
}

export function TrustIndicators({
  className = '',
  variant = 'standard',
  showReviews = true,
  showCertifications = true,
  showPartners = true,
  showGuarantee = true
}: TrustIndicatorProps) {
  const [avgRating, setAvgRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  
  // Review platform data
  const reviewPlatforms: ReviewPlatform[] = [
    {
      name: 'Google',
      logo: '/images/trust/google-reviews.svg',
      rating: 4.8,
      reviewCount: 127,
      url: 'https://www.google.com/maps/place/...'
    },
    {
      name: 'Trustpilot',
      logo: '/images/trust/trustpilot.svg',
      rating: 4.7,
      reviewCount: 89,
      url: 'https://www.trustpilot.com/review/minecoregroup.com'
    },
    {
      name: 'G2',
      logo: '/images/trust/g2.svg',
      rating: 4.6,
      reviewCount: 42,
      url: 'https://www.g2.com/products/minecore-group/reviews'
    }
  ];
  
  // Certification data
  const certifications: Certification[] = [
    {
      name: 'ISO 27001',
      logo: '/images/trust/iso-27001.svg',
      description: 'Information Security Management',
      url: '/security/certifications'
    },
    {
      name: 'SOC 2 Type II',
      logo: '/images/trust/soc2.svg',
      description: 'Security, Availability, & Confidentiality',
      url: '/security/certifications'
    },
    {
      name: 'GDPR Compliant',
      logo: '/images/trust/gdpr.svg',
      description: 'EU General Data Protection Regulation',
      url: '/privacy'
    }
  ];
  
  // Partner data
  const partners: Partner[] = [
    {
      name: 'Microsoft Gold Partner',
      logo: '/images/trust/microsoft-partner.svg'
    },
    {
      name: 'AWS Select Partner',
      logo: '/images/trust/aws-partner.svg'
    },
    {
      name: 'Google Cloud Partner',
      logo: '/images/trust/gcp-partner.svg'
    }
  ];
  
  // Calculate average ratings and total reviews on component mount
  useEffect(() => {
    let totalRating = 0;
    let reviews = 0;
    
    reviewPlatforms.forEach(platform => {
      totalRating += platform.rating * platform.reviewCount;
      reviews += platform.reviewCount;
    });
    
    setAvgRating(parseFloat((totalRating / reviews).toFixed(1)));
    setTotalReviews(reviews);
  }, []);
  
  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // Render the compact variant
  if (variant === 'compact') {
    return (
      <div className={`trust-indicators-compact flex flex-wrap items-center justify-center gap-4 py-3 ${className}`}>
        {showReviews && (
          <div className="flex items-center gap-2">
            {renderStars(avgRating)}
            <span className="text-sm font-medium">{avgRating} stars</span>
            <span className="text-xs text-gray-500">({totalReviews} reviews)</span>
          </div>
        )}
        
        {showCertifications && (
          <div className="certification-badges flex items-center gap-2">
            {certifications.map(cert => (
              <div key={cert.name} className="certification-badge flex items-center" title={cert.description}>
                <img src={cert.logo} alt={cert.name} className="h-6 w-auto" />
              </div>
            ))}
          </div>
        )}
        
        {showGuarantee && (
          <div className="guarantee-badge flex items-center gap-1">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
          </div>
        )}
      </div>
    );
  }
  
  // Render the standard variant
  return (
    <div className={`trust-indicators ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Reviews summary */}
        {showReviews && (
          <div className="reviews-summary bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">Customer Reviews</h3>
            <div className="flex items-center gap-2 mb-3">
              {renderStars(avgRating)}
              <span className="text-xl font-bold">{avgRating}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Based on {totalReviews} reviews across platforms</p>
            
            <div className="review-platforms space-y-3">
              {reviewPlatforms.map(platform => (
                <a 
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <img src={platform.logo} alt={platform.name} className="h-5 w-auto" />
                    <span className="text-sm">{platform.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{platform.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-500">({platform.reviewCount})</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Certifications */}
        {showCertifications && (
          <div className="certifications bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="certification-list space-y-4">
              {certifications.map(cert => (
                <div key={cert.name} className="certification-item">
                  <div className="flex items-center gap-3 mb-1">
                    <img src={cert.logo} alt={cert.name} className="h-8 w-auto" />
                    <h4 className="font-medium">{cert.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Partners */}
        {showPartners && (
          <div className="partners bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Strategic Partners</h3>
            <div className="partner-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map(partner => (
                <div key={partner.name} className="partner-item flex flex-col items-center justify-center p-3 border border-gray-100 rounded bg-gray-50">
                  <img src={partner.logo} alt={partner.name} className="h-12 mb-2" />
                  <span className="text-sm text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Guarantee */}
        {showGuarantee && (
          <div className="guarantee bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-3">Our Guarantee</h3>
            <div className="guarantee-badge flex items-center gap-2 mb-4">
              <svg className="w-10 h-10 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xl font-medium">100% Satisfaction Guarantee</span>
            </div>
            
            <p className="text-gray-600 mb-4">
              We stand behind our services with a 100% satisfaction guarantee. If you're not completely satisfied with our solutions, we'll work with you until you are.
            </p>
            
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-600">
              <li>30-day money-back guarantee</li>
              <li>Dedicated support throughout implementation</li>
              <li>Free consultation to ensure our solution meets your needs</li>
              <li>Regular check-ins during the first 90 days</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}