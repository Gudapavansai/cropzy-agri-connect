import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import spicesImage from "@/assets/spices.jpg";
import grainsImage from "@/assets/grains.jpg";
import nutsSeedsImage from "@/assets/nuts-seeds.jpg";
import fruitsVegetablesImage from "@/assets/fruits-vegetables.jpg";
import coffeeImage from "@/assets/coffee.jpg";
import dehydratedImage from "@/assets/dehydrated.jpg";

const productCategories = [
  {
    id: "spices",
    title: "Spices & Herbs",
    image: spicesImage,
    items: [
      "Dry Red Chilli – Whole, Flakes and Ground",
      "Turmeric – Fingers & Bulbs whole and Ground",
      "Cumin – Sortex & Machine Cleaned Whole and Ground",
      "Coriander – Sortex and Machine Cleaned Whole and Ground",
      "Fennel – Whole",
      "Black Pepper – Whole",
      "Fenugreek – Whole",
      "Cassia – Whole",
      "Cloves – Whole",
      "Cardamom – Whole",
      "Ajwain – Whole"
    ]
  },
  {
    id: "grains",
    title: "Grains & Pulses",
    image: grainsImage,
    items: [
      "Maize",
      "Rice",
      "Wheat",
      "Jowar",
      "Ragi",
      "Bajra",
      "Millets",
      "Turdal / Arhar / Red Gram",
      "Urad Dal / Black Gram",
      "Green Gram",
      "Chana Dal / Bengal Gram"
    ]
  },
  {
    id: "nuts",
    title: "Nuts & Seeds",
    image: nutsSeedsImage,
    items: [
      "Peanuts",
      "Cashew Nuts",
      "Foxtail Nut",
      "Sesame Seeds",
      "Sunflower Seeds",
      "Watermelon Seeds",
      "Chia Seeds",
      "Basil Seeds"
    ]
  },
  {
    id: "beverages",
    title: "Beverages",
    image: coffeeImage,
    items: ["Coffee"]
  },
  {
    id: "fruits",
    title: "Fruits & Vegetables",
    image: fruitsVegetablesImage,
    items: ["All seasonal and imported fruits and vegetables"]
  },
  {
    id: "dehydrated",
    title: "Dehydrated Products",
    image: dehydratedImage,
    items: ["Dehydrated Onion", "Dehydrated Garlic"]
  }
];

export const ProductsSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>("spices");

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Premium Agricultural Produce
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sourced directly from verified farmers across India, our products meet 
            the highest quality and safety standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-heading font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">
                <button
                  onClick={() => setExpandedId(expandedId === category.id ? null : category.id)}
                  className="w-full flex items-center justify-between text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-sm font-medium">
                    {category.items.length} product{category.items.length > 1 ? "s" : ""} available
                  </span>
                  {expandedId === category.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {expandedId === category.id && (
                  <ul className="mt-4 space-y-2 animate-fade-in">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="default" size="lg">
              Request Product Catalog
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
