import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface OfferFormData {
  name: string;
  email: string;
  businessName: string;
  phone: string;
  offerType: string;
}

export function OfferPopupForm({ children, offerType = "Standard Package $500/month" }: { 
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