import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Leaf } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-forest">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="text-cream">
            <span className="inline-block px-4 py-1.5 bg-cream/10 border border-cream/20 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-cream/80 leading-relaxed mb-10">
              Whether you are looking to source premium agricultural produce or seeking 
              reliable market access for your farm products, we are here to help.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="mailto:connect@cropzy.co.in"
                className="flex items-center gap-4 p-4 bg-cream/5 rounded-xl border border-cream/10 hover:bg-cream/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center group-hover:bg-golden/30 transition-colors">
                  <Mail className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <p className="text-cream/60 text-sm">Email Us</p>
                  <p className="text-cream font-medium">connect@cropzy.co.in</p>
                </div>
              </a>

              <a
                href="tel:+917702498841"
                className="flex items-center gap-4 p-4 bg-cream/5 rounded-xl border border-cream/10 hover:bg-cream/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center group-hover:bg-golden/30 transition-colors">
                  <Phone className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <p className="text-cream/60 text-sm">Call Us</p>
                  <p className="text-cream font-medium">+91 7702498841</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-cream/5 rounded-xl border border-cream/10">
                <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-golden" />
                </div>
                <div>
                  <p className="text-cream/60 text-sm">Visit Us</p>
                  <p className="text-cream font-medium leading-relaxed">
                    Anivek Greenfarms Private Limited<br />
                    Co Karma, 2nd Floor, Plot No 5, Survey No 62,<br />
                    Inorbit Mall Road, Hitech City,<br />
                    Hyderabad, Telangana – 500081, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-cream rounded-2xl p-8 shadow-elevated">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  I am a...
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                  <option value="">Select an option</option>
                  <option value="buyer">Buyer / Brand</option>
                  <option value="seller">Farmer / Seller</option>
                  <option value="partner">Potential Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit" variant="golden" className="w-full" size="lg">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
