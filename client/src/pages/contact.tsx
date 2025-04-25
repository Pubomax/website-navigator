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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Contactez-nous" : "Contact Us",
  subtitle: isPathFrench 
    ? "Entrez en contact pour commencer votre parcours de transformation numérique"
    : "Get in touch to start your digital transformation journey",
  form: {
    labels: {
      name: isPathFrench ? "Nom" : "Name",
      email: isPathFrench ? "Email" : "Email",
      company: isPathFrench ? "Entreprise" : "Company",
      message: isPathFrench ? "Message" : "Message"
    },
    placeholders: {
      name: isPathFrench ? "Votre nom" : "Your name",
      email: isPathFrench ? "votre@email.com" : "your@email.com",
      company: isPathFrench ? "Votre entreprise" : "Your company",
      message: isPathFrench ? "Comment pouvons-nous vous aider?" : "How can we help you?"
    },
    submit: {
      idle: isPathFrench ? "Envoyer le Message" : "Send Message",
      sending: isPathFrench ? "Envoi en cours..." : "Sending..."
    }
  },
  toast: {
    success: {
      title: isPathFrench ? "Message envoyé" : "Message sent",
      description: isPathFrench ? "Nous vous répondrons dans les plus brefs délais." : "We'll get back to you as soon as possible."
    },
    error: {
      title: isPathFrench ? "Erreur" : "Error",
      description: isPathFrench ? "Une erreur s'est produite. Veuillez réessayer plus tard." : "Something went wrong. Please try again later."
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
  ]
});

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: content.toast.success.title,
        description: content.toast.success.description,
      });
      form.reset();
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
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">{isPathFrench ? "Entrez en Contact" : "Get in Touch"}</h2>
            <div className="space-y-6">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form.labels.name}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.form.placeholders.name} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form.labels.email}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.form.placeholders.email} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form.labels.company}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.form.placeholders.company} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form.labels.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={content.form.placeholders.message}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    content.form.submit.sending
                  ) : (
                    <>
                      {content.form.submit.idle}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}