import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-[#ffffff]">
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
          className="max-w-4xl mx-auto overflow-hidden shadow-xl relative group cursor-pointer bg-white rounded-xl border border-gray-200/50"
          onClick={() => setIsPlaying(true)}
        >
          <div className="aspect-video w-full">
            {!isPlaying ? (
              <>
                <img 
                  src="/lovable-uploads/faf6d346-1556-42b7-8831-35a841af320f.png" 
                  alt="MyGroupGo Demo Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                </div>
              </>
            ) : (
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1046358451?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Introducing MyGroupGo"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
      {isPlaying && (
        <script src="https://player.vimeo.com/api/player.js" async />
      )}
    </section>
  );
};