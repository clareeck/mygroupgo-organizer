import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    if (email) {
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Organize your group now
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist now to access early features and have a winning season
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md bg-white/80 backdrop-blur-sm border-primary/20 placeholder:text-muted-foreground/60 text-lg h-14 px-6"
            />
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-medium px-8 h-14 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};