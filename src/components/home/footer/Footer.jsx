import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Brand */}
    <div className="text-center sm:text-left">
      <h2 className="text-xl font-bold text-white mb-3">
        Tile Gallery
      </h2>
      <p className="text-sm leading-relaxed">
        Discover premium tiles to design your perfect aesthetic space.
      </p>
    </div>

    {/* Quick Links */}
    <div className="text-center sm:text-left">
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tiles">All Tiles</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Categories */}
    <div className="text-center sm:text-left">
      <h3 className="text-white font-semibold mb-3">Categories</h3>
      <ul className="space-y-2 text-sm">
        <li>Marble Tiles</li>
        <li>Ceramic Tiles</li>
        <li>Wooden Finish</li>
        <li>Geometric Design</li>
      </ul>
    </div>

    {/* Contact */}
    <div className="text-center sm:text-left">
      <h3 className="text-white font-semibold mb-3">Contact</h3>
      <p className="text-sm"> Dhaka, Bangladesh</p>
      <p className="text-sm"> +880 1234-567890</p>
      <p className="text-sm"> info@tilegallery.com</p>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm">
    © {new Date().getFullYear()} Tile Gallery. All rights reserved.
  </div>
</footer>
  );
};

export default Footer;