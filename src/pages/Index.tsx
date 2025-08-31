import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import UpcomingAuctions from "@/components/UpcomingAuctions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedGallery />
      <ArtistSpotlight />
      <UpcomingAuctions />
      <Footer />
    </div>
  );
};

export default Index;