import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_META } from '../../config/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  path?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function SEOHead({ 
  title = DEFAULT_META.title,
  description = DEFAULT_META.description,
  imageUrl = DEFAULT_META.imageUrl,
  path = '',
  noindex = false,
  keywords
}: SEOHeadProps) {
  const canonicalUrl = `${DEFAULT_META.baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
