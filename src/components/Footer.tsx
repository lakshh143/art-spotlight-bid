const Footer = () => {
  return (
    <footer className="bg-gallery-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent-gradient rounded-full"></div>
              <h3 className="text-2xl font-bold">ArtVault</h3>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Connecting artists, collectors, and art enthusiasts in a premier marketplace for exceptional local artwork and exclusive auctions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#gallery" className="text-white/80 hover:text-gallery-gold transition-colors">Gallery</a></li>
              <li><a href="#artists" className="text-white/80 hover:text-gallery-gold transition-colors">Artists</a></li>
              <li><a href="#auctions" className="text-white/80 hover:text-gallery-gold transition-colors">Auctions</a></li>
              <li><a href="#about" className="text-white/80 hover:text-gallery-gold transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-gallery-gold transition-colors">Submit Artwork</a></li>
              <li><a href="#" className="text-white/80 hover:text-gallery-gold transition-colors">Seller Guidelines</a></li>
              <li><a href="#" className="text-white/80 hover:text-gallery-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-gallery-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 ArtVault. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-gallery-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-gallery-gold transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;