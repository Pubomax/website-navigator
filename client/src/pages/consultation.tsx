import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, Link } from "wouter";
import { PageTitle } from "@/components/page-title";
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
  BuildingIcon, 
  ClipboardList, 
  UserIcon,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  BrainCircuit,
  Rocket,
  LineChart,
  Clock,
} from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";

// Business challenges that the user can select
const businessChallenges = {
  en: [
    { id: "lead_generation", label: "Finding Quality Leads", icon: UserIcon },
    { id: "conversion_rates", label: "Low Conversion Rates", icon: LineChart },
    { id: "marketing_efficiency", label: "Marketing Inefficiency", icon: Clock },
    { id: "sales_cycle", label: "Long Sales Cycles", icon: Clock },
    { id: "revenue_growth", label: "Revenue Growth", icon: DollarSign },
    { id: "customer_engagement", label: "Poor Customer Engagement", icon: Mail },
    { id: "process_automation", label: "Manual Processes", icon: ClipboardList },
    { id: "other", label: "Other Challenge", icon: BrainCircuit },
  ],
  fr: [
    { id: "lead_generation", label: "Trouver des Leads de Qualité", icon: UserIcon },
    { id: "conversion_rates", label: "Faibles Taux de Conversion", icon: LineChart },
    { id: "marketing_efficiency", label: "Inefficacité Marketing", icon: Clock },
    { id: "sales_cycle", label: "Cycles de Vente Longs", icon: Clock },
    { id: "revenue_growth", label: "Croissance des Revenus", icon: DollarSign },
    { id: "customer_engagement", label: "Faible Engagement Client", icon: Mail },
    { id: "process_automation", label: "Processus Manuels", icon: ClipboardList },
    { id: "other", label: "Autre Défi", icon: BrainCircuit },
  ]
};

// Revenue ranges with labels
const revenueRanges = {
  en: [
    { value: "under_100k", label: "Under $100K" },
    { value: "100k_500k", label: "$100K - $500K" },
    { value: "500k_1m", label: "$500K - $1M" },
    { value: "1m_5m", label: "$1M - $5M" },
    { value: "5m_10m", label: "$5M - $10M" },
    { value: "10m_50m", label: "$10M - $50M" },
    { value: "over_50m", label: "More than $50M" },
  ],
  fr: [
    { value: "under_100k", label: "Moins de 100K$" },
    { value: "100k_500k", label: "100K$ - 500K$" },
    { value: "500k_1m", label: "500K$ - 1M$" },
    { value: "1m_5m", label: "1M$ - 5M$" },
    { value: "5m_10m", label: "5M$ - 10M$" },
    { value: "10m_50m", label: "10M$ - 50M$" },
    { value: "over_50m", label: "Plus de 50M$" },
  ]
};

// Form steps
enum FormStep {
  BusinessChallenge = 0,
  BusinessDetails = 1,
  ContactDetails = 2,
  Success = 3,
}

