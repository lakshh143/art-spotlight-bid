import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArtistSpotlight = () => {
  const artists = [
    {
      name: "Marina Chen",
      specialty: "Abstract Expressionism",
      bio: "Marina's work explores the intersection of color and emotion, creating pieces that speak to the soul.",
      works: "24 pieces",
      sales: "18 sold"
    },
    {
      name: "David Rodriguez",
      specialty: "Landscape Photography", 
      bio: "Capturing the raw beauty of nature through a contemporary lens, David's work transports viewers.",
      works: "31 pieces",
      sales: "22 sold"
    },
    {
      name: "Emma Thompson",
      specialty: "Portrait & Fine Art",
      bio: "Emma creates intimate portraits that reveal the depth and complexity of human experience.",
      works: "19 pieces", 
      sales: "15 sold"
    }
  ];

  return (
    <section id="artists" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gallery-navy mb-4">
            Artist Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented creators behind our exceptional collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card key={index} className="gallery-card p-8 text-center">
              <div className="w-24 h-24 bg-accent-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gallery-navy">
                  {artist.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gallery-navy mb-2">
                {artist.name}
              </h3>
              
              <p className="text-accent font-medium mb-4">
                {artist.specialty}
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {artist.bio}
              </p>
              
              <div className="flex justify-center gap-6 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-gallery-navy">{artist.works}</p>
                  <p className="text-muted-foreground">Available</p>
                </div>
                <div>
                  <p className="font-semibold text-gallery-navy">{artist.sales}</p>
                  <p className="text-muted-foreground">Sold</p>
                </div>
              </div>
              
              <Button variant="outline" className="border-gallery-navy text-gallery-navy hover:bg-gallery-navy hover:text-white">
                View Portfolio
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;