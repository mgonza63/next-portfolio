import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PackagesSection from '../components/PackagesSection'
export default function Pricing() {
  return (
     <Layout>
      <Head>
      <title>Gosify Media | Marketing Digital</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Gosify es una agencia de Marketing Digital, trabaja con nosotros para maximizar tus ventas y mejorar tu presencia en linea"></meta>
        <meta name="keywords" content="gosify, media, marketing, digital, agencia" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Playfair+Display:wght@500&display=swap" rel="stylesheet"></link>
        
        <meta property="og:title" content="Gosify Media | Agencia Marketing Digital" />
        <meta property="og:image" content="/logo-white.png"></meta>
        <meta property="og:url" content="https://gosifymedia.com" />

      </Head>
      <Header />
      <PackagesSection />
      <Contact />
      <Footer />
    </Layout>
  )
}