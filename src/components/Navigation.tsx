import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img 
          src="/lovable-uploads/77bca66d-206a-4cf5-b0d5-7512af5704e9.png" 
          alt="MyGroupGo Logo" 
          className="h-10"
        />
        
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            Features
          </Link>
          <Link
            to="benefits"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            Benefits
          </Link>
          <Link
            to="how-it-works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            How It Works
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};