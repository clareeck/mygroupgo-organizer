import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleJoinWaitlist = async () => {
    if (email) {
      try {
        const { error } = await supabase
          .from('waitlist')
          .insert([{ email }]);
        
        if (error) throw error;
        
        toast({
          title: "Success! You're on the waitlist.",
          duration: 1000,
          className: "bg-[#ffe66D]",
          style: { 
            top: '50%',
            transform: 'translateY(-50%)'
          }
        });
        
        setEmail("");
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "This email is already on the waitlist",
          variant: "destructive",
          duration: 1000,
          style: { 
            top: '50%',
            transform: 'translateY(-50%)'
          }
        });
      }
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-primary/5 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full shadow-sm"
        >
          Organise Groups Effortlessly
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-[#1A535C]">Bring Your Group Together</span>
          <br />
          <span className="text-[#4ecdc4]">Like Never Before</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Say goodbye to messy chats and scattered spreadsheets. 
          <br />
          Effortlessly organize kids’ sports teams and extra-curricular activity groups with schedules, updates, and communication in one place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
};