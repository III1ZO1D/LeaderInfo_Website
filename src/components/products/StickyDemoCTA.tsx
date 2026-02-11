'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useDemoModal } from '@/components/providers/DemoModalProvider';

export function StickyDemoCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const demoModal = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => demoModal.open()}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          aria-label="Получить демо-доступ"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Получить демо</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
