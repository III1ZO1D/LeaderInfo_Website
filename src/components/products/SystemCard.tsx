'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  FileText,
  HardHat,
  Flame,
  ClipboardList,
  Zap,
  BookOpen,
  Cpu,
  Train,
  Settings,
  Gauge,
  HeartPulse,
  UtensilsCrossed,
  CheckSquare,
  Users,
  Receipt,
  Hospital,
  Pill,
  ArrowRight,
  Copy,
  ListChecks,
  Ruler,
  PenTool,
  AlertTriangle,
  Leaf,
  MapPin,
  Globe,
  Gavel,
  TrendingUp,
  Navigation,
  ShoppingCart,
  LayoutDashboard,
  ExternalLink,
  ClipboardCheck,
  Thermometer,
  Droplets,
} from 'lucide-react';
import type { System } from '@/types/category';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  FileText,
  HardHat,
  Flame,
  ClipboardList,
  Zap,
  BookOpen,
  Cpu,
  Train,
  Settings,
  Gauge,
  HeartPulse,
  UtensilsCrossed,
  CheckSquare,
  Users,
  Receipt,
  Hospital,
  Pill,
  Copy,
  ListChecks,
  Ruler,
  PenTool,
  AlertTriangle,
  Leaf,
  MapPin,
  Globe,
  Gavel,
  TrendingUp,
  Navigation,
  ShoppingCart,
  LayoutDashboard,
  ClipboardCheck,
  Thermometer,
  Droplets,
};

const categoryGradients: Record<string, string> = {
  bezopasnost: 'from-accent/20 to-accent-amber/10',
  stroitelyu: 'from-primary/20 to-blue-400/10',
  promyshlennost: 'from-accent-violet/20 to-purple-400/10',
  mashinostroenie: 'from-secondary/20 to-emerald-400/10',
  laboratoriya: 'from-secondary/20 to-teal-400/10',
  'pishchevaya-khim-farm': 'from-accent-amber/20 to-yellow-400/10',
  medicina: 'from-accent/20 to-rose-400/10',
  'yuristu-buhgalteru': 'from-primary/20 to-indigo-400/10',
};

interface SystemCardProps {
  system: System;
  categorySlug: string;
  /** If true, adds a subtle "from another category" visual cue */
  isCrossCategory?: boolean;
}

export function SystemCard({ system, categorySlug, isCrossCategory = false }: SystemCardProps) {
  const Icon = iconMap[system.icon] || FileText;
  const gradient = categoryGradients[categorySlug] || 'from-primary/20 to-blue-400/10';
  const [imgError, setImgError] = useState(false);
  // Try .png first (uploaded screenshots), thumbnail field is fallback path
  const screenshotSrc = `/images/systems/${system.slug}.png`;

  const isExternal = !!system.externalUrl;
  const href = isExternal ? system.externalUrl! : `/products/${categorySlug}/${system.slug}`;

  const cardContent = (
    <motion.div
      className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {/* Gradient accent line at top */}
      <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Visual header */}
      <div className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Real screenshot */}
        {!imgError && (
          <Image
            src={screenshotSrc}
            alt={system.title}
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExODI3Ii8+PC9zdmc+"
          />
        )}

        {/* Fallback: abstract pattern + icon */}
        {imgError && (
          <>
            <div className="absolute inset-0 opacity-[0.15]">
              <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect x="10" y="15" width="30" height="40" rx="4" fill="currentColor" opacity="0.4" />
                <rect x="50" y="20" width="25" height="30" rx="4" fill="currentColor" opacity="0.3" />
                <rect x="85" y="10" width="35" height="50" rx="4" fill="currentColor" opacity="0.2" />
                <rect x="130" y="18" width="22" height="35" rx="4" fill="currentColor" opacity="0.25" />
                <rect x="162" y="12" width="28" height="45" rx="4" fill="currentColor" opacity="0.15" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                <Icon className="h-7 w-7 text-foreground/80" />
              </div>
            </div>
          </>
        )}

        {/* Cross-category badge */}
        {isCrossCategory && (
          <div className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-foreground/60 font-medium">
            смежная
          </div>
        )}

        {/* External link badge */}
        {isExternal && (
          <div className="absolute top-2 right-2 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-foreground/60 font-medium">
            <ExternalLink className="h-3 w-3" />
            онлайн
          </div>
        )}

        <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold mb-3 leading-tight">{system.title}</h3>

        {/* Highlights pills */}
        {system.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {system.highlights.slice(0, 2).map((h) => (
              <span
                key={h}
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {system.shortDescription}
        </p>

        <div className="flex items-center gap-1 text-sm font-medium text-primary">
          {isExternal ? 'Открыть' : 'Подробнее'}
          {isExternal ? (
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          ) : (
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-150" />
          )}
        </div>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="block group">
      {cardContent}
    </Link>
  );
}
