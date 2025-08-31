import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArtworkCardProps {
  image: string;
  title: string;
  artist: string;
  price: string;
  bidCount?: number;
  timeLeft?: string;
}

const ArtworkCard = ({ image, title, artist, price, bidCount, timeLeft }: ArtworkCardProps) => {
  return (
    <Card className="gallery-card overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {timeLeft && (
          <div className="absolute top-4 right-4 bg-gallery-gold text-gallery-navy px-3 py-1 rounded-full text-sm font-semibold">
            {timeLeft}
          </div>
        )}
        {bidCount && (
          <div className="absolute top-4 left-4 bg-gallery-navy/90 text-white px-3 py-1 rounded-full text-sm">
            {bidCount} bids
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gallery-navy mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">by {artist}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {bidCount ? 'Current Bid' : 'Price'}
            </p>
            <p className="text-2xl font-bold text-gallery-navy">{price}</p>
          </div>
          
          <Button 
            className="bg-gallery-navy hover:bg-gallery-charcoal text-white"
            size="sm"
          >
            {bidCount ? 'Place Bid' : 'View Details'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkCard;