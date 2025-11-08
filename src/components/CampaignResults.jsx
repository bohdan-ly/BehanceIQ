'use client';

import { useRef, useState, useLayoutEffect, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Container from './Container';
import FadeIn from './FadeIn';
import clsx from 'clsx';

/**
 * Sample campaign results data
 * In production, replace with actual campaign metrics and case studies
 */
const campaignCases = [
  {
    id: 1,
    client: 'Peiko Agency',
    metric: '+350%',
    metricLabel: 'Збільшення кількості лідів',
    description: 'Впровадження BehanceIQ™ дало стабільний потік лідів',
    duration: '90 днів',
    industry: 'Дизайн для B2B',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    client: 'DizArm Agency',
    metric: '+20',
    metricLabel: 'Кваліфікованих лідів на місяць',
    description: 'Стабільний щомісячний потік лідів із середнім чеком від $7k',
    duration: '60 днів',
    industry: 'Креативна агенція',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    client: 'Marketing Agency',
    metric: '$140k+',
    metricLabel: 'Згенерований дохід',
    description: 'Конвертація кейсів в лідген за допомогою фреймворку BehanceIQ™',
    duration: '120 днів',
    industry: 'B2B Services',
    color: 'from-green-500 to-emerald-500',
  },
];

/**
 * CampaignResults component
 * Displays campaign case studies in a horizontal scrolling gallery
 * Uses Framer Motion's scroll hooks to create smooth horizontal scroll animation
 * Cards scroll horizontally as user scrolls vertically through the page
 *
 * Animation pattern:
 * - Scroll container holds cards that will be translated horizontally
 * - Ghost div provides scroll height equal to total width of all cards
 * - useScroll tracks scroll progress relative to container
 * - useTransform converts scroll progress to horizontal translation
 * - useSpring provides smooth physics-based animation
 *
 * Based on Framer Motion scroll animation pattern
 */
const CampaignResults = ({ className = '' }) => {
  // Reference to the scroll container (cards container that will be translated)
  const scrollRef = useRef(null);
  // Reference to the ghost div (provides scroll height)
  const ghostRef = useRef(null);
  // Reference to the container that wraps sticky section and ghost (for scroll tracking)
  const containerRef = useRef(null);
  // State to track total scroll width (total width of all cards)
  const [scrollRange, setScrollRange] = useState(0);
  // State to track viewport width
  const [viewportW, setViewportW] = useState(0);

  /**
   * Measure the total width of all cards (scroll width)
   * This determines how far we need to scroll horizontally
   * Re-measures on window resize and when cards are rendered
   */
  useLayoutEffect(() => {
    const measureScrollWidth = () => {
      if (scrollRef.current) {
        // Get the scroll width of the container (total width of all cards)
        // This includes all cards at 100vw each
        const cardWidth = scrollRef.current.scrollWidth / campaignCases.length;
        const width = cardWidth * (campaignCases.length - 1);
        if (width > 0) {
          setScrollRange(width);
        }
      }
    };

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(measureScrollWidth, 100);

    // Measure on window resize
    window.addEventListener('resize', measureScrollWidth);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', measureScrollWidth);
    };
  }, []);

  /**
   * Handle resize events to update viewport width
   * Uses ResizeObserver to detect viewport changes
   */
  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  /**
   * Set up ResizeObserver to track viewport width changes
   * Modern browsers have ResizeObserver built-in
   */
  useLayoutEffect(() => {
    if (!ghostRef.current) return;

    // Check if ResizeObserver is available (modern browsers)
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(entries => onResize(entries));
      resizeObserver.observe(ghostRef.current);
      // Also observe window resize as fallback
      const handleWindowResize = () => {
        if (typeof window !== 'undefined') {
          setViewportW(window.innerWidth);
        }
      };
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize(); // Initial call
      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', handleWindowResize);
      };
    } else {
      // Fallback for older browsers
      const handleResize = () => {
        if (ghostRef.current) {
          setViewportW(ghostRef.current.offsetWidth);
        }
        if (typeof window !== 'undefined') {
          setViewportW(window.innerWidth);
        }
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [onResize]);

  // Create a motion value for scroll progress
  const scrollProgress = useMotionValue(0);

  /**
   * Manually track scroll progress for the container
   * This works around issues with useScroll and overflow-hidden parents
   * Progress starts when CampaignResults container top reaches viewport top
   * Progress ends after scrolling through the ghost div (scrollRange pixels)
   */
  useEffect(() => {
    const updateScrollProgress = () => {
      if (!containerRef.current || scrollRange === 0) {
        scrollProgress.set(0);
        return;
      }

      const container = containerRef.current;
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Get the container's position relative to viewport
      const rect = container.getBoundingClientRect();

      // Calculate absolute position of container on the page
      // This is the scroll position where container top would be at viewport top (rect.top = 0)
      const containerAbsoluteTop = rect.top + scrollY;

      // Animation starts when container top reaches viewport top (when sticky section pins)
      // At that point: scrollY = containerAbsoluteTop (because rect.top = 0)
      // Animation should progress from 0 to 1 as we scroll scrollRange pixels from that point

      // Calculate scroll position when animation starts (container top at viewport top)
      const animationStartScrollY = containerAbsoluteTop;

      // Calculate how far we've scrolled from the animation start
      // When scrollY < animationStartScrollY: before animation (progress = 0)
      // When scrollY >= animationStartScrollY: during animation (progress 0-1)
      // When scrollY >= animationStartScrollY + scrollRange: after animation (progress = 1)
      const scrollFromStart = scrollY - animationStartScrollY;

      // Progress: 0 to 1 as we scroll from animationStartScrollY to animationStartScrollY + scrollRange
      const progress = Math.min(1, Math.max(0, scrollFromStart / scrollRange));

      scrollProgress.set(progress);
    };

    // Use requestAnimationFrame for smooth updates
    let rafId = null;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    // Update on scroll and resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [scrollProgress, scrollRange]);

  // Transform scroll progress (0-1) to horizontal translation
  // When scroll progress is 0, translateX is 0 (start position - first card visible)
  // When scroll progress is 1, translateX is -(scrollRange - viewportW) (end position - last card visible)
  // This ensures all cards scroll through the viewport
  const transform = useTransform(
    scrollProgress,
    [0, 1],
    scrollRange > 0 && viewportW > 0 ? [0, -(scrollRange - viewportW)] : [0, 0]
  );

  // Spring physics for smooth animation
  // Damping controls how quickly the animation settles
  // Mass affects the inertia of the animation
  // Stiffness controls how responsive the animation is
  // Using tighter damping for more responsive animation
  const physics = { damping: 20, mass: 0.1, stiffness: 100 };
  const spring = useSpring(transform, physics);

  return (
    <section id="campaign-results" className={clsx('relative w-full', className)}>
      {/* Header section - visible before scrolling into gallery */}
      <header className="flex justify-center bg-gradient-to-b from-white to-neutral-50">
        <Container className="w-full py-12">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="font-standard font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Одні з найрезультативніших кейсів
            </h2>
            <p className="font-standard mt-4 text-lg text-neutral-600">
              Реальні метрики від агенцій, які використовують BehanceIQ™ фреймворк
            </p>
          </FadeIn>
        </Container>
      </header>

      {/* Container for scroll tracking - wraps sticky section and ghost div */}
      <div ref={containerRef} className="relative">
        {/* Scroll container - holds the cards that will be translated horizontally */}
        {/* Sticky to viewport, cards scroll horizontally inside */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
          <motion.div
            ref={scrollRef}
            style={{
              x: spring,
              display: 'flex',
              height: '100%',
            }}
            className="will-change-transform"
          >
            {/* Cards container - each card is full viewport width */}
            {/* <div className="flex h-full"> */}
            {campaignCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '100vw', height: '100vh' }}
              >
                {/* Campaign card - centered in viewport */}
                <div className="relative group bg-white rounded-2xl border-2 border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-lg w-full mx-4">
                  {/* Decorative gradient background */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${caseItem.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Metric display */}
                  <div className="relative z-10">
                    {/* Case number label */}
                    <div className="mb-4">
                      <span className="font-standard text-sm font-medium text-neutral-500 uppercase tracking-wide">
                        #{String(index + 1).padStart(3, '0')}
                      </span>
                    </div>

                    {/* Client name */}
                    <div className="mb-4">
                      <span className="font-standard text-sm font-medium text-neutral-500 uppercase tracking-wide">
                        {caseItem.industry}
                      </span>
                      <h3 className="font-standard font-display text-2xl font-semibold text-neutral-950 mt-2">
                        {caseItem.client}
                      </h3>
                    </div>

                    {/* Main metric */}
                    <div className="mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${caseItem.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="font-standard text-3xl font-bold text-white">
                          {caseItem.metric.split('/')[0]}
                        </span>
                      </div>
                      {caseItem.metric.includes('/') && (
                        <div className="text-sm text-neutral-500 mt-1">
                          {caseItem.metric.split('/')[1]}
                        </div>
                      )}
                      <p className="font-standard text-lg font-semibold text-neutral-950 mt-2">
                        {caseItem.metricLabel}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-standard text-base text-neutral-600 leading-relaxed mb-6">
                      {caseItem.description}
                    </p>

                    {/* Duration badge */}
                    <div className="flex items-center gap-2 pt-4 border-t border-neutral-200">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="font-standard text-sm font-medium text-neutral-700">
                        Результати за {caseItem.duration}
                      </span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-950/0 group-hover:to-neutral-950/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </motion.div>
        </div>

        <div
          ref={ghostRef}
          style={{
            height: scrollRange > 0 ? scrollRange : '100vh',
            // height: '100vh',
            width: '1px',
            opacity: 0,
            pointerEvents: 'none',
          }}
          className="relative"
          aria-hidden="true"
        />
      </div>
      <FadeIn className="text-center">
        <p className="font-standard text-neutral-600">
          Результати від агенцій, які використовують{' '}
          <span className="font-semibold text-neutral-950">BehanceIQ™</span>
        </p>
      </FadeIn>
    </section>
  );
};

export default CampaignResults;
