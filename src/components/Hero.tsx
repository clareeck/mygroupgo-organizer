import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    if (email) {
      // Here you would typically handle the email submission
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary-dark bg-primary/10 rounded-full"
        >
          Organize Teams Effortlessly
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-text"
        >
          Bring Your Team Together
          <br />
          <span className="text-primary">Like Never Before</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text/80 mb-8 max-w-2xl mx-auto"
        >
          Simplify team management, coordinate practices, and organize carpools - all in one place. Perfect for sports teams, music groups, and social clubs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md"
          />
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-secondary hover:bg-primary-dark whitespace-nowrap"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};