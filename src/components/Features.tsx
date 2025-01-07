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
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Everything You Need to Manage Your Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
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
              className="p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};