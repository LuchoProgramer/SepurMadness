import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Presentacion from '../components/Presentacion';

const Home = () => {
  return (
    <div>
      <Head>
        {/* 🔹 Metaetiquetas básicas para SEO */}
        <title>Startup Innovadora en Entretenimiento Digital y Marketing | SepurMadness</title>
        <meta name="description" content="Revolucionamos el entretenimiento digital, el desarrollo web y el marketing con experiencias únicas que combinan creatividad, tecnología e impacto." />
        <meta name="keywords" content="entretenimiento digital, desarrollo web, marketing digital, startup, tecnología, innovación" />
        <meta name="author" content="Tu Empresa" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (para Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Startup Innovadora en Entretenimiento Digital y Marketing | Tu Empresa" />
        <meta property="og:description" content="Revolucionamos el entretenimiento digital, el desarrollo web y el marketing con experiencias únicas que combinan creatividad, tecnología e impacto." />
        <meta property="og:image" content="https://res.cloudinary.com/dbbukhtz5/image/upload/v1737076514/Captura_de_pantalla_2025-01-16_a_la_s_8.13.41_p._m._vrscm4.png" />
        <meta property="og:url" content="https://sepurmadness.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SepurMadness" />

        {/* 🔹 Twitter Cards (para Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Startup Innovadora en Entretenimiento Digital y Marketing | Sepur Madness" />
        <meta name="twitter:description" content="Revolucionamos el entretenimiento digital, el desarrollo web y el marketing con experiencias únicas que combinan creatividad, tecnología e impacto." />
        <meta name="twitter:image" content="https://sepurmadness.com/imagen-og.jpg" />

        {/* 🔹 Metaetiquetas adicionales */}
        <link rel="canonical" href="https://sepurmadness.com/" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Navbar />
      <HeroSection />
      <Presentacion />
    </div>
  );
};

export default Home;