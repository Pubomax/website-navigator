import React from 'react';
import { useTranslation } from '@/lib/i18n';
import { useLocation } from 'wouter';

interface SkipLinkProps {
  targetId?: string;
}

/**
 * SkipLink component for keyboard accessibility
 * 
 * This component provides a skip navigation link that's only visible when focused,
 * allowing keyboard users to bypass navigation menus and go directly to the main content.
 */
export function SkipLink({ targetId = 'main-content' }: SkipLinkProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith('/fr');
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');

  return (
    <a 
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 bg-primary text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition"
    >
      {t('Skip to main content')}
    </a>
  );
}