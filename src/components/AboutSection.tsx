import { Target, Eye, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-up">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Revolutionizing Agricultural Supply Chains
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            CROPZY is an emerging B2B company committed to the supply of high-quality 
            produce through fair and transparent means. Our goal is to revolutionize 
            the agricultural supply chain by bridging the gap between growers and 
            commercial buyers.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-500 animate-fade-up animation-delay-300">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide reliable access to high-quality, sustainably grown agricultural 
              produce in a transparent and efficient way that supports farmers and meets 
              the diverse needs of our business clients.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elevated transition-all duration-500 animate-fade-up animation-delay-400">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To emerge as the most trusted and reliable partner in the food industry 
              for our clients by reshaping the agricultural ecosystem through innovation 
              and sustainability, leaving a positive impact on farmers&apos; livelihoods.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center animate-fade-up animation-delay-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Leadership Team</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-heading font-bold text-white">PV</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground">
                Patlolla Vivekananda Reddy
              </h4>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-forest-light rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-heading font-bold text-white">PA</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground">
                Pendyala Anil Kumar
              </h4>
              <p className="text-muted-foreground">Co-Founder & CBO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
