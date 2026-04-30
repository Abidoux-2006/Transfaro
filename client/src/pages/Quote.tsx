import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { trpc } from "../lib/trpc";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    company: "",
    phone: "",
    website: "",

    shipmentType: "",
    cargoType: "",
    containerType: "",

    commodity: "",
    portLoading: "",
    portDischarge: "",
    placeDelivery: "",

    numContainers: "",
    containerSize: "",

    numPackages: "",
    weight: "",
    volume: "",

    message: "",
    });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendQuoteMutation = trpc.quote.submit.useMutation({
    onSuccess: () => {
      toast.success("Quote request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        shipmentType: "",
        cargoType: "",
        containerType: "",
        commodity: "",
        portLoading: "",
        portDischarge: "",
        placeDelivery: "",
        numContainers: "",
        containerSize: "",
        numPackages: "",
        weight: "",
        volume: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to submit quote request. Please try again.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.phone) {    
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("FORM DATA SENT:", formData);
      await sendQuoteMutation.mutateAsync(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] mt-20 overflow-hidden">        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/RequestPage1.jpg')" }}
        />

        {/* Gradient overlay (kept for branding consistency) */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-accent/60 to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              <b>Get a personalized freight and logistics quote</b>
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-container bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Form */}
            <div className="animate-fade-in-up">
              <h2 className="section-title">Send us your details</h2>

              <p className="section-subtitle mb-8">
                Fill out the form below and our team will get back to you with a customized quote within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone }
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Website
                  </label>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Shipment Type */}
                <label className="block text-sm font-bold text-foreground mb-2">
                    Shipment Type
                </label>
                <select name="shipmentType" value={formData.shipmentType} onChange={handleChange} className="w-full px-4 py-2 border-2 !border-blue-200 rounded-lg focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                  <option value="">Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Land Transportation</option>
                  <option>Tank Container</option>
                </select>

                {/* Cargo Type */}
                <label className="block text-sm font-bold text-foreground mb-2">
                    Cargo Type
                </label>
                <select name="cargoType" value={formData.cargoType} onChange={handleChange} className="w-full px-4 py-2 border-2 !border-blue-200 rounded-lg focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                  <option value="">Dangerous Goods</option>
                  <option>General Cargo</option>
                  <option>Hanging Garment</option>
                  <option>Liquid</option>
                </select>

                {/* Container Type */}
                <select name="containerType" value={formData.containerType} onChange={handleChange} className="w-full px-4 py-2 border-2 !border-blue-200 rounded-lg focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                  <option value="">FCL</option>
                  <option>LCL</option>
                  <option>Break Bulk</option>
                  <option>ISO Tank</option>
                </select>

                {/* Shipment Info */}
                <Input name="commodity" value={formData.commodity} placeholder="Commodity" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                <Input name="portLoading" value={formData.portLoading} placeholder="Port of Loading" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                <Input name="portDischarge" value={formData.portDischarge} placeholder="Port of Discharge" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                <Input name="placeDelivery" value={formData.placeDelivery} placeholder="Place of Delivery" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>

                {/* FCL */}
                <label className="block text-sm font-bold text-foreground mb-2">
                    FCL Cargo
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <Input name="numContainers" value={formData.numContainers} placeholder="Number of Containers" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                  <select
                    name="containerSize"
                    value={formData.containerSize}
                    onChange={handleChange}
                    className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors rounded-sm"
                  > 
                  <option value="disabled" disabled>
                      Select container size
                    </option>
                    <option>20'</option>
                    <option>40'</option>
                    <option>40' HC</option>
                    <option>45'</option>
                    <option>Reefer</option>
                    <option>ISO Tank</option>
                  </select>
                </div>

                {/* LCL */}
                <label className="block text-sm font-bold text-foreground mb-2">
                    LCL Cargo
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input name="numPackages" value={formData.numPackages} placeholder="Number of Packages" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                  <Input name="weight" value={formData.weight} placeholder="Weight (Kgs)" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                  <Input name="volume" value={formData.volume} placeholder="Volume (CBM)" onChange={handleChange} className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"/>
                </div>

                {/* Message */}
                <label className="block text-sm font-bold text-foreground mb-2">
                    Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 !border-blue-200 focus:!border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
                />

                <div className="space-y-6">
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white !border-2 !border-blue-600 hover:bg-white hover:text-blue-600 hover:!border-blue-600 flex items-center justify-center gap-2 font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Quote Request
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  All fields are required. We'll review your request and contact you within 24 hours.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">

                {/* Why Request a Quote */}
                <h3 className="text-4xl font-bold text-foreground mb-4 mt-6 flex items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-300 rounded" />
                  Why Request a Quote?
                </h3>
                <div>
                  <ul className="space-y-3">
                    {[
                      "Get competitive pricing tailored to your specific needs",
                      "Receive personalized service recommendations from experts",
                      "Discuss your requirements directly with our team",
                      "Understand all available shipping and logistics options",
                      "Plan your freight budget effectively and transparently",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-200 hover:border-blue-500/60 transition-all">
                  <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      <Send className="w-5 h-5" />
                    </div>
                    Prefer to call us?
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Our team is available to discuss your requirements directly.
                  </p>

                  <div className="space-y-2">

                    <p className="text-sm">
                      <span className="font-bold text-foreground">Phone:</span>
                      <br />
                      <a href="tel:+212522980833" className="text-blue-600 hover:underline font-semibold">
                        +212 5229-80833
                      </a>
                      <br />
                      <a href="tel:+212522987334" className="text-blue-600 hover:underline font-semibold">
                        +212 5229-87334
                      </a>
                    </p>

                    <p className="text-sm">
                      <span className="font-bold text-foreground">Email:</span>
                      <br />
                      <a href="mailto:info@transfaro.com" className="text-blue-600 hover:underline font-semibold">
                        info@transfaro.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-200 hover:border-green-500/60 transition-all">
                  <h3 className="font-bold text-foreground mb-2 text-lg flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    Fast Response Time
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We typically respond to quote requests within 24 hours. For urgent inquiries, please call us directly for immediate assistance.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container bg-blue-100">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Services We Quote</h2>
            <p className="section-subtitle text-center mx-auto">
              <b>We provide quotes for all our comprehensive services</b>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Transit", 
                description: "Domestic and regional transport",
                color: "from-blue-500 to-blue-600"
              },
              { 
                title: "Transport International", 
                description: "Global freight solutions",
                color: "from-cyan-500 to-cyan-600"
              },
              { 
                title: "Customs Clearance", 
                description: "Expert documentation and clearance",
                color: "from-purple-500 to-purple-600"
              },
              { 
                title: "Logistics", 
                description: "End-to-end supply chain management",
                color: "from-orange-500 to-orange-600"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 rounded-xl text-white h-full transition-all hover:shadow-xl hover:scale-105 cursor-pointer`}>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-white text-black">
        <div className="container text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Have Questions?
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            <b>Check out our Contact page or Services page to learn more about what we offer</b>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="!bg-blue-600 !text-white !border-2 !border-blue-600 hover:!bg-white hover:!text-blue-600 hover:!border-blue-600 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>

            <Button
              asChild
              className="bg-white border-2 !border-blue-600 text-blue-600 hover:bg-blue-400 hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 font-semibold"
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}