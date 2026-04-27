import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-0">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <img
              src="/images/logo.jpg"
              alt="Transfaro Logo"
              className="h-25 w-auto mb-4"
            />
            <p className="text-background/80 text-sm leading-relaxed">
              Transfaro - Transit & Transport International. Your trusted partner in global freight and logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-background/80 hover:text-background transition-colors"
                >
                Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80 hover:text-background transition-colors cursor-pointer">Transit</li>
              <li className="text-background/80 hover:text-background transition-colors cursor-pointer">Transport International</li>
              <li className="text-background/80 hover:text-background transition-colors cursor-pointer">Customs Clearance</li>
              <li className="text-background/80 hover:text-background transition-colors cursor-pointer">Logistics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">+212 5229-80833</p>
                  <p className="text-background/80">+212 5229-87334</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@transfaro.com" className="text-background/80 hover:text-background transition-colors">
                  info@transfaro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-background/80">
                  119 Bir Anzarane<br />
                  Casablanca 20330<br />
                  Morocco
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.linkedin.com/company/transfaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/TransfaroOfficiel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-background/60">
            <p>© {currentYear} Transfaro - Transit & Transport International. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
