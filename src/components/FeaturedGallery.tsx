import ArtworkCard from "./ArtworkCard";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const FeaturedGallery = () => {
  const artworks = [
    {
      image: artwork1,
      title: "Azure Dreams",
      artist: "Marina Chen",
      price: "$3,500"
    },
    {
      image: artwork2,
      title: "Golden Horizon",
      artist: "David Rodriguez",
      price: "$2,800"
    },
    {
      image: artwork3,
      title: "Silent Reflections",
      artist: "Emma Thompson",
      price: "$4,200"
    },
    {
      image: artwork4,
      title: "Modern Forms",
      artist: "Alex Kim",
      price: "$5,600"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gallery-navy mb-4">
            Featured Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional works from our curated collection of local and emerging artists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork, index) => (
            <ArtworkCard
              key={index}
              image={artwork.image}
              title={artwork.title}
              artist={artwork.artist}
              price={artwork.price}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gallery-gold text-gallery-navy hover:bg-gallery-gold/90 px-8 py-3 rounded-lg font-semibold transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;