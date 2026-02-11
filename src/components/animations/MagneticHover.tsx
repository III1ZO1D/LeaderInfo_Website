'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticHover({
  children,
  className,
  strength = 0.3,
}: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 400, damping: 20, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
