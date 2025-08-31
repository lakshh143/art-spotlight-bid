import ArtworkCard from "./ArtworkCard";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const UpcomingAuctions = () => {
  const auctions = [
    {
      image: artwork1,
      title: "Midnight Symphony",
      artist: "Sofia Andersson",
      price: "$1,250",
      bidCount: 12,
      timeLeft: "2d 14h"
    },
    {
      image: artwork2,
      title: "Desert Mirage",
      artist: "Carlos Mendoza",
      price: "$2,100",
      bidCount: 8,
      timeLeft: "4d 6h"
    },
    {
      image: artwork3,
      title: "Urban Solitude",
      artist: "Yuki Tanaka",
      price: "$1,800",
      bidCount: 15,
      timeLeft: "1d 3h"
    }
  ];

  return (
    <section id="auctions" className="py-20 bg-gallery-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gallery-navy mb-4">
            Live Auctions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in our exclusive auctions and own a piece of exceptional art
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {auctions.map((auction, index) => (
            <ArtworkCard
              key={index}
              image={auction.image}
              title={auction.title}
              artist={auction.artist}
              price={auction.price}
              bidCount={auction.bidCount}
              timeLeft={auction.timeLeft}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gallery-navy text-white hover:bg-gallery-charcoal px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Auctions
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAuctions;