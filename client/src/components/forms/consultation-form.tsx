import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { insertContactMessageSchema } from "@shared/schema";

// Fix for the types in react-hook-form
type InputValue = string | number | readonly string[] | undefined;

// Extend the schema with validation rules
const formSchema = insertContactMessageSchema.extend({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(8, "Phone number is required"),
  preferredContactMethod: z.enum(["email", "phone", "any"]),
  bestTimeToContact: z.string().optional(),
});

// Business Challenges options
const businessChallenges = [
  {
    id: "lead_generation",
    label: "Lead Generation",
  },
  {
    id: "marketing_efficiency",
    label: "Marketing Efficiency",
  },
  {
    id: "sales_cycle",
    label: "Long Sales Cycle",
  },
  {
    id: "customer_engagement",
    label: "Customer Engagement",
  },
  {
    id: "service_delivery",
    label: "Service Delivery",
  },
  {
    id: "team_productivity",
    label: "Team Productivity",
  },
  {
    id: "scalability",
    label: "Scalability Issues",
  },
];

// Industry options
const industries = [
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Finance", value: "finance" },
  { label: "Retail", value: "retail" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Professional Services", value: "professional_services" },
  { label: "Technology", value: "technology" },
  { label: "Construction", value: "construction" },
  { label: "Education", value: "education" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Not specified", value: "Not specified" },
];

// Company size options
const companySizes = [
  { label: "1-10 employees", value: "1-10" },
  { label: "11-50 employees", value: "11-50" },
  { label: "51-200 employees", value: "51-200" },
  { label: "201+ employees", value: "201+" },
];

// Annual revenue options
const annualRevenueOptions = [
  { label: "Less than $100K", value: "less_100k" },
  { label: "$100K-$500K", value: "100k_500k" },
  { label: "$500K-$1M", value: "500k_1m" },
  { label: "$1M-$5M", value: "1m_5m" },
  { label: "$5M-$10M", value: "5m_10m" },
  { label: "$10M-$50M", value: "10m_50m" },
  { label: "More than $50M", value: "more_50m" },
];

// Best time to contact options
const bestTimeOptions = [
  { label: "Morning (9am-12pm)", value: "morning" },
  { label: "Afternoon (12pm-5pm)", value: "afternoon" },
  { label: "Evening (after 5pm)", value: "evening" },
  { label: "Any time", value: "anytime" },
];

// Types for consultation form props
interface ConsultationFormProps {
  onSuccess?: () => void;
  preselectedPlan?: "VELOCITY" | "ACCELERATE" | "DOMINATE";
}

export function ConsultationForm({ onSuccess, preselectedPlan }: ConsultationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  // Initialize form with default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      industry: "Not specified",
      companySize: "",
      annualRevenue: "",
      websiteUrl: "",
      businessChallenges: [],
      currentSolutions: "",
      desiredOutcomes: preselectedPlan 
        ? `Interested in ${preselectedPlan} plan - Increase revenue and reduce workload` 
        : "Increase revenue and reduce workload",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactJobTitle: "",
      preferredContactMethod: "email",
      bestTimeToContact: "anytime",
      additionalNotes: preselectedPlan 
        ? `Inquiring about the ${preselectedPlan} plan pricing at $${
            preselectedPlan === "VELOCITY" ? "500" : 
            preselectedPlan === "ACCELERATE" ? "1,500" : "3,500"
          }/month`
        : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Format multi-select business challenges as a string for message field
      const formattedValues = {
        ...values,
        employeeCount: values.companySize, // For compatibility with the existing email template
        businessChallenge: Array.isArray(values.businessChallenges) 
          ? values.businessChallenges.join(", ") 
          : "",
        // Create a formatted message for the email template
        message: `Business Challenges: ${Array.isArray(values.businessChallenges) ? values.businessChallenges.join(", ") : ""}
Annual Revenue: ${values.annualRevenue}
Employee Count: ${values.companySize}
Preferred Contact Method: ${values.preferredContactMethod}
Best Time to Contact: ${values.bestTimeToContact || "Any time"}

Additional Notes: ${values.additionalNotes}${preselectedPlan ? `\n\nSelected Plan: ${preselectedPlan}` : ""}`,
      };

      // Submit the form data to the API
      const response = await apiRequest("POST", "/api/contact", formattedValues);
      const data = await response.json();

      if (response.ok) {
        // Show success message
        toast({
          title: "Request received",
          description: data.emailSent 
            ? "Thank you for your message. We'll be in touch shortly!" 
            : "Your request has been recorded. However, we couldn't send you a confirmation email. Our team will contact you soon.",
          variant: "default",
        });

        // Reset form or perform other actions
        form.reset();
        
        // Call the onSuccess callback if provided
        if (onSuccess) onSuccess();
      } else {
        // Show error message
        toast({
          title: "Submission failed",
          description: data.message || "An error occurred. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Handle error
      toast({
        title: "Submission failed",
        description: "An error occurred while submitting your request. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Helper function to safely convert null values to empty strings for input fields
  const safeValue = (value: string | null | undefined): InputValue => {
    return value === null ? "" : value;
  };

  return (
    <div className="container mx-auto max-w-3xl py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {preselectedPlan 
            ? `Get Started with the ${preselectedPlan} Plan` 
            : "Transform Your Business With AI"
          }
        </h2>
        <p className="text-gray-500 mt-2">
          {preselectedPlan 
            ? `Complete the form below to get started with our ${preselectedPlan} plan and take your business to the next level.` 
            : "Tell us about your business challenges and we'll show you how our AI automation solutions can help."
          }
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Business Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
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
                    <FormLabel>Industry</FormLabel>
                    <Popover open={industryOpen} onOpenChange={setIndustryOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={industryOpen}
                            className="w-full justify-between"
                          >
                            {field.value
                              ? industries.find(
                                  (industry) => industry.value === field.value
                                )?.label
                              : "Select industry"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search industry..." />
                          <CommandEmpty>No industry found.</CommandEmpty>
                          <CommandGroup>
                            {industries.map((industry) => (
                              <CommandItem
                                key={industry.value}
                                value={industry.value}
                                onSelect={(value) => {
                                  form.setValue("industry", value);
                                  setIndustryOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    industry.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {industry.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="annualRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Revenue*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select annual revenue range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {annualRevenueOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
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
                    <FormLabel>Company Size*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of employees" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
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
                    <FormLabel>Website URL</FormLabel>
                    <FormControl>
                      <Input placeholder="your-company.com" {...field} value={safeValue(field.value)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {preselectedPlan && (
                <FormItem>
                  <FormLabel>Selected Plan</FormLabel>
                  <div className="h-10 px-3 py-2 rounded-md border border-input bg-gray-100 text-sm font-medium">
                    {preselectedPlan} (${
                      preselectedPlan === "VELOCITY" ? "500" : 
                      preselectedPlan === "ACCELERATE" ? "1,500" : "3,500"
                    }/month)
                  </div>
                  <FormDescription>
                    You've selected our {preselectedPlan} plan
                  </FormDescription>
                </FormItem>
              )}
            </div>
          </div>

          {/* Business Challenges Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Business Challenges</h3>
            <FormField
              control={form.control}
              name="businessChallenges"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>What challenges are you looking to solve?*</FormLabel>
                    <FormDescription>
                      Select all that apply to your business
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {businessChallenges.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="businessChallenges"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="currentSolutions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What solutions are you currently using?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe any tools or processes you're currently using..."
                        className="min-h-[80px]"
                        {...field}
                        value={safeValue(field.value)}
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
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any other information you'd like to share..."
                        className="min-h-[80px]"
                        {...field}
                        value={safeValue(field.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} value={safeValue(field.value)} />
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
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Your position" {...field} value={safeValue(field.value)} />
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
                    <FormLabel>Email Address*</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} value={safeValue(field.value)} />
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
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} value={safeValue(field.value)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredContactMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Contact Method*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="any">Either</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bestTimeToContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Best Time to Contact</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {bestTimeOptions.map((option) => (
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}