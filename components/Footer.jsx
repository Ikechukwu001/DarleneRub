import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light text-white mb-4">
              <span className="font-extralight">Darlene’s</span>
              <span className="font-normal"> RUB</span>
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-md">
              Indulge in DarleneRub expert massages—from Nuru and deep tissue to FBSM and GFE—designed to relax, awaken, and restore your body and mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-normal mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Home
                </Link>
              </li>
               <li>
                <Link 
                  href="/gallery" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Gallery
                </Link>
                </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Services
                </Link>
              </li>
               <li>
                <Link 
                  href="/review" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Review
                </Link>
                </li>
                 <li>
                <Link 
                  href="/prices" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Prices
                </Link>
                </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/payment" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Payment
                </Link>
                </li>
              <li>
                <Link 
                  href="/termsandconditions" 
                  className="text-neutral-400 hover:text-white transition-colors font-light"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-normal mb-4">Contact</h4>
            <ul className="space-y-3 text-neutral-400 font-light">
              <li className="pt-2">
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-white transition-colors"
                >
                  (704) 236-7496
                </a>
              </li>
              <li>
                <a 
                  href="mailto:darlensrub@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  darlensrub@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm font-light">
            © {currentYear} Darlene's RUB. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link 
              href="/privacy" 
              className="text-neutral-500 hover:text-white transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-neutral-500 hover:text-white transition-colors font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}