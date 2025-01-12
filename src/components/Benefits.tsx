import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Set up in 2 mins.",
    "Track everything in your group dashboard.",
    "Personalised URL to share with your group.",
    "No more long whatsapp message chains."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything in one place. <span className="text-primary">Full control.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-primary/20 transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-xl text-foreground/80">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};