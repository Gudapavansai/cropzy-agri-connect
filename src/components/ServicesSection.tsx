import { 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  GitBranch,
  Globe,
  Warehouse,
  BookOpen,
  Wallet
} from "lucide-react";

const buyerServices = [
  {
    icon: ShieldCheck,
    title: "Quality Control & Compliance",
    description: "Premium quality assurance with 100% traceability to farm-gate level and compliance as per global standards."
  },
  {
    icon: Truck,
    title: "Farm to Factory Sourcing",
    description: "Direct sourcing from verified farmers as per the business needs of the clients."
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Timely insights on market intelligence to plan and forecast the demand effectively."
  },
  {
    icon: GitBranch,
    title: "Backward Integration",
    description: "Establish backward integration programs for business clients in accordance with their compliance requirements."
  }
];

const sellerServices = [
  {
    icon: Globe,
    title: "Market Linkage & Transparent Pricing",
    description: "Direct access to buyers worldwide by eliminating intermediaries with transparency in pricing."
  },
  {
    icon: Warehouse,
    title: "Farmgate Sourcing",
    description: "Help farmers overcome supply chain costs with direct farmgate sourcing for better price realization."
  },
  {
    icon: BookOpen,
    title: "Crop Advisory Services",
    description: "Access to crop advisory services from seed to harvest with regular field visits and expert connectivity."
  },
  {
    icon: Wallet,
    title: "Financial Support",
    description: "Working capital support through integration of financial institutes like NBFCs and Fintech companies."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Empowering Every Link in the Chain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for both buyers and sellers in the agricultural ecosystem
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Buyers Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">For Buyers</h3>
            </div>
            <div className="space-y-6">
              {buyerServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-soft hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sellers Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-golden rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-forest-dark">S</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">For Sellers</h3>
            </div>
            <div className="space-y-6">
              {sellerServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-soft hover:border-golden/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-golden/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-golden-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
