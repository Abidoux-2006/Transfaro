import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Truck, Ship, Plane, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";


const heroSlides = [
  {
    image: "/images/cargo.jpg",
    title: "Seamless International Shipping Without the Stress",
    subtitle: <><b>✔ 24/7 Customer Support</b></>,
  },
  {
    image: "/images/freightplane.jpg",
    title: "Fast & Reliable International Freight Solutions",
    subtitle: <><b>✔ Trusted by 100+ businesses worldwide</b></>,
  },
  {
    image: "/images/freighttruck.jpg",
    title: "Fast & Secure Inland Delivery Solutions",
    subtitle: <><b>✔ Fast & On-Time Delivery</b></>,
  },
  {
    image: "/images/freightship.jpg",
    title: "Cost-Effective Ocean Freight, Delivered Worldwide",
    subtitle: <><b>✔ Global Coverage</b></>,
  },
];

const services = [
  {
    icon: Truck,
    title: "Transit",
    description: "Comprehensive domestic and regional transit solutions for all cargo types.",
  },
  {
    icon: Ship,
    title: "Transport International",
    description: "Global maritime and air freight services with full customs support.",
  },
  {
    icon: Package,
    title: "Customs Clearance",
    description: "Expert customs documentation and clearance for seamless border crossing.",
  },
  {
    icon: Plane,
    title: "Logistics",
    description: "End-to-end logistics management and supply chain optimization.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoPlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Slider */}
      <section className="relative w-full h-[500px] mt-20 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  asChild
                  className="bg-blue-600 border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 px-8 py-6 text-lg transition-colors duration-300"
                >
                  <Link href="/quote">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-6"
                  : "bg-white/40 w-2 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-blue-100">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              <b>Comprehensive freight and logistics solutions tailored to your needs</b>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="animate-fade-in-up p-6 rounded-lg border-2 !border-blue-100 bg-white transition-all duration-300 group hover:!border-blue-600 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 p-3 rounded-lg bg-blue-50 w-fit transition-colors">
                  <Icon className="w-12 h-12 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
              <p className="text-gray-400">Since 1996</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">Worldwide</p>
              <p className="text-gray-400">Global Coverage</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">99.2%</p>
              <p className="text-gray-400">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white mb-0 text-white">
        <div className="container text-center animate-fade-in-up">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Ready to Ship?
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            <b>Get a competitive quote for your freight needs. Our team is ready to assist you with fast, reliable, and cost-effective solutions.</b>
          </p>
          <Button
            asChild
            className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/quote">
              Request a Quote
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
