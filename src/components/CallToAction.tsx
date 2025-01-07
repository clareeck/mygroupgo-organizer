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
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Organise your group now
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist now to access early features and have a winning season
          </p>
          <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md bg-white placeholder:text-foreground"
            />
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-secondary hover:bg-primary-dark whitespace-nowrap"
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