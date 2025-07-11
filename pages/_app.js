// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head'
import CustomCursor from '../components/CustomCursor'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Legacy 2310 – We Wrap Companies</title>
        <meta name="description" content="Legacy 2310 is a rebranding agency wrapping companies inside and out with AI, design, and internal tooling." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Legacy 2310 – We Wrap Companies" />
        <meta property="og:description" content="Rebranding agency using AI, design, and development to transform companies from within." />
        <meta property="og:image" content="https://legacy2310-site.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://legacy2310-site.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legacy 2310 – We Wrap Companies" />
        <meta name="twitter:description" content="We use AI, design, and development to reimagine your company inside and out." />
        <meta name="twitter:image" content="https://legacy2310-site.vercel.app/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}
