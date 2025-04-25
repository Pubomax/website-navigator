import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  BuildingIcon, 
  ClipboardList, 
  UserIcon,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Contactez-nous" : "Contact Us",
  subtitle: isPathFrench 
    ? "Entrez en contact pour commencer votre parcours de transformation numérique"
    : "Get in touch to start your digital transformation journey",
  steps: [
    {
      title: isPathFrench ? "Informations sur l'entreprise" : "Company Information",
      description: isPathFrench ? "Parlez-nous de votre entreprise" : "Tell us about your company",
      icon: BuildingIcon,
    },
    {
      title: isPathFrench ? "Vos défis" : "Your Challenges",
      description: isPathFrench ? "Quels sont vos principaux défis?" : "What challenges are you facing?",
      icon: ClipboardList,
    },
    {
      title: isPathFrench ? "Informations de contact" : "Contact Information",
      description: isPathFrench ? "Comment pouvons-nous vous contacter?" : "How can we reach you?",
      icon: UserIcon,
    },
  ],
  form: {
    // Step 1: Company Information
    companyName: {
      label: isPathFrench ? "Nom de l'entreprise" : "Company Name",
      placeholder: isPathFrench ? "Votre entreprise" : "Your company name"
    },
    industry: {
      label: isPathFrench ? "Industrie" : "Industry",
      placeholder: isPathFrench ? "Sélectionnez votre industrie" : "Select your industry",
      options: [
        { value: "technology", label: isPathFrench ? "Technologie" : "Technology" },
        { value: "healthcare", label: isPathFrench ? "Santé" : "Healthcare" },
        { value: "finance", label: isPathFrench ? "Finance" : "Finance" },
        { value: "manufacturing", label: isPathFrench ? "Manufacture" : "Manufacturing" },
        { value: "retail", label: isPathFrench ? "Commerce de détail" : "Retail" },
        { value: "education", label: isPathFrench ? "Éducation" : "Education" },
        { value: "government", label: isPathFrench ? "Gouvernement" : "Government" },
        { value: "other", label: isPathFrench ? "Autre" : "Other" }
      ]
    },
    companySize: {
      label: isPathFrench ? "Taille de l'entreprise" : "Company Size",
      placeholder: isPathFrench ? "Sélectionnez la taille" : "Select company size",
      options: [
        { value: "1-10", label: "1-10" },
        { value: "11-50", label: "11-50" },
        { value: "51-200", label: "51-200" },
        { value: "201-500", label: "201-500" },
        { value: "501-1000", label: "501-1000" },
        { value: "1000+", label: "1000+" }
      ]
    },
    annualRevenue: {
      label: isPathFrench ? "Revenu annuel (optionnel)" : "Annual Revenue (optional)",
      placeholder: isPathFrench ? "Sélectionnez le revenu" : "Select revenue",
      options: [
        { value: "less-than-1m", label: isPathFrench ? "Moins de 1M $" : "Less than $1M" },
        { value: "1m-5m", label: isPathFrench ? "1M $ - 5M $" : "$1M - $5M" },
        { value: "5m-10m", label: isPathFrench ? "5M $ - 10M $" : "$5M - $10M" },
        { value: "10m-50m", label: isPathFrench ? "10M $ - 50M $" : "$10M - $50M" },
        { value: "50m-100m", label: isPathFrench ? "50M $ - 100M $" : "$50M - $100M" },
        { value: "more-than-100m", label: isPathFrench ? "Plus de 100M $" : "More than $100M" }
      ]
    },
    websiteUrl: {
      label: isPathFrench ? "Site Web (optionnel)" : "Website URL (optional)",
      placeholder: isPathFrench ? "https://votre-site.com" : "https://your-website.com"
    },
    
    // Step 2: Business Challenges
    businessChallenges: {
      label: isPathFrench ? "Défis commerciaux" : "Business Challenges",
      placeholder: isPathFrench ? "Décrivez les principaux défis que votre entreprise rencontre actuellement" : "Describe the main challenges your business is currently facing"
    },
    currentSolutions: {
      label: isPathFrench ? "Solutions actuelles (optionnel)" : "Current Solutions (optional)",
      placeholder: isPathFrench ? "Quelles solutions utilisez-vous actuellement?" : "What solutions are you currently using?"
    },
    desiredOutcomes: {
      label: isPathFrench ? "Résultats souhaités" : "Desired Outcomes",
      placeholder: isPathFrench ? "Quels résultats espérez-vous obtenir?" : "What outcomes are you hoping to achieve?"
    },
    timeline: {
      label: isPathFrench ? "Délai (optionnel)" : "Timeline (optional)",
      placeholder: isPathFrench ? "Quel est votre délai pour mettre en œuvre une solution?" : "What is your timeline for implementing a solution?",
      options: [
        { value: "immediate", label: isPathFrench ? "Immédiat (1-2 semaines)" : "Immediate (1-2 weeks)" },
        { value: "short-term", label: isPathFrench ? "Court terme (1-3 mois)" : "Short term (1-3 months)" },
        { value: "medium-term", label: isPathFrench ? "Moyen terme (3-6 mois)" : "Medium term (3-6 months)" },
        { value: "long-term", label: isPathFrench ? "Long terme (6+ mois)" : "Long term (6+ months)" }
      ]
    },
    budget: {
      label: isPathFrench ? "Budget (optionnel)" : "Budget (optional)",
      placeholder: isPathFrench ? "Quel est votre budget pour ce projet?" : "What is your budget for this project?",
      options: [
        { value: "less-than-5k", label: isPathFrench ? "Moins de 5k $" : "Less than $5k" },
        { value: "5k-20k", label: isPathFrench ? "5k $ - 20k $" : "$5k - $20k" },
        { value: "20k-50k", label: isPathFrench ? "20k $ - 50k $" : "$20k - $50k" },
        { value: "50k-100k", label: isPathFrench ? "50k $ - 100k $" : "$50k - $100k" },
        { value: "more-than-100k", label: isPathFrench ? "Plus de 100k $" : "More than $100k" }
      ]
    },
    
    // Step 3: Contact Information
    contactName: {
      label: isPathFrench ? "Nom complet" : "Full Name",
      placeholder: isPathFrench ? "Votre nom complet" : "Your full name"
    },
    contactEmail: {
      label: isPathFrench ? "Email professionnel" : "Business Email",
      placeholder: isPathFrench ? "votre@email.com" : "your@email.com"
    },
    contactPhone: {
      label: isPathFrench ? "Téléphone (optionnel)" : "Phone (optional)",
      placeholder: isPathFrench ? "Votre numéro de téléphone" : "Your phone number"
    },
    contactJobTitle: {
      label: isPathFrench ? "Titre du poste (optionnel)" : "Job Title (optional)",
      placeholder: isPathFrench ? "Votre titre de poste" : "Your job title"
    },
    preferredContactMethod: {
      label: isPathFrench ? "Méthode de contact préférée" : "Preferred Contact Method",
      options: [
        { value: "email", label: isPathFrench ? "Email" : "Email" },
        { value: "phone", label: isPathFrench ? "Téléphone" : "Phone" },
        { value: "either", label: isPathFrench ? "Les deux" : "Either" }
      ]
    },
    additionalNotes: {
      label: isPathFrench ? "Notes supplémentaires (optionnel)" : "Additional Notes (optional)",
      placeholder: isPathFrench ? "Toute information supplémentaire que vous souhaitez partager" : "Any additional information you'd like to share"
    },
  },
  buttons: {
    next: isPathFrench ? "Suivant" : "Next",
    previous: isPathFrench ? "Précédent" : "Previous",
    submit: isPathFrench ? "Soumettre" : "Submit",
    submitting: isPathFrench ? "Soumission en cours..." : "Submitting..."
  },
  toast: {
    success: {
      title: isPathFrench ? "Formulaire soumis avec succès" : "Form submitted successfully",
      description: isPathFrench ? "Nous vous contacterons sous peu pour discuter de vos besoins." : "We'll contact you shortly to discuss your needs."
    },
    error: {
      title: isPathFrench ? "Erreur" : "Error",
      description: isPathFrench ? "Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer." : "An error occurred while submitting the form. Please try again."
    }
  },
  contactInfo: [
    {
      icon: Phone,
      label: isPathFrench ? "Téléphone" : "Phone",
      value: "+1 (514) 603-0598",
    },
    {
      icon: Mail,
      label: isPathFrench ? "Email" : "Email",
      value: "hello@minecoregroup.com",
    },
    {
      icon: MapPin,
      label: isPathFrench ? "Adresse" : "Address",
      value: isPathFrench 
        ? "3580 Boulevard Saint Elzéar Ouest, Laval, QC H7P 0L7"
        : "3580 Boulevard Saint Elzear Ouest, Laval, QC H7P 0L7",
    },
  ],
  success: {
    title: isPathFrench ? "Merci pour votre soumission!" : "Thank you for your submission!",
    message: isPathFrench 
      ? "Votre demande a été reçue. Notre équipe examinera vos informations et vous contactera sous peu."
      : "Your request has been received. Our team will review your information and contact you shortly."
  }
});

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      // Step 1: Company Information
      companyName: "",
      industry: "",
      companySize: "",
      annualRevenue: "",
      websiteUrl: "",
      
      // Step 2: Business Challenges
      businessChallenges: "",
      currentSolutions: "",
      desiredOutcomes: "",
      timeline: "",
      budget: "",
      
      // Step 3: Contact Information
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactJobTitle: "",
      preferredContactMethod: "",
      additionalNotes: "",
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: string[] = [];
    
    switch (currentStep) {
      case 0: // Company Information
        fieldsToValidate = ["companyName", "industry", "companySize"];
        break;
      case 1: // Business Challenges
        fieldsToValidate = ["businessChallenges", "desiredOutcomes"];
        break;
    }
    
    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) setCurrentStep(prev => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: content.toast.success.title,
        description: content.toast.success.description,
      });
      setIsSubmitted(true);
    },
    onError: () => {
      toast({
        title: content.toast.error.title,
        description: content.toast.error.description,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <main className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">{isPathFrench ? "Coordonnées" : "Contact Details"}</h2>
              <div className="space-y-6 mb-8">
                {content.contactInfo.map((info) => (
                  <Card key={info.label}>
                    <CardContent className="flex items-center p-6">
                      <info.icon className="h-6 w-6 text-primary mr-4" />
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {info.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Step indicators for desktop */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-medium mb-4">{isPathFrench ? "Votre Progression" : "Your Progress"}</h3>
                <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                  {content.steps.map((step, index) => (
                    <li key={index} className="mb-10 ml-6">
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white 
                        ${index < currentStep 
                          ? 'bg-green-500 text-white' 
                          : index === currentStep 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-500'}`}>
                        {index < currentStep ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </span>
                      <h3 className={`font-medium ${index === currentStep ? 'text-primary' : ''}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Mobile steps indicator */}
              <div className="lg:hidden mb-6">
                <div className="flex justify-between mb-2">
                  {content.steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                        ${index < currentStep 
                          ? 'bg-green-500 text-white' 
                          : index === currentStep 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-500'}`}>
                        {index < currentStep ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs whitespace-nowrap">{step.title}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / content.steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {isSubmitted ? (
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6 pb-6 text-center">
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-green-500" />
                    <h2 className="text-2xl font-bold mb-2">{content.success.title}</h2>
                    <p className="text-muted-foreground mb-6">{content.success.message}</p>
                    <Button onClick={() => window.location.href = '/'}>
                      {isPathFrench ? "Retour à l'accueil" : "Back to Home"}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>{content.steps[currentStep].title}</CardTitle>
                    <CardDescription>{content.steps[currentStep].description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {currentStep === 0 && (
                          <div className="space-y-5">
                            <FormField
                              control={form.control}
                              name="companyName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.companyName.label}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={content.form.companyName.placeholder} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="industry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.industry.label}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={content.form.industry.placeholder} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {content.form.industry.options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="companySize"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.companySize.label}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={content.form.companySize.placeholder} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {content.form.companySize.options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="annualRevenue"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.annualRevenue.label}</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder={content.form.annualRevenue.placeholder} />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {content.form.annualRevenue.options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="websiteUrl"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.websiteUrl.label}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={content.form.websiteUrl.placeholder} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                        
                        {currentStep === 1 && (
                          <div className="space-y-5">
                            <FormField
                              control={form.control}
                              name="businessChallenges"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.businessChallenges.label}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder={content.form.businessChallenges.placeholder} 
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="currentSolutions"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.currentSolutions.label}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder={content.form.currentSolutions.placeholder} 
                                      className="min-h-[80px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="desiredOutcomes"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.desiredOutcomes.label}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder={content.form.desiredOutcomes.placeholder} 
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormField
                                control={form.control}
                                name="timeline"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{content.form.timeline.label}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder={content.form.timeline.placeholder} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {content.form.timeline.options.map(option => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{content.form.budget.label}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder={content.form.budget.placeholder} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {content.form.budget.options.map(option => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        )}
                        
                        {currentStep === 2 && (
                          <div className="space-y-5">
                            <FormField
                              control={form.control}
                              name="contactName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.contactName.label}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={content.form.contactName.placeholder} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="contactEmail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.contactEmail.label}</FormLabel>
                                  <FormControl>
                                    <Input placeholder={content.form.contactEmail.placeholder} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormField
                                control={form.control}
                                name="contactPhone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{content.form.contactPhone.label}</FormLabel>
                                    <FormControl>
                                      <Input placeholder={content.form.contactPhone.placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="contactJobTitle"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{content.form.contactJobTitle.label}</FormLabel>
                                    <FormControl>
                                      <Input placeholder={content.form.contactJobTitle.placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <FormField
                              control={form.control}
                              name="preferredContactMethod"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel>{content.form.preferredContactMethod.label}</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      {content.form.preferredContactMethod.options.map(option => (
                                        <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                          <FormControl>
                                            <RadioGroupItem value={option.value} />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                            {option.label}
                                          </FormLabel>
                                        </FormItem>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="additionalNotes"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{content.form.additionalNotes.label}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder={content.form.additionalNotes.placeholder} 
                                      className="min-h-[80px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button
                      variant="outline"
                      onClick={previousStep}
                      disabled={currentStep === 0}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {content.buttons.previous}
                    </Button>
                    
                    {currentStep < content.steps.length - 1 ? (
                      <Button onClick={nextStep}>
                        {content.buttons.next}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>{content.buttons.submitting}</>
                        ) : (
                          <>
                            {content.buttons.submit}
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}