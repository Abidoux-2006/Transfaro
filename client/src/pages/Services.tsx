import { Truck, Ship, Package, Plane, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { Button } from "../components/ui/button";


const serviceDetails = [
  {
    id: "transit",
    icon: Truck,
    title: "Transit",
    subtitle: "Domestic & Regional Transport",
    description:
      "Comprehensive transit solutions for domestic and regional freight movements. We handle all cargo types with professional drivers and modern fleet.",
    features: [
      "Full coverage of domestic routes",
      "Real-time tracking and monitoring",
      "Professional and experienced drivers",
      "Flexible scheduling options",
      "Competitive pricing",
      "Insurance coverage included",
    ],
    image: "/images/transit.jpg",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    id: "transport",
    icon: Ship,
    title: "Transport International",
    subtitle: "Global Freight Solutions",
    description:
      "International transport services connecting Morocco to markets worldwide. We specialize in maritime and air freight with full customs support.",
    features: [
      "Worldwide shipping network",
      "Container and bulk cargo services",
      "Air freight for urgent shipments",
      "Door-to-door delivery options",
      "Full documentation support",
      "Competitive international rates",
    ],
    image: "/images/transport.jpg",
    gradient: "from-cyan-500 to-cyan-600",
    bgGradient: "from-cyan-500/10 to-cyan-500/5",
  },
  {
    id: "customs",
    icon: Package,
    title: "Customs Clearance",
    subtitle: "Expert Documentation & Clearance",
    description:
      "Expert customs clearance services ensuring smooth border crossings. Our team handles all documentation and regulatory requirements.",
    features: [
      "Complete customs documentation",
      "Regulatory compliance expertise",
      "Fast clearance processing",
      "Tariff optimization",
      "Import/export licensing",
      "Duty and tax management",
    ],
    image: "/images/cc.jpg",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/10 to-purple-500/5",
  },
  {
    id: "logistics",
    icon: Plane,
    title: "Logistics",
    subtitle: "End-to-End Supply Chain",
    description:
      "Comprehensive logistics management and supply chain optimization. From warehousing to final delivery, we handle it all.",
    features: [
      "Warehouse management",
      "Inventory optimization",
      "Supply chain planning",
      "Distribution network",
      "Last-mile delivery",
      "Logistics consulting",
    ],
    image: "/images/logistics.jpg",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-500/10 to-orange-500/5",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] mt-20 overflow-hidden">       
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ServicesPage1.jpg')" }}
        />

        {/* Gradient overlay (kept from your design) */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-accent/60 to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              <b>Comprehensive freight and logistics solutions tailored to your needs</b>
            </p>
          </div>
        </div>

      </section>

      {/* Services Grid */}
      <section className="section-container bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="animate-fade-in-up scroll-mt-24 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rounded-xl overflow-hidden border-2 border-accent/20 hover:border-accent/60 transition-all hover:shadow-2xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                    </div>

                    {/* Content */}
                    <div className="p-8 bg-background flex-1 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {service.title}
                          </h3>
                          <p className="text-accent text-sm font-semibold">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full !bg-blue-600 !text-white !border-2 !border-transparent hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 font-semibold py-6 rounded-lg transition-all hover:shadow-lg"
                      >
                        <Link href="/quote">
                          Get a Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-container bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <p className="section-subtitle text-center mx-auto">
              <b>We combine expertise, technology, and commitment to deliver excellence</b>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Expert Team",
              description:
                "Experienced logistics professionals with deep industry knowledge and certifications.",
              iconColor: "text-blue-600 bg-blue-100",
            },
            {
              icon: Zap,
              title: "Advanced Technology",
              description:
                "Real-time tracking, automated systems, and digital solutions for complete transparency.",
              iconColor: "text-yellow-600 bg-yellow-100",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description:
                "Round-the-clock customer service for your peace of mind and urgent needs.",
              iconColor: "text-green-600 bg-green-100",
            },
            {
              icon: Package,
              title: "Global Network",
              description:
                "Partnerships worldwide for seamless international operations and coverage.",
              iconColor: "text-purple-600 bg-purple-100",
            },
            {
              icon: CheckCircle,
              title: "Competitive Pricing",
              description:
                "Cost-effective solutions optimized for your budget without compromising quality.",
              iconColor: "text-pink-600 bg-pink-100",
            },
            {
              icon: Shield,
              title: "Full Compliance",
              description:
                "Complete adherence to all international regulations and industry standards.",
              iconColor: "text-indigo-600 bg-indigo-100",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-lg aimate-fade-in-up"
                >
                <div
                  className={`p-3 rounded-lg w-fit mb-4 ${item.iconColor}`}
                >
                  <Icon className="w-12 h-12" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white text-accent-foreground">
        <div className="container text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            <b>Contact our expert team to discuss your specific freight and logistics requirements.</b>
          </p>
          <Button
            asChild
            className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/quote">
              Request a Quote Now
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
