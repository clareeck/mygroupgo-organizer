import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = async () => {
    if (!email) return;

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) throw error;

      toast("Success!", {
        description: "You're on the waitlist!",
        position: "top-center",
        className: "bg-[#FFE66D] text-foreground border-none",
        duration: 3000,
      });
      
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast("Error", {
        description: "Something went wrong. Please try again.",
        position: "top-center",
        className: "bg-[#ff6b6b] text-white border-none",
      });
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-2 mb-8 text-sm font-medium text-primary-dark bg-primary/5 rounded-full"
        >
          Organize Teams Effortlessly
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight"
        >
          Bring Your Team Together
          <br />
          <span className="text-primary">Like Never Before</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Simplify team management, coordinate practices, and organize carpools - all in one place. Perfect for sports teams, music groups, and social clubs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md bg-white border-2 border-gray-200 placeholder:text-gray-400 h-14 text-lg rounded-xl focus:border-primary"
          />
          <Button 
            size="lg" 
            onClick={handleJoinWaitlist}
            className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 h-14 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};