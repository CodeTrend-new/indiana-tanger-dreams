import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, number: "150+", label: "Projets Réalisés" },
  { icon: Users, number: "120+", label: "Clients Satisfaits" },
  { icon: Clock, number: "10+", label: "Années d'Expérience" },
  { icon: Star, number: "5.0", label: "Note Moyenne" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="gold-line" />
              <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
                À Propos
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Créateurs d'Espaces
              <br />
              <span className="italic text-primary">d'Exception</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Indiana Tanger est votre partenaire de confiance pour la décoration et
              l'aménagement intérieur à Tanger. Nous croyons que chaque espace raconte
              une histoire, et notre mission est de la rendre magnifique.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              De la conception sur mesure d'un simple espace à la rénovation complète
              d'appartements, maisons et jardins, notre équipe passionnée met son
              expertise à votre service pour créer des intérieurs qui vous ressemblent.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Parlons de Votre Projet
            </a>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-sm p-8 text-center hover-lift"
              >
                <stat.icon className="text-accent mx-auto mb-4" size={28} />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
