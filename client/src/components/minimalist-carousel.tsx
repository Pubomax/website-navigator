"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocation } from "wouter"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useMutation } from "@tanstack/react-query"
import { apiRequest } from "@/lib/queryClient"

interface OfferFormData {
  name: string;
  email: string;
  businessName: string;
  phone: string;
  offerType: string;
}

export function MinimalistCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const items = [
    {
      id: "velocity",
      title: isPathFrench ? "VELOCITY" : "VELOCITY",
      subtitle: isPathFrench 
        ? "La solution tout-en-un pour l'automatisation de vos tâches marketing." 
        : "The all-in-one solution for automating your marketing tasks.",
      price: isPathFrench ? "500$/mois" : "$500/month",
      testimonial: isPathFrench
        ? "L'automatisation nous permet de publier régulièrement du contenu sur nos réseaux sociaux sans y passer des heures. Les rapports hebdomadaires nous aident à suivre nos progrès et à prendre de meilleures décisions."
        : "Automation allows us to post content regularly on our social media without spending hours on it. The weekly reports help us track our progress and make better decisions.",
      author: isPathFrench ? "Marie Dubois, Marketing Manager" : "John Smith, Marketing Manager",
      features: isPathFrench 
        ? ["Publications sur Réseaux Sociaux Automatisées", "Rapports Hebdomadaires Automatisés", "Gestion de Plateforme de Nurturing"]
        : ["Automated Social Media Posting", "Weekly Automated Reporting", "Lead Nurturing Platform Management"],
      cta: isPathFrench 
        ? ["Réserver Votre Consultation", "Voir la Démo de l'Automatisation"]
        : ["Book Your Consultation", "Watch Automation Demo"],
      color: "bg-indigo-50 dark:bg-indigo-950/40",
      gradient: "from-indigo-700 to-purple-700",
    },
    {
      id: "accelerate",
      title: isPathFrench ? "ACCELERATE" : "ACCELERATE",
      subtitle: isPathFrench 
        ? "Répondez automatiquement aux questions et capturez des leads 24h/24." 
        : "Automatically answer questions and capture leads 24/7.",
      price: isPathFrench ? "1500$/mois" : "$1,500/month",
      testimonial: isPathFrench
        ? "Notre chatbot a transformé notre capacité à capturer des leads. Il répond aux questions de base même quand notre équipe n'est pas disponible, et nous envoie les informations des visiteurs intéressés directement dans notre CRM."
        : "Our chatbot has transformed our ability to capture leads. It answers basic questions even when our team isn't available, and sends information from interested visitors directly to our CRM.",
      author: isPathFrench ? "Thomas Martin, PDG" : "Sarah Johnson, CEO",
      features: isPathFrench 
        ? ["Chatbot sur Votre Site Web 24/7", "Capture Automatique de Leads", "Transfert Simple vers un Humain"]
        : ["Chatbot on Your Website 24/7", "Automatic Lead Capture", "Simple Human Handoff"],
      cta: isPathFrench 
        ? ["Réserver Votre Consultation", "Voir la Démo de l'Automatisation"]
        : ["Book Your Consultation", "Watch Automation Demo"],
      color: "bg-emerald-50 dark:bg-emerald-950/40",
      gradient: "from-emerald-600 to-green-700",
    },
    {
      id: "dominate",
      title: isPathFrench ? "DOMINATE" : "DOMINATE",
      subtitle: isPathFrench 
        ? "Nous recherchons et vous livrons des prospects qualifiés chaque semaine." 
        : "We research and deliver qualified prospects to you every week.",
      price: isPathFrench ? "3500$/mois" : "$3,500/month",
      testimonial: isPathFrench
        ? "Le service nous fournit une source constante de leads qualifiés que nous n'aurions jamais pu trouver par nous-mêmes. Les réseaux sociaux, LinkedIn et les annuaires locaux sont tous explorés pour nous trouver les meilleurs prospects."
        : "The service provides us with a constant source of qualified leads we would never have found on our own. Social media, LinkedIn, and local directories are all explored to find us the best prospects.",
      author: isPathFrench ? "Philippe Leclerc, Directeur des Ventes" : "Michael Brown, Sales Director",
      features: isPathFrench 
        ? ["Recherche sur Réseaux Sociaux", "Collecte de Prospects LinkedIn", "Recherche d'Entreprises Locales"]
        : ["Social Media Lead Finder", "LinkedIn Prospect Collection", "Local Business Search"],
      cta: isPathFrench 
        ? ["Réserver Votre Consultation"]
        : ["Book Your Consultation"],
      color: "bg-purple-50 dark:bg-purple-950/40",
      gradient: "from-purple-700 to-indigo-700",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 pr-6 md:basis-4/5 lg:basis-3/4">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent
                  className={`${item.color} flex flex-col items-start justify-between p-8 transition-all duration-200 relative h-full ${
                    current === index ? "ring-2 ring-primary/20 scale-[1.02]" : "opacity-85"
                  }`}
                >
                  {/* Decorative gradient banner at the top */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  
                  <div className="w-full pt-4">
                    <div className="uppercase text-xs font-extrabold tracking-widest mb-2 bg-primary/10 px-3 py-1 rounded inline-block">
                      {item.title}
                    </div>
                    <h2 className="text-xl font-bold tracking-tight md:text-2xl mt-2">{item.subtitle}</h2>
                    <p className="mt-4 text-xl font-semibold">{item.price}</p>

                    <div className="mt-6 border-l-2 border-primary/50 pl-3 italic text-xs text-muted-foreground md:text-sm">
                      "{item.testimonial}"<p className="mt-1 not-italic font-medium text-foreground">{item.author}</p>
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {item.features?.map((feature, i) => (
                        <li key={i} className="text-xs md:text-sm flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-8 flex ${item.cta?.length === 1 ? "justify-center" : "flex-col xs:flex-row gap-3"} w-full`}
                  >
                    <OfferPopupForm offerType={`${item.title} - ${item.price}`}>
                      <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-full flex items-center justify-center">
                        {item.cta?.[0]} <ArrowRight className="ml-1.5 h-4 w-4" />
                      </button>
                    </OfferPopupForm>
                    
                    {item.cta?.length > 1 && (
                      <button 
                        className="px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        onClick={() => {
                          // Future video modal implementation
                          alert("Video will be available soon!"); // Temporary placeholder
                        }}
                      >
                        {item.cta?.[1]}
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-center gap-2">
          <CarouselPrevious variant="ghost" size="icon" className="static h-8 w-8 translate-x-0 translate-y-0">
            <ChevronLeft className="h-4 w-4" />
          </CarouselPrevious>

          <div className="flex gap-1">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index ? "w-6 bg-foreground" : "w-1.5 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselNext variant="ghost" size="icon" className="static h-8 w-8 translate-x-0 translate-y-0">
            <ChevronRight className="h-4 w-4" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}

// Offer form component
function OfferPopupForm({ children, offerType = "Standard Package $500/month" }: { 
  children: React.ReactNode;
  offerType?: string;
}) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const [formData, setFormData] = useState<OfferFormData>({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    offerType
  });
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: OfferFormData) => {
      const res = await apiRequest("POST", "/api/contact-messages", {
        ...data,
        type: "offer_inquiry",
        message: `Package Inquiry: ${data.offerType}`,
        subject: `Package Inquiry: ${data.offerType}`
      });
      return await res.json();
    },
    onSuccess: () => {
      setFormSubmitted(true);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      businessName: "",
      phone: "",
      offerType
    });
    setFormSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) {
        setTimeout(resetForm, 300); // Reset form after dialog closing animation
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!formSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">
                {isPathFrench ? "Commencer avec le pack d'automatisation" : "Get Started with Automation Package"}
              </DialogTitle>
              <DialogDescription>
                {isPathFrench 
                  ? "Laissez vos coordonnées et nous vous contacterons pour discuter de votre automatisation." 
                  : "Leave your details and we'll contact you to discuss your automation."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name" className="text-left">
                  {isPathFrench ? "Nom Complet" : "Full Name"} *
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={isPathFrench ? "Votre nom" : "Your name"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email" className="text-left">
                  {isPathFrench ? "Email Professionnel" : "Business Email"} *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={isPathFrench ? "vous@entreprise.com" : "you@company.com"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="businessName" className="text-left">
                  {isPathFrench ? "Nom de l'Entreprise" : "Business Name"} *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder={isPathFrench ? "Votre entreprise" : "Your company"}
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="phone" className="text-left">
                  {isPathFrench ? "Numéro de Téléphone" : "Phone Number"} *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <DialogFooter className="mt-6">
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isPathFrench ? "Envoi en cours..." : "Submitting..."}
                    </>
                  ) : (
                    <>
                      {isPathFrench ? "Soumettre" : "Submit"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="py-6 text-center"
          >
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-xl mb-2">
              {isPathFrench ? "Merci pour votre intérêt !" : "Thank you for your interest!"}
            </DialogTitle>
            <DialogDescription className="mb-6">
              {isPathFrench
                ? "Notre équipe vous contactera sous peu pour discuter de nos services d'automatisation."
                : "Our team will contact you shortly to discuss our automation services."}
            </DialogDescription>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {isPathFrench ? "Fermer" : "Close"}
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}