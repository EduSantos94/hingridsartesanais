import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CookieCatalog from "@/components/CookieCatalog";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";

// Configurações - substituir pelos dados reais
const WHATSAPP_NUMBER = "5544998860473"; // Ex: 5511999999999
const INSTAGRAM_USER = "hingrids.deliciasartesanais"; // Sem o @

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        whatsappNumber={WHATSAPP_NUMBER} 
        instagramUser={INSTAGRAM_USER} 
      />
      <main>
        <Hero whatsappNumber={WHATSAPP_NUMBER} />
        <CookieCatalog />
        <HowToOrder 
          whatsappNumber={WHATSAPP_NUMBER} 
          instagramUser={INSTAGRAM_USER} 
        />
      </main>
      <Footer 
        whatsappNumber={WHATSAPP_NUMBER} 
        instagramUser={INSTAGRAM_USER} 
      />
    </div>
  );
};

export default Index;
