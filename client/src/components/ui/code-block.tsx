import React from "react";
import { Copy } from "lucide-react";
import { Button } from "./button";
import { toast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "javascript",
  fileName,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  // Split code into lines and add line numbers
  const codeLines = code.split("\n");
  
  return (
    <div className={`relative rounded-md overflow-hidden mb-4 ${className}`}>
      {fileName && (
        <div className="bg-slate-800 text-slate-200 text-xs px-4 py-2 border-b border-slate-700 flex items-center">
          <span className="font-medium">{fileName}</span>
          <span className="ml-2 text-slate-400 text-xs">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className={`p-4 overflow-x-auto bg-slate-900 text-slate-50 text-sm ${showLineNumbers ? 'pl-12' : ''}`}>
          {showLineNumbers ? (
            <code className="block">
              {codeLines.map((line, i) => (
                <div key={i} className="relative">
                  <span className="absolute left-[-2rem] text-slate-500 w-8 text-right pr-2 select-none">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </code>
          ) : (
            <code>{code}</code>
          )}
        </pre>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 text-slate-300 hover:text-slate-50 hover:bg-slate-700"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  );
}