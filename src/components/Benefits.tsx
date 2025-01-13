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
    <section className="py-32 px-4 bg-[#F1F0FB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Benefits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Why teams love using MyGroupGo
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-background to-primary/5 rounded-3xl p-12 shadow-xl shadow-primary/5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-6 mb-8 last:mb-0"
            >
              <div className="bg-primary/10 rounded-full p-2">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
