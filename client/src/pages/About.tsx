import { Award, Target, Heart, Zap, Users, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] mt-20 overflow-hidden">       
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/AboutusPage.jpg')" }}
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About Transfaro
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              <b>Leading the future of global freight and logistics since our founding</b>
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Transfaro is a premier international freight and logistics company based in Casablanca, Morocco. With decades of experience in the transportation industry, we have established ourselves as a trusted partner for businesses seeking reliable, efficient, and cost-effective freight solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team of dedicated professionals combines industry expertise with cutting-edge technology to deliver exceptional service across all continents. We understand that every shipment is unique, and we tailor our solutions to meet your specific needs.
              </p>
              <Button
                asChild
                className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/quote">
                  Get Started Today
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">

                {[
                  { number: "500+", label: "Satisfied Clients", icon: Users },
                  { number: "50+", label: "Countries Served", icon: Globe },
                  { number: "10K+", label: "Shipments Annually", icon: Zap },
                  { number: "99%", label: "On-Time Delivery", icon: Award },
                ].map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-blue-50 border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start gap-4">

                        {/* icon */}
                        <div className="p-3 rounded-lg bg-blue-100">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>

                        {/* text */}
                        <div>
                          <p className="text-3xl font-bold text-blue-600 mb-1">
                            {stat.number}
                          </p>
                          <p className="text-muted-foreground font-medium">
                            {stat.label}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="animate-fade-in-up p-8 rounded-xl bg-white border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-xl">
              
              <div className="p-4 rounded-lg bg-blue-100 w-fit mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class freight and logistics solutions that connect businesses globally, ensuring reliable, timely, and cost-effective transportation of goods across all continents.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-fade-in-up p-8 rounded-xl bg-white border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-xl" style={{ animationDelay: "0.1s" }}>
              
              <div className="p-4 rounded-lg bg-blue-100 w-fit mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading international logistics provider in Africa and beyond, recognized for innovation, reliability, and excellence in every aspect of our service delivery.
              </p>
            </div>

            {/* Values */}
            <div className="animate-fade-in-up p-8 rounded-xl bg-white border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-xl" style={{ animationDelay: "0.2s" }}>
              
              <div className="p-4 rounded-lg bg-blue-100 w-fit mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, reliability, customer focus, innovation, and sustainability guide every decision we make. We are committed to building long-term partnerships based on trust and mutual success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our operations and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reliability",
                description: "Consistent, dependable service you can count on",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Innovation",
                description: "Embracing technology for better solutions",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Integrity",
                description: "Honest, transparent business practices",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Excellence",
                description: "Commitment to highest quality standards",
                color: "from-orange-500 to-orange-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${value.color} p-8 rounded-xl text-white h-full transition-all hover:shadow-xl hover:scale-105 cursor-pointer`}>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-blue-50">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title">Why Choose Transfaro?</h2>
            <p className="section-subtitle mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Network",
                description:
                  "Connections with partners in over 50 countries ensuring seamless international operations",
              },
              {
                title: "Expert Team",
                description:
                  "Experienced professionals with deep knowledge of customs, regulations, and logistics",
              },
              {
                title: "Advanced Technology",
                description:
                  "Real-time tracking, automated systems, and digital solutions for transparency",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Cost-effective solutions optimized for your budget without compromising quality",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock customer service to address your concerns and emergencies",
              },
              {
                title: "Compliance",
                description:
                  "Full adherence to all international regulations, customs, and environmental standards",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white border-2 !border-blue-100 hover:!border-blue-600 transition-all hover:shadow-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white mb-0 text-white">
        <div className="container text-center animate-fade-in-up">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-black text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            <b>Let's discuss how Transfaro can help streamline your freight and logistics operations</b>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/quote">
                Request a Quote
              </Link>
            </Button>

            <Button
              asChild
              className="!bg-white !text-blue-600 !border-2 !border-blue-600 hover:!bg-blue-600 hover:!text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