export default function Consultation() {
  const [, navigate] = useLocation();
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.BusinessChallenge);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  // Form validation with React Hook Form
  // Define a form schema that matches the actual fields we're using
  const formSchema = insertContactMessageSchema
    .extend({
      employeeCount: z.string(),
      businessChallenge: z.string().optional(),
      contactJobTitle: z.string().optional(),
      additionalNotes: z.string().optional(),
      message: z.string().optional(),
      subject: z.string().optional(),
      bestTimeToContact: z.string().optional(),
    });
  
  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      companyName: "",
      businessChallenge: "",
      annualRevenue: "",
      employeeCount: "",
      websiteUrl: "",
      currentSolutions: "",
      contactJobTitle: "",
      additionalNotes: "",
      industry: "",
      companySize: "",
      businessChallenges: [],
      desiredOutcomes: "",
      preferredContactMethod: "email", // Default to email
      bestTimeToContact: ""
    },
  });

  // Handle form submission with mutation
  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: (response) => {
      setCurrentStep(FormStep.Success);
      form.reset();
      
      // Display toast notification if email sending failed
      if (response && response.emailSent === false) {
        toast({
          title: isPathFrench 
            ? "Demande reçue" 
            : "Request received",
          description: isPathFrench 
            ? "Votre demande a été enregistrée. Cependant, nous n'avons pas pu vous envoyer un email de confirmation. Notre équipe vous contactera bientôt."
            : "Your request has been recorded. However, we couldn't send you a confirmation email. Our team will contact you soon.",
          duration: 6000,
        });
      }
    },
    onError: (error) => {
      toast({
        title: isPathFrench 
          ? "Erreur lors de l'envoi" 
          : "Error submitting form",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    // Combine selected challenges into a string
    data.businessChallenge = selectedChallenges.join(", ");
    
    // If there are no selected challenges, set a default
    if (!data.businessChallenge || data.businessChallenge.trim() === "") {
      data.businessChallenge = "Not specified";
    }
    
    // Set businessChallenges array for schema compliance
    data.businessChallenges = selectedChallenges;
    
    // Set a default value for required fields if they are missing
    if (!data.industry) {
      data.industry = "Not specified";
    }
    
    if (!data.companySize) {
      data.companySize = data.employeeCount; // Use employee count as company size
    }
    
    if (!data.desiredOutcomes) {
      data.desiredOutcomes = "Increase revenue and reduce workload";
    }
    
    // Create a message from the challenges for the standard contact message field
    data.message = `Business Challenges: ${data.businessChallenge}
Annual Revenue: ${data.annualRevenue}
Employee Count: ${data.employeeCount}
Preferred Contact Method: ${data.preferredContactMethod}
${data.bestTimeToContact ? `Best Time to Contact: ${data.bestTimeToContact}` : ""}
${data.additionalNotes ? `\nAdditional Notes: ${data.additionalNotes}` : ""}`;

    // Cast to InsertContactMessage since our API expects that type
    mutation.mutate(data as unknown as InsertContactMessage);
  };

  const handleChallengeSelection = (challengeId: string) => {
    setSelectedChallenges((prev) => {
      if (prev.includes(challengeId)) {
        return prev.filter(id => id !== challengeId);
      } else {
        return [...prev, challengeId];
      }
    });
  };

  const nextStep = async () => {
    if (currentStep === FormStep.BusinessChallenge) {
      // For first step, only need to have at least one challenge selected
      if (selectedChallenges.length === 0) {
        toast({
          title: isPathFrench 
            ? "Sélection requise" 
            : "Selection required",
          description: isPathFrench 
            ? "Veuillez sélectionner au moins un défi commercial." 
            : "Please select at least one business challenge.",
          variant: "destructive",
        });
        return;
      }
    } 
    else if (currentStep === FormStep.BusinessDetails) {
      // Validate business details step
      const annualRevenueValid = await form.trigger("annualRevenue");
      const employeeCountValid = await form.trigger("employeeCount");
      const companyNameValid = await form.trigger("companyName");
      
      if (!annualRevenueValid || !employeeCountValid || !companyNameValid) {
        return;
      }
    }
    else if (currentStep === FormStep.ContactDetails) {
      // Validate contact details step before submitting
      const contactNameValid = await form.trigger("contactName");
      const contactEmailValid = await form.trigger("contactEmail");
      const contactPhoneValid = await form.trigger("contactPhone");
      const preferredContactMethodValid = await form.trigger("preferredContactMethod");
      
      if (!contactNameValid || !contactEmailValid || !contactPhoneValid || !preferredContactMethodValid) {
        return;
      }
      
      // If all validations pass, submit the form directly
      form.handleSubmit(onSubmit)();
      return; // Don't proceed to next step as handleSubmit will handle it
    }
    
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <main className="py-16 md:py-24">
      <PageTitle 
        pageKey="consultation" 
        customTitle={isPathFrench ? "Consultation Gratuite pour PME à Montréal | Groupe Minecore" : "Free Montreal Small Business Consultation | Minecore Group"}
        customDescription={isPathFrench ? "Obtenez une consultation gratuite pour votre PME à Montréal. Solutions d'automatisation IA pour augmenter vos revenus et travailler moins." : "Get a free consultation for your Montreal small business. AI automation solutions to increase revenue and work less."}
        keywords="Montreal business automation, free consultation Montreal, small business automation consultation, AI business solutions Montreal, sales automation Quebec"
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 px-3 py-1">
              <BrainCircuit className="mr-1 h-3.5 w-3.5 text-primary" />
              {isPathFrench ? "Consultation Stratégique" : "Strategic Consultation"}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {isPathFrench 
                ? "Transformez Votre Business Avec L'IA" 
                : "Transform Your Business With AI"}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {isPathFrench
                ? "Commencez votre parcours vers plus de revenus, moins de travail, et une croissance automatisée."
                : "Start your journey to more revenue, less work, and automated growth."}
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Business Challenges */}
              {currentStep === FormStep.BusinessChallenge && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/10 shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ClipboardList className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>
                          {isPathFrench 
                            ? "Quels défis souhaitez-vous relever ?" 
                            : "What challenges do you want to solve?"}
                        </CardTitle>
                      </div>
                      <CardDescription>
                        {isPathFrench 
                          ? "Sélectionnez les défis commerciaux que vous souhaitez résoudre" 
                          : "Select the business challenges you want to address"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(isPathFrench ? businessChallenges.fr : businessChallenges.en).map((challenge) => (
                          <button
                            key={challenge.id}
                            type="button"
                            onClick={() => handleChallengeSelection(challenge.id)}
                            className={`flex items-start gap-3 p-4 rounded-lg border ${
                              selectedChallenges.includes(challenge.id)
                                ? "border-primary bg-primary/5"
                                : "border-input hover:border-primary/50 hover:bg-primary/5"
                            } transition-colors text-left`}
                          >
                            <div className={`p-2 rounded-full ${
                              selectedChallenges.includes(challenge.id)
                                ? "bg-primary/20"
                                : "bg-muted"
                            }`}>
                              <challenge.icon className={`h-5 w-5 ${
                                selectedChallenges.includes(challenge.id)
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`} />
                            </div>
                            <div>
                              <p className="font-medium">{challenge.label}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end border-t p-6">
                      <Button onClick={nextStep} disabled={selectedChallenges.length === 0}>
                        {isPathFrench ? "Continuer" : "Continue"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Business Details */}
              {currentStep === FormStep.BusinessDetails && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/10 shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <BuildingIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>
                          {isPathFrench ? "Détails de l'Entreprise" : "Business Details"}
                        </CardTitle>
                      </div>
                      <CardDescription>
                        {isPathFrench 
                          ? "Parlez-nous de votre entreprise" 
                          : "Tell us about your business"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Nom de l'Entreprise" : "Company Name"} *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={isPathFrench ? "Votre entreprise" : "Your company"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="annualRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Chiffre d'Affaires Annuel" : "Annual Revenue"} *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue 
                                    placeholder={
                                      isPathFrench 
                                        ? "Sélectionnez une fourchette de revenus" 
                                        : "Select a revenue range"
                                    } 
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {(isPathFrench ? revenueRanges.fr : revenueRanges.en).map((range) => (
                                  <SelectItem key={range.value} value={range.value}>
                                    {range.label}
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
                        name="employeeCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Nombre d'Employés" : "Number of Employees"} *
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={
                                    isPathFrench 
                                      ? "Taille de l'entreprise" 
                                      : "Company size"
                                  } />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-10">1-10</SelectItem>
                                <SelectItem value="11-50">11-50</SelectItem>
                                <SelectItem value="51-200">51-200</SelectItem>
                                <SelectItem value="201-500">201-500</SelectItem>
                                <SelectItem value="501+">501+</SelectItem>
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
                            <FormLabel>
                              {isPathFrench ? "Site Web" : "Website"}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={isPathFrench ? "https://votresite.com" : "https://yourwebsite.com"} 
                                {...field} 
                                value={field.value || ''}
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
                            <FormLabel>
                              {isPathFrench ? "Solutions Actuelles" : "Current Solutions"}
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={
                                  isPathFrench
                                    ? "Décrivez les outils ou solutions que vous utilisez actuellement"
                                    : "Describe tools or solutions you're currently using"
                                }
                                className="min-h-24"
                                {...field}
                                value={field.value || ''}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {isPathFrench ? "Précédent" : "Back"}
                      </Button>
                      <Button onClick={nextStep}>
                        {isPathFrench ? "Continuer" : "Continue"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Contact Details */}
              {currentStep === FormStep.ContactDetails && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-primary/10 shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <UserIcon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>
                          {isPathFrench ? "Vos Coordonnées" : "Your Contact Details"}
                        </CardTitle>
                      </div>
                      <CardDescription>
                        {isPathFrench 
                          ? "Comment pouvons-nous vous contacter ?" 
                          : "How can we reach you?"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Nom Complet" : "Full Name"} *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={isPathFrench ? "Votre nom" : "Your name"}
                                {...field}
                                value={field.value || ""}
                              />
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
                            <FormLabel>
                              {isPathFrench ? "Email Professionnel" : "Business Email"} *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={isPathFrench ? "vous@entreprise.com" : "you@company.com"}
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Numéro de Téléphone" : "Phone Number"} *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                {...field}
                                value={field.value || ""}
                              />
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
                            <FormLabel>
                              {isPathFrench ? "Poste / Fonction" : "Job Title"}
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder={isPathFrench ? "Votre poste" : "Your position"} 
                                {...field} 
                                value={field.value || ''}
                              />
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
                            <FormLabel>
                              {isPathFrench ? "Notes Supplémentaires" : "Additional Notes"}
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={
                                  isPathFrench
                                    ? "Informations supplémentaires pour nous aider à comprendre vos besoins"
                                    : "Additional information to help us understand your needs"
                                }
                                className="min-h-24"
                                {...field}
                                value={field.value || ''}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredContactMethod"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>
                              {isPathFrench ? "Méthode de Contact Préférée" : "Preferred Contact Method"} *
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="email" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {isPathFrench ? "Email" : "Email"}
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="phone" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {isPathFrench ? "Téléphone" : "Phone"}
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="bestTimeToContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {isPathFrench ? "Meilleur Moment pour Vous Contacter" : "Best Time to Contact You"}
                            </FormLabel>
                            <FormDescription>
                              {isPathFrench 
                                ? "Quand préférez-vous être contacté? (Ex: Matin, Après-midi, Soir)" 
                                : "When do you prefer to be contacted? (E.g., Morning, Afternoon, Evening)"}
                            </FormDescription>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue 
                                      placeholder={
                                        isPathFrench 
                                          ? "Sélectionnez le meilleur moment" 
                                          : "Select best time"
                                      } 
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="morning">
                                    {isPathFrench ? "Matin (9h - 12h)" : "Morning (9AM - 12PM)"}
                                  </SelectItem>
                                  <SelectItem value="early_afternoon">
                                    {isPathFrench ? "Début d'après-midi (12h - 15h)" : "Early Afternoon (12PM - 3PM)"}
                                  </SelectItem>
                                  <SelectItem value="late_afternoon">
                                    {isPathFrench ? "Fin d'après-midi (15h - 18h)" : "Late Afternoon (3PM - 6PM)"}
                                  </SelectItem>
                                  <SelectItem value="evening">
                                    {isPathFrench ? "Soir (Après 18h)" : "Evening (After 6PM)"}
                                  </SelectItem>
                                  <SelectItem value="any_business_hours">
                                    {isPathFrench ? "N'importe quand (Heures de bureau)" : "Any time (Business hours)"}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {isPathFrench ? "Précédent" : "Back"}
                      </Button>
                      <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? (
                          <>
                            {isPathFrench ? "Envoi en cours..." : "Submitting..."}
                          </>
                        ) : (
                          <>
                            {isPathFrench ? "Soumettre" : "Submit"}
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )}

              {/* Success Message */}
              {currentStep === FormStep.Success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-primary/10 shadow-md text-center">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {isPathFrench ? "Demande Envoyée !" : "Request Submitted!"}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {isPathFrench
                          ? "Merci pour votre intérêt. Notre équipe vous contactera sous peu pour discuter de vos besoins."
                          : "Thank you for your interest. Our team will contact you shortly to discuss your needs."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <div className="text-sm text-muted-foreground mt-4 mb-6 max-w-md mx-auto">
                        {isPathFrench
                          ? "Un membre de notre équipe vous contactera pendant votre créneau horaire préféré pour discuter de la façon dont nous pouvons vous aider à augmenter vos revenus et à réduire votre charge de travail."
                          : "A member of our team will contact you during your preferred time slot to discuss how we can help you increase revenue and reduce your workload."}
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                        <Button 
                          asChild
                          variant="outline"
                        >
                          <Link to={isPathFrench ? "/fr" : "/"}>
                            {isPathFrench ? "Retour à l'Accueil" : "Back to Home"}
                          </Link>
                        </Button>
                        <Button 
                          asChild
                        >
                          <Link to={isPathFrench ? "/fr/solutions" : "/solutions"}>
                            {isPathFrench ? "Explorer Nos Solutions" : "Explore Our Solutions"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </form>
          </Form>
          
          {/* Benefits section displayed alongside the form */}
          {currentStep !== FormStep.Success && (
            <div className="mt-16">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-primary/10 bg-primary/5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">
                        {isPathFrench ? "Résultats Rapides" : "Fast Results"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {isPathFrench
                        ? "Nos clients voient des améliorations de revenus en quelques semaines, pas des mois."
                        : "Our clients see revenue improvements in weeks, not months."}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/10 bg-primary/5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">
                        {isPathFrench ? "Revenus Accrus" : "Increased Revenue"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {isPathFrench
                        ? "Augmentez vos revenus de 30% à 40% grâce à notre méthodologie éprouvée."
                        : "Boost your revenue by 30% to 40% with our proven methodology."}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/10 bg-primary/5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">
                        {isPathFrench ? "Moins de Travail" : "Less Work"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {isPathFrench
                        ? "Automatisez vos processus et récupérez jusqu'à 65% de votre temps."
                        : "Automate your processes and reclaim up to 65% of your time."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}