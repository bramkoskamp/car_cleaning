export function smoothScrollToId(
  id: string,
  offset = 0,
  options?: { duration?: number; preferNative?: boolean; respectReducedMotion?: boolean }
) {
  const el = document.getElementById(id);
  if (!el) return;
  const supportsNative = 'scrollBehavior' in document.documentElement.style;
  const preferNative = options?.preferNative ?? false;
  const respectReducedMotion = options?.respectReducedMotion ?? false;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  const rect = el.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - offset;

  // Use native only if explicitly preferred and not reduced-motion (unless overridden)
  if (supportsNative && preferNative && (!reduceMotion || !respectReducedMotion)) {
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    return;
  }

  // Manual animation: consistent across browsers and ignores reduced motion if desired
  const startY = window.scrollY || window.pageYOffset || 0;
  const distance = targetY - startY;
  const duration = Math.max(0, options?.duration ?? 500); // ms
  const startTime = performance.now();

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function smoothScrollToTop() {
  const supportsNative = 'scrollBehavior' in document.documentElement.style;
  // Force manual animation for consistency (native may ignore due to reduced-motion)
  const startY = window.scrollY || window.pageYOffset || 0;
  const duration = 400;
  const startTime = performance.now();
  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    window.scrollTo(0, startY * (1 - eased));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
