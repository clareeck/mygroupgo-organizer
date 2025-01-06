import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Group",
    description: "Set up your team profile and invite members to join."
  },
  {
    number: "02",
    title: "Schedule Events",
    description: "Add practices, games, or meetings to your group calendar."
  },
  {
    number: "03",
    title: "Assign Tasks",
    description: "Create and delegate tasks to team members."
  },
  {
    number: "04",
    title: "Coordinate Travel",
    description: "Organize carpools and manage transportation logistics."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            How MyGroupGo Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text/70"
          >
            Get your team organized in four simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2 text-text">{step.title}</h3>
              <p className="text-text/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};