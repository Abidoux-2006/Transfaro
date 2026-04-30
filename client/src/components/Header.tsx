import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow-lg">
      <div className="container flex items-center justify-between h-25">

        {/* Logo */}
        <div
          onClick={() => window.location.href = "/"}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img
            src="/images/logo.jpg"
            alt="Transfaro Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm font-medium bg-blue-700 text-white border-2 !border-blue-700 hover:bg-white hover:text-blue-700 active:scale-95 transition-all duration-300 rounded-md"
          >
            <b>{link.label}</b>
          </Link>
          ))}

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 text-sm font-medium bg-blue-700 text-white border-2 !border-blue-700 hover:bg-white hover:text-blue-700 active:scale-95 transition-all duration-300 flex items-center gap-1 rounded-md">
                <b>Services</b>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="bg-white border-2 !border-blue-700 shadow-lg rounded-md p-1 w-56"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/services#transit"
                  className="cursor-pointer w-full px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-sm transition-colors"
                >
                  Transit
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/services#transport"
                  className="cursor-pointer w-full px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-sm transition-colors"
                >
                  Transport
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/services#customs"
                  className="cursor-pointer w-full px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-sm transition-colors"
                >
                  Customs
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/services#logistics"
                  className="cursor-pointer w-full px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-sm transition-colors"
                >
                  Logistics
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="hidden md:inline-flex bg-blue-700 text-white border-2 !border-blue-700 hover:!bg-white hover:text-blue-700 active:scale-95 font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <Link href="/quote">
            Request a Quote
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors block"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/quote" onClick={() => setMobileOpen(false)}>
                Request a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}