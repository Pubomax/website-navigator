import React, { useState, useEffect } from 'react';

/**
 * User Journey Orchestration Component
 * 
 * Personalizes user experience based on referring source, returning visits,
 * and user behavior. Provides tailored content and CTAs dynamically.
 */

interface UserJourneyProps {
  className?: string;
  defaultSegment?: string;
}

// User segments and their corresponding content
interface Segment {
  id: string;
  name: string;
  headline: string;
  subheadline: string;
  cta: {
    text: string;
    url: string;
    variant: 'primary' | 'secondary' | 'tertiary';
  };
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  videoUrl?: string;
}

export function UserJourney({ className = '', defaultSegment = 'general' }: UserJourneyProps) {
  const [userSegment, setUserSegment] = useState<string>(defaultSegment);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [visits, setVisits] = useState<number>(1);
  const [lastVisitDate, setLastVisitDate] = useState<Date | null>(null);
  
  // Define user segments
  const segments: Record<string, Segment> = {
    general: {
      id: 'general',
      name: 'General Visitor',
      headline: 'Transform Your Business with AI Automation',
      subheadline: 'Streamline workflows and boost productivity with our intelligent solutions',
      cta: {
        text: 'Explore Solutions',
        url: '/solutions',
        variant: 'primary'
      },
      image: '/images/hero-general.webp',
    },
    smallBusiness: {
      id: 'smallBusiness',
      name: 'Small Business',
      headline: 'AI Automation Sized for Small Business',
      subheadline: 'Affordable solutions that scale with your business, no IT department needed',
      cta: {
        text: 'See Small Business Plans',
        url: '/business-types/micro',
        variant: 'primary'
      },
      image: '/images/hero-small-business.webp',
      testimonial: {
        quote: "We saw a 35% increase in productivity after implementing the automation solution. As a small business, that's a game-changer for us.",
        author: "Sarah Chen",
        company: "Bright Ideas Studio"
      }
    },
    enterprise: {
      id: 'enterprise',
      name: 'Enterprise',
      headline: 'Enterprise-Grade AI Automation',
      subheadline: 'Scalable solutions designed for complex enterprise environments',
      cta: {
        text: 'Schedule Enterprise Demo',
        url: '/business-types/large',
        variant: 'primary'
      },
      image: '/images/hero-enterprise.webp',
      testimonial: {
        quote: "The ROI has been exceptional. We've automated over 15,000 hours of manual work annually across our organization.",
        author: "Michael Rodriguez",
        company: "Global Innovations Inc."
      }
    },
    marketing: {
      id: 'marketing',
      name: 'Marketing Professional',
      headline: 'Marketing Automation That Drives Results',
      subheadline: 'AI-powered solutions to optimize campaigns and increase conversions',
      cta: {
        text: 'Marketing Solutions',
        url: '/services/marketing-automation',
        variant: 'primary'
      },
      image: '/images/hero-marketing.webp',
      videoUrl: 'https://www.youtube.com/embed/marketing-automation-demo'
    },
    returning: {
      id: 'returning',
      name: 'Returning Visitor',
      headline: 'Welcome Back to Minecore Group',
      subheadline: 'Pick up where you left off and continue exploring our solutions',
      cta: {
        text: 'Continue Exploring',
        url: '/services',
        variant: 'secondary'
      },
      image: '/images/hero-returning.webp'
    },
    highIntent: {
      id: 'highIntent',
      name: 'High Intent Visitor',
      headline: 'Ready to Transform Your Business?',
      subheadline: 'Schedule a consultation and get a customized implementation plan',
      cta: {
        text: 'Schedule Consultation',
        url: '/consultation',
        variant: 'tertiary'
      },
      image: '/images/hero-high-intent.webp'
    }
  };
  
  // Detect user segment based on referring source and previous visits
  useEffect(() => {
    // Get stored visit data
    const storedVisits = localStorage.getItem('user_visits');
    const storedLastVisit = localStorage.getItem('last_visit_date');
    const storedSegment = localStorage.getItem('user_segment');
    
    // Parse stored data
    if (storedVisits) {
      setVisits(parseInt(storedVisits, 10) + 1);
    }
    
    if (storedLastVisit) {
      setLastVisitDate(new Date(storedLastVisit));
    }
    
    if (storedSegment) {
      setUserSegment(storedSegment);
    } else {
      // Determine segment from URL parameters or referrer
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      
      // Check referrer
      const referrer = document.referrer;
      
      // Logic to determine segment based on referrer and UTM parameters
      if (utmSource === 'google' && utmMedium === 'cpc' && utmCampaign?.includes('small-business')) {
        setUserSegment('smallBusiness');
      } else if (utmSource === 'linkedin' && utmCampaign?.includes('enterprise')) {
        setUserSegment('enterprise');
      } else if (referrer.includes('marketingweek.com') || utmCampaign?.includes('marketing')) {
        setUserSegment('marketing');
      } else if (visits > 3) {
        setUserSegment('highIntent');
      } else if (visits > 1) {
        setUserSegment('returning');
      }
    }
    
    // Store updated visit data
    localStorage.setItem('user_visits', visits.toString());
    localStorage.setItem('last_visit_date', new Date().toISOString());
    localStorage.setItem('user_segment', userSegment);
    
  }, []);
  
  // Update segment based on user behavior
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Start tracking time on page
        const startTime = Date.now();
        
        // Check time spent after 30 seconds
        setTimeout(() => {
          const timeSpent = Math.floor((Date.now() - startTime) / 1000);
          
          if (timeSpent > 120 && userSegment === 'general') {
            // User spent over 2 minutes, likely higher intent
            setUserSegment('highIntent');
            localStorage.setItem('user_segment', 'highIntent');
          }
        }, 30000);
      }
    };
    
    // Add event listeners to track meaningful interactions
    window.addEventListener('scroll', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);
    
    return () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [hasInteracted, userSegment]);
  
  // Get current segment data
  const currentSegment = segments[userSegment] || segments.general;
  
  // Allow manual segment selection (for demonstration)
  const changeSegment = (segmentId: string) => {
    if (segments[segmentId]) {
      setUserSegment(segmentId);
      localStorage.setItem('user_segment', segmentId);
    }
  };
  
  return (
    <div className={`user-journey ${className}`}>
      <div className="personalized-content bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="content-section p-8 flex flex-col justify-center">
            <div className="segment-indicator text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              {currentSegment.name}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentSegment.headline}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              {currentSegment.subheadline}
            </p>
            
            {currentSegment.testimonial && (
              <div className="testimonial bg-white rounded-lg p-4 mb-6 shadow-sm">
                <p className="text-gray-600 italic mb-2">"{currentSegment.testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="font-medium">{currentSegment.testimonial.author}</span>
                  <span className="text-gray-500"> — {currentSegment.testimonial.company}</span>
                </div>
              </div>
            )}
            
            <div className="cta-container">
              <a 
                href={currentSegment.cta.url}
                className={`inline-block px-6 py-3 rounded-md font-medium ${
                  currentSegment.cta.variant === 'primary'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : currentSegment.cta.variant === 'secondary'
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                }`}
              >
                {currentSegment.cta.text}
              </a>
            </div>
          </div>
          
          <div className="image-section relative">
            {currentSegment.videoUrl ? (
              <div className="video-container h-full">
                <iframe 
                  src={currentSegment.videoUrl} 
                  className="w-full h-full object-cover"
                  title="Marketing automation demonstration video"
                  allowFullScreen
                ></iframe>
              </div>
            ) : currentSegment.image ? (
              <img 
                src={currentSegment.image} 
                alt={currentSegment.name}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>
      
      {/* Demo controls - would be removed in production */}
      <div className="demo-controls mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="font-medium mb-2">Demo: Change User Segment</h3>
        <div className="flex flex-wrap gap-2">
          {Object.values(segments).map(segment => (
            <button
              key={segment.id}
              onClick={() => changeSegment(segment.id)}
              className={`px-3 py-1 text-sm rounded ${
                userSegment === segment.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {segment.name}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: In production, segments would be determined automatically based on referrer, UTM parameters, and user behavior
        </p>
      </div>
      
      {/* Tracking information - would be removed in production */}
      <div className="tracking-info mt-4 text-xs text-gray-500">
        <p>Visits: {visits} | Last visit: {lastVisitDate ? lastVisitDate.toLocaleDateString() : 'First visit'}</p>
      </div>
    </div>
  );
}