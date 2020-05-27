import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/HeroSection'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gosify Media</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Playfair+Display:wght@500&display=swap" rel="stylesheet"></link>
        {/* <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"/> */}
        <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>

      </Head>
      <Header />
      <Hero  />
      <Features />
      <Contact />
      <Footer />
    </Layout>
  )
}
