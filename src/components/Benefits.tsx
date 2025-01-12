import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Set up in 2 mins.",
  "Track everything in your group dashboard",
  "Send broadcast communications to the whole group",
  "No more long message chains to assign tasks",
  "No awkward reminders. We can send the reminders for you.",
  "Share out tasks easily to share the load."
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            Benefits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text/70"
          >
            Why teams love using MyGroupGo
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 mb-6"
            >
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-text/80">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};