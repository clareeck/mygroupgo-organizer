import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Group",
    description: "Set up your team profile"
  },
  {
    number: "02",
    title: "Invite Members to Join",
    description: "Send a secure link to invite members to join."
  },
  {
    number: "03",
    title: "Schedule Events & Assign Tasks",
    description: "Add practices, games, or meetings to your group calendar. Create and delegate tasks to team members."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-accent/20">
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
            Get your team organized in three simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-xl shadow-md p-6"
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