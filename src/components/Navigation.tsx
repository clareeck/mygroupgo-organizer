import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <img 
          src="/lovable-uploads/77bca66d-206a-4cf5-b0d5-7512af5704e9.png" 
          alt="MyGroupGo Logo" 
          className="h-8"
        />
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            Features
          </Link>
          <Link
            to="benefits"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            Benefits
          </Link>
          <Link
            to="how-it-works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-foreground hover:text-primary cursor-pointer transition-colors text-lg"
          >
            How It Works
          </Link>
          <Button 
            variant="secondary"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Log in
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};