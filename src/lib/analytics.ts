// --- Type declarations for global analytics ---

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (id: number, action: string, ...args: unknown[]) => void;
  }
}

// --- Config ---

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const YM_ID = process.env.NEXT_PUBLIC_YM_ID;

// --- Google Analytics 4 ---

export function gaPageview(url: string) {
  if (typeof window === 'undefined' || !window.gtag || !GA_ID) return;
  window.gtag('config', GA_ID, { page_path: url });
}

export function gaEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params);
}

// --- Yandex Metrica ---

export function ymGoal(target: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.ym || !YM_ID) return;
  window.ym(Number(YM_ID), 'reachGoal', target, params);
}

export function ymHit(url: string) {
  if (typeof window === 'undefined' || !window.ym || !YM_ID) return;
  window.ym(Number(YM_ID), 'hit', url);
}

// --- High-level event helpers ---

export function trackDemoRequest() {
  gaEvent('generate_lead', {
    event_category: 'form',
    event_label: 'demo_request',
  });
  ymGoal('demo_request');
}

export function trackContactSubmit() {
  gaEvent('generate_lead', {
    event_category: 'form',
    event_label: 'contact_form',
  });
  ymGoal('contact_form');
}

export function trackCTAClick(location: string) {
  gaEvent('cta_click', {
    event_category: 'engagement',
    event_label: location,
  });
  ymGoal('cta_click', { location });
}

export function trackProductView(productName: string) {
  gaEvent('view_item', {
    event_category: 'product',
    event_label: productName,
  });
  ymGoal('product_view', { product: productName });
}
