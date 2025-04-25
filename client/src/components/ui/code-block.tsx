import React from "react";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  fileName,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-md overflow-hidden", className)}>
      {fileName && (
        <div className="bg-accent px-4 py-2 text-xs font-mono text-muted-foreground flex justify-between items-center">
          <span>{fileName}</span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-xs">{language.toUpperCase()}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={copyToClipboard}
              title="Copy code"
            >
              <Copy className="h-3.5 w-3.5" />
              <span className="sr-only">Copy code</span>
            </Button>
          </div>
        </div>
      )}
      <pre
        className={cn(
          "p-4 text-sm overflow-x-auto bg-black text-white",
          language === "json" && "text-green-400",
          language === "bash" && "text-yellow-300"
        )}
      >
        {showLineNumbers ? (
          code.split("\n").map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell text-right pr-4 select-none text-muted-foreground">{i + 1}</span>
              <span className="table-cell">{line}</span>
            </div>
          ))
        ) : (
          <code>{code}</code>
        )}
      </pre>
      {!fileName && (
        <div className="bg-accent px-3 py-1.5 text-xs flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
            <Copy className="ml-1 h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
}