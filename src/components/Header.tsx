import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent-gradient rounded-full"></div>
            <h1 className="text-2xl font-bold text-gallery-navy">ArtVault</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-foreground hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="#artists" className="text-foreground hover:text-accent transition-colors">
              Artists
            </a>
            <a href="#auctions" className="text-foreground hover:text-accent transition-colors">
              Auctions
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gallery-navy text-primary-foreground hover:bg-gallery-charcoal">
              Join Auction
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;