import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const CallToAction = () => {
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Organize your group now
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            Join the waitlist now to access early features and have a winning season
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};