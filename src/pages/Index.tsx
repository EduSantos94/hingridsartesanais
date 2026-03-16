import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EasterCatalog from "@/components/EasterCatalog";
import CookieCatalog from "@/components/CookieCatalog";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";

// Configurações - substituir pelos dados reais
const WHATSAPP_NUMBER = "5544998860473"; // Ex: 5511999999999
const INSTAGRAM_USER = "hingrids.deliciasartesanais"; // Sem o @
const AIQFOME_LINK = "https://aiqfome.com/PR/goioere/hingrids-deliciais-artesanais";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        whatsappNumber={WHATSAPP_NUMBER} 
        instagramUser={INSTAGRAM_USER}
        aiqfomeLink={AIQFOME_LINK}
      />
      <main>
        <Hero whatsappNumber={WHATSAPP_NUMBER} aiqfomeLink={AIQFOME_LINK} />
        <CookieCatalog />
        <HowToOrder 
          whatsappNumber={WHATSAPP_NUMBER} 
          instagramUser={INSTAGRAM_USER}
          aiqfomeLink={AIQFOME_LINK}
        />
      </main>
      <Footer 
        whatsappNumber={WHATSAPP_NUMBER} 
        instagramUser={INSTAGRAM_USER}
        aiqfomeLink={AIQFOME_LINK}
      />
    </div>
  );
};

export default Index;
