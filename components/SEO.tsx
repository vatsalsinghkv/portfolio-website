import Head from 'next/head';

type Props = {
  title: string;
  author: string;
  description: string;
  image: string;
  url: string;
  keywords: string[];
};

const SEO = (seoData: Props) => {
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <link rel="canonical" href={seoData.url} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="/code.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/code.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/code.png" />
    </Head>
  );
};

export default SEO;
