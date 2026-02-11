'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="relative p-2 rounded-xl hover:bg-white/[0.06] transition-colors"
      aria-label={isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isLight ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isLight ? (
          <Sun className="h-5 w-5 text-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-foreground" />
        )}
      </motion.div>
    </button>
  );
}
