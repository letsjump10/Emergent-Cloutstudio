import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import StatsStrip from '../components/home/StatsStrip';
import AutopilotSection from '../components/home/AutopilotSection';
import CaseStudies from '../components/home/CaseStudies';
import Process from '../components/home/Process';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import LeadFormSection from '../components/home/LeadFormSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Clout Studio - Digital Marketing Agency in Roorkee, Uttarakhand</title>
        <meta
          name="description"
          content="Clout Studio: Premier digital marketing agency in Roorkee, Uttarakhand. We help businesses in Haridwar, Dehradun & across India with SEO, PPC, social media, websites & marketing automation."
        />
        <meta
          name="keywords"
          content="digital marketing roorkee, seo roorkee, ppc roorkee, social media marketing uttarakhand, website design roorkee, marketing agency haridwar"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clout Studio",
            "image": "https://images.unsplash.com/photo-1700313238493-954af98df086",
            "description": "Digital marketing agency specializing in SEO, PPC, social media, and marketing automation for businesses in Roorkee and Uttarakhand.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Roorkee",
              "addressLocality": "Roorkee",
              "addressRegion": "Uttarakhand",
              "postalCode": "247667",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.8543",
              "longitude": "77.8880"
            },
            "telephone": "+919740959176",
            "email": "hello@cloutstudio.co",
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "₹₹",
            "areaServed": [
              "Roorkee",
              "Haridwar",
              "Dehradun",
              "Rishikesh",
              "Uttarakhand",
              "India"
            ]
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <ServicesGrid />
        <StatsStrip />
        <AutopilotSection />
        <CaseStudies />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadFormSection />
      </main>
    </>
  );
};

export default Home;
