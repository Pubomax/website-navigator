import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { useLocation } from 'wouter';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  className?: string;
  options?: { value: string; label: string }[];
  helperText?: string;
  showSuccessIcon?: boolean;
  autoComplete?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Enhanced FormField component with:
 * - Inline validation with helpful messages
 * - Accessible error states with aria attributes
 * - Visual feedback for validation status
 * - Support for different input types
 */
export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  error,
  value,
  onChange,
  onBlur,
  className,
  options = [],
  helperText,
  showSuccessIcon = false,
  autoComplete,
  textareaProps,
  selectProps,
  inputProps
}: FormFieldProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith('/fr');
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  const [isTouched, setIsTouched] = useState(false);
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setIsTouched(true);
    if (onBlur) onBlur(e);
  };
  
  const showError = !!error && isTouched;
  const showSuccess = isTouched && !error && showSuccessIcon;
  
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex justify-between">
        <Label 
          htmlFor={name} 
          className="block text-sm font-medium mb-1"
        >
          {t(label)}{required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        
        {helperText && !showError && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {t(helperText)}
          </span>
        )}
      </div>
      
      <div className="relative">
        {type === 'textarea' ? (
          <Textarea
            id={name}
            name={name}
            value={value as string}
            onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
            onBlur={handleBlur as (e: React.FocusEvent<HTMLTextAreaElement>) => void}
            placeholder={placeholder ? t(placeholder) : undefined}
            className={cn(
              "resize-none w-full p-2 border rounded transition-colors",
              showError ? "border-red-500 focus:border-red-500 focus:ring-red-500" :
                "border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
            )}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${name}-error` : undefined}
            required={required}
            {...textareaProps}
          />
        ) : type === 'select' ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
            onBlur={handleBlur as (e: React.FocusEvent<HTMLSelectElement>) => void}
            className={cn(
              "w-full p-2 border rounded transition-colors appearance-none bg-white dark:bg-gray-800",
              showError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : 
                "border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
            )}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${name}-error` : undefined}
            required={required}
            {...selectProps}
          >
            <option value="">{t("Please select...")}</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {t(option.label)}
              </option>
            ))}
          </select>
        ) : (
          <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            onBlur={handleBlur as (e: React.FocusEvent<HTMLInputElement>) => void}
            placeholder={placeholder ? t(placeholder) : undefined}
            className={cn(
              "w-full p-2 border rounded transition-colors",
              showError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : 
                "border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
            )}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${name}-error` : undefined}
            required={required}
            autoComplete={autoComplete}
            {...inputProps}
          />
        )}
        
        {showError && (
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
        
        {showSuccess && (
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      
      {showError && (
        <p 
          id={`${name}-error`} 
          className="mt-1 text-sm text-red-500" 
          role="alert"
        >
          {t(error)}
        </p>
      )}
    </div>
  );
}