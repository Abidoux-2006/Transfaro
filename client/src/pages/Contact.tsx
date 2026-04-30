import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] mt-20 overflow-hidden">        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ContactPage1.jpg')" }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              <b>We're here to help with all your freight and logistics needs</b>
            </p>
          </div>
        </div>

      </section>

      {/* Contact Information */}
      <section className="section-container bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-fade-in-up">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-subtitle mb-8">
                Reach out to our team and we'll respond promptly
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="group p-6 rounded-xl border-2 !border-blue-100 hover:!border-blue-600
                 bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Phone</h3>
                      <a
                        href="tel:+212522980833"
                        className="text-accent hover:underline font-semibold block mb-1"
                      >
                        +212 5229-80833
                      </a>
                      <a
                        href="tel:+212522987334"
                        className="text-accent hover:underline font-semibold"
                      >
                        +212 5229-87334
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fax */}
                <div className="group p-6 rounded-xl border-2 !border-blue-100 hover:!border-blue-600 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Fax</h3>
                      <a
                        href="tel:+212522985336"
                        className="text-accent hover:underline font-semibold"
                      >
                        +212 5229-85336
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-6 rounded-xl border-2 !border-blue-100 hover:!border-blue-600 bg-gradient-to-br from-purple-500/10 to-purple-500/5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Email</h3>
                      <a
                        href="mailto:info@transfaro.com"
                        className="text-accent hover:underline font-semibold"
                      >
                        info@transfaro.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group p-6 rounded-xl border-2 !border-blue-100 hover:!border-blue-600 bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Address</h3>
                      <p className="text-black font-medium leading-relaxed">
                        119 Bir Anzarane<br />
                        Casablanca 20330<br />
                        Morocco
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group p-6 rounded-xl border-2 !border-blue-100 hover:!border-blue-600 bg-gradient-to-br from-green-500/10 to-green-500/5 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Business Hours</h3>
                      <p className="text-black font-medium leading-relaxed">
                        Monday - Friday: 8:30 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 12:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-slide-in-right">
              <div className="rounded-xl overflow-hidden border-2 border-accent/20 shadow-xl h-full min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8920919628766!2d-7.588860!3d33.573110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d28a7d4e4e4d%3A0x1234567890abcdef!2s119%20Bir%20Anzarane%2C%20Casablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-container bg-blue-600/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Discuss Your Needs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a question or are ready to get started, our team is ready to help you find the perfect freight and logistics solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/quote">
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    <b>Request a Quote</b>
                  </span>
                </Link>
              </Button>
              <a href="mailto:info@transfaro.com">
                <Button className="bg-white border-2 !border-blue-600 text-blue-600 hover:bg-blue-400 hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 font-semibold">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-container bg-background bg-white">
        <div className="container">
          <div className="text-center animate-fade-in-up">
            <h1 className="section-title">Follow Us</h1>
            <p className="section-subtitle mb-8 text-center !text-black mx-auto">
              <b>Stay updated with our latest news and updates</b>
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/transfaro/", color: "from-blue-600 to-blue-700" },
                { name: "Instagram", url: "https://instagram.com", color: "from-pink-500 to-purple-600" },
                { name: "Facebook", url: "https://www.facebook.com/TransfaroOfficiel", color: "from-blue-500 to-blue-600" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all font-semibold hover:scale-105`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
