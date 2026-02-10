import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Home, TreePine, Palette, Lightbulb, Wrench } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Décoration Sur Mesure",
    description:
      "Conception personnalisée adaptée à vos goûts, votre espace et votre budget. Chaque détail est pensé pour créer une harmonie parfaite.",
  },
  {
    icon: Home,
    title: "Aménagement Complet",
    description:
      "Rénovation et aménagement total d'appartements et maisons. Du sol au plafond, nous transformons votre intérieur.",
  },
  {
    icon: TreePine,
    title: "Jardins & Extérieurs",
    description:
      "Création de jardins, terrasses et espaces extérieurs qui prolongent votre intérieur en toute élégance.",
  },
  {
    icon: Palette,
    title: "Conseil en Décoration",
    description:
      "Accompagnement personnalisé dans le choix des couleurs, matériaux et mobilier pour un résultat harmonieux.",
  },
  {
    icon: Lightbulb,
    title: "Design d'Éclairage",
    description:
      "Création d'ambiances lumineuses sur mesure pour sublimer chaque pièce et créer l'atmosphère parfaite.",
  },
  {
    icon: Wrench,
    title: "Rénovation d'Espace",
    description:
      "Transformation complète de vos espaces existants avec une approche moderne et fonctionnelle.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="gold-line" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Nos Services
            </span>
            <span className="gold-line" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            L'Art de la Décoration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des solutions complètes pour transformer chaque espace en un lieu de vie exceptionnel
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 bg-card rounded-sm border border-border hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
