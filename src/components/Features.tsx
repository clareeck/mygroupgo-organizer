import { Calendar, Users, Car, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Schedule Events",
    description: "Easily plan practices, games, and rehearsals with our intuitive calendar system."
  },
  {
    icon: Users,
    title: "Manage Teams",
    description: "Keep track of attendance, roles, and responsibilities in one central location."
  },
  {
    icon: Car,
    title: "Coordinate Carpools",
    description: "Organize transportation efficiently with our built-in carpool coordinator."
  },
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Assign and track volunteer tasks to keep everything running smoothly."
  }
];

export const Features = () => {
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
            Everything You Need to Manage Your Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text/70"
          >
            Powerful features designed to make team organization effortless
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-text">{feature.title}</h3>
              <p className="text-text/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};