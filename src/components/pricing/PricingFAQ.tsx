'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFAQProps {
  faqs: { question: string; answer: string }[];
}

export function PricingFAQ({ faqs }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Вопросы о ценах</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Ответы на{' '}
            <span className="text-gradient-primary">частые вопросы</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className={cn(
                  'flex w-full items-center justify-between gap-4 rounded-2xl p-6 text-left transition-all duration-300',
                  openIndex === index
                    ? 'glass-card border-l-2 border-l-primary shadow-[0_0_30px_hsl(var(--primary)/0.05)]'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border border-transparent'
                )}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-colors',
                      openIndex === index && 'text-primary'
                    )}
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
