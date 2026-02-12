'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { useEffect } from 'react';

export function DemoModal() {
  const { isOpen, close } = useDemoModal();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape + focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }

      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return;

        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Auto-focus first focusable element
    requestAnimationFrame(() => {
      const modal = document.querySelector('[role="dialog"]');
      const firstFocusable = modal?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea'
      );
      firstFocusable?.focus();
    });

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 w-full max-w-md glass-card p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Ambient glow behind modal */}
            <div className="absolute -inset-20 -z-10 bg-radial-glow from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="mb-6">
              <span className="label-mono text-primary mb-2 block">
                Демо-доступ
              </span>
              <h3 id="demo-modal-title" className="text-2xl font-bold">Получить демо-доступ</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Заполните форму и мы свяжемся с вами в течение 2 часов
              </p>
            </div>

            <QuickLeadForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
