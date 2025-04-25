import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { getPageTitleData } from "@/lib/page-titles";

type PageKey = Parameters<typeof getPageTitleData>[0];

interface PageTitleProps {
  pageKey: PageKey;
  customTitle?: string;
  customDescription?: string;
}

/**
 * Component to set the page title and meta description dynamically
 * Use this at the top of each page component
 */
export function PageTitle({ pageKey, customTitle, customDescription }: PageTitleProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const { title, description } = getPageTitleData(pageKey, isPathFrench);
  
  const finalTitle = customTitle || title;
  const finalDescription = customDescription || description;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      {finalDescription && <meta name="description" content={finalDescription} />}
    </Helmet>
  );
}