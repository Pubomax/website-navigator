import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Link, useLocation } from 'wouter';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consentPreferences, setConsentPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [location] = useLocation();
  const isPathFrench = location.startsWith('/fr');

  useEffect(() => {
    // Check if consent has already been given
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Show banner after a short delay to not interrupt initial page load experience
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const timestamp = new Date().toISOString();
    const consentData = {
      necessary: true,
      analytics: true, 
      marketing: true,
      preferences: true,
      timestamp: timestamp,
      userIp: "captured-server-side", // This should be replaced server-side
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    
    // If you're using Google Analytics with Consent Mode
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'personalization_storage': 'granted',
        'functionality_storage': 'granted'
      });
    }
    
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const timestamp = new Date().toISOString();
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: timestamp,
      userIp: "captured-server-side", // This should be replaced server-side
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    
    // If you're using Google Analytics with Consent Mode
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied'
      });
    }
    
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const timestamp = new Date().toISOString();
    const consentData = {
      ...consentPreferences,
      timestamp: timestamp,
      userIp: "captured-server-side", // This should be replaced server-side
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    
    // If you're using Google Analytics with Consent Mode
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': consentPreferences.analytics ? 'granted' : 'denied',
        'ad_storage': consentPreferences.marketing ? 'granted' : 'denied',
        'personalization_storage': consentPreferences.preferences ? 'granted' : 'denied',
        'functionality_storage': 'granted' // Always needed for the site to function
      });
    }
    
    setShowBanner(false);
  };

  const togglePreference = (key: keyof typeof consentPreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setConsentPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  const content = {
    title: isPathFrench ? "Votre confidentialité" : "Your Privacy",
    mainDescription: isPathFrench 
      ? "Nous utilisons des cookies pour améliorer votre expérience, personnaliser le contenu et les publicités, fournir des fonctionnalités de médias sociaux et analyser notre trafic. Nous partageons également des informations sur votre utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d'analyse. Conformément à la Loi 25 du Québec, votre consentement explicite est requis avant d'utiliser certains cookies."
      : "We use cookies to enhance your experience, personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners. In accordance with Quebec Law 25, your explicit consent is required before using certain cookies.",
    acceptAll: isPathFrench ? "Accepter tout" : "Accept All",
    rejectAll: isPathFrench ? "Rejeter tout" : "Reject All",
    preferencesText: isPathFrench ? "Préférences" : "Preferences",
    save: isPathFrench ? "Enregistrer" : "Save",
    necessary: {
      title: isPathFrench ? "Nécessaires" : "Necessary",
      description: isPathFrench 
        ? "Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés."
        : "These cookies are necessary for the website to function and cannot be switched off."
    },
    analytics: {
      title: isPathFrench ? "Analytiques" : "Analytics",
      description: isPathFrench 
        ? "Ces cookies nous permettent de mesurer le trafic et d'analyser votre comportement pour améliorer notre site."
        : "These cookies allow us to measure traffic and analyze your behavior to improve our site."
    },
    marketing: {
      title: isPathFrench ? "Marketing" : "Marketing",
      description: isPathFrench 
        ? "Ces cookies sont utilisés pour vous présenter des publicités pertinentes et personnalisées."
        : "These cookies are used to deliver relevant and personalized ads to you."
    },
    preferencesOption: {
      title: isPathFrench ? "Préférences" : "Preferences",
      description: isPathFrench 
        ? "Ces cookies permettent au site de se souvenir de vos préférences et options sélectionnées."
        : "These cookies enable the website to remember your preferences and chosen settings."
    },
    privacyPolicy: isPathFrench ? "Politique de confidentialité" : "Privacy Policy",
    close: isPathFrench ? "Fermer" : "Close"
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center">
      <Card className="w-full max-w-4xl shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-4 md:p-6">
          {!showDetails ? (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{content.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{content.mainDescription}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowBanner(false)}
                  className="flex-shrink-0 ml-2 -mt-1"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">{content.close}</span>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowDetails(true)}
                >
                  {content.preferencesText}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRejectAll}
                >
                  {content.rejectAll}
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={handleAcceptAll}
                >
                  {content.acceptAll}
                </Button>
              </div>
              <div className="flex justify-between pt-2 text-xs text-muted-foreground">
                <Link 
                  href={isPathFrench ? "/fr/privacy" : "/privacy"} 
                  className="hover:underline"
                >
                  {content.privacyPolicy}
                </Link>
                <span>© {new Date().getFullYear()} Minecore Group</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold">{content.preferencesText}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowDetails(false)}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">{content.close}</span>
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{content.necessary.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.necessary.description}</p>
                  </div>
                  <Switch checked disabled />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{content.analytics.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.analytics.description}</p>
                  </div>
                  <Switch 
                    checked={consentPreferences.analytics} 
                    onCheckedChange={() => togglePreference('analytics')} 
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{content.marketing.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.marketing.description}</p>
                  </div>
                  <Switch 
                    checked={consentPreferences.marketing} 
                    onCheckedChange={() => togglePreference('marketing')} 
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{content.preferencesOption.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.preferencesOption.description}</p>
                  </div>
                  <Switch 
                    checked={consentPreferences.preferences} 
                    onCheckedChange={() => togglePreference('preferences')} 
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={handleRejectAll}
                >
                  {content.rejectAll}
                </Button>
                <Button 
                  variant="default" 
                  onClick={handleSavePreferences}
                >
                  {content.save}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// This fixes TypeScript type for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}