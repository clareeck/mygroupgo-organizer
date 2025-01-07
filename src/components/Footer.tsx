import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <img 
              src="/lovable-uploads/77bca66d-206a-4cf5-b0d5-7512af5704e9.png" 
              alt="MyGroupGo Logo" 
              className="h-8"
            />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <Link
              to="/privacy-policy"
              className="text-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};