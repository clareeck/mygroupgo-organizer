import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            See How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text/70"
          >
            Watch how easy it is to manage your group with MyGroupGo
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl relative group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src="/lovable-uploads/faf6d346-1556-42b7-8831-35a841af320f.png" 
                alt="MyGroupGo Demo Video Thumbnail" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
              </div>
            </>
          ) : (
            <video 
              className="w-full h-auto"
              controls
              autoPlay
              src="/lovable-uploads/faf6d346-1556-42b7-8831-35a841af320f.mp4"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
};