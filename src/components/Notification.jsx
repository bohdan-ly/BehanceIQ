'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Default members array - can be overridden via props
 * Each member object contains: name, image, message
 */
const defaultMembers = [
  {
    name: 'Max Yakubovych',
    image: '/avatars/1697718809001.jpeg',
    message: 'Щойнов взяв консультацію',
    cta: 'Забронювати місце',
  },
  {
    name: 'Taras Oliinyk',
    image: '/avatars/1718570589655.jpeg',
    message: 'Придбав кервіництво по Behance',
    cta: 'Отримати доступ',
  },
  {
    name: 'Ivan Anisimov',
    image: '/avatars/276.jpeg',
    message: 'Отримав доступ до BehanceIQ™',
    cta: 'Почати використання',
  },
];

/**
 * Notification component that displays information about a new member purchase
 * Positioned in the top right corner and sticks within its container
 *
 * Visibility behavior:
 * - Appears after a random delay (2–5 seconds)
 * - Stays visible for 2 seconds
 * - Hides and repeats the cycle infinitely
 * - Cycles through members array sequentially
 */
const Notification = ({
  members = defaultMembers,
  ctaText = 'Start with him',
  onClose,
  onCtaClick,
  className,
}) => {
  // Controls whether the notification is currently shown
  const [isVisible, setIsVisible] = useState(false);
  // Tracks the current member index in the array
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  // Refs to manage timers across renders, ensuring proper cleanup
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Get the current member from the array
  const currentMember = defaultMembers[currentMemberIndex] || defaultMembers[0];

  /**
   * Returns a random delay in milliseconds between 2000ms (2s) and 5000ms (5s)
   */
  const getRandomDelay = () => 3500 + Math.floor(Math.random() * 3000);

  /**
   * Moves to the next member in the array, cycling back to the start if at the end
   */
  const moveToNextMember = () => {
    setCurrentMemberIndex(prevIndex => {
      // Cycle to next member, or back to 0 if at the end
      return (prevIndex + 1) % defaultMembers.length;
    });
  };

  /**
   * Schedules the notification to show after a random delay, then auto-hide after 2s.
   * This function re-schedules itself to create an infinite loop.
   * Each cycle shows the next member from the array.
   */
  const scheduleShowCycle = () => {
    // Clear any pending show to avoid overlaps
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      // Move to next member before showing
      moveToNextMember();
      setIsVisible(true);
      // Auto-hide after 2 seconds
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        // Schedule the next show cycle with a new random delay
        scheduleShowCycle();
      }, 3500);
    }, getRandomDelay());
  };

  /**
   * Lifecycle: start the infinite show/hide loop on mount and cleanup timers on unmount
   * Re-initialize if members array changes
   */
  useEffect(() => {
    // Reset to first member if members array changes
    setCurrentMemberIndex(0);
    scheduleShowCycle();
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
    // We intentionally exclude scheduleShowCycle from deps as it is stable in this scope
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [members.length]);

  /**
   * Handles the close button click
   * - Hides the notification immediately
   * - Notifies parent via onClose (if provided)
   * - Reschedules the next show to keep the infinite loop behavior
   */
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
    // Clear the current hide timer if any, then schedule the next show
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    scheduleShowCycle();
  };

  /**
   * Handles the CTA button click
   */
  const handleCtaClick = () => {
    if (onCtaClick) onCtaClick();
  };

  /**
   * Shared motion props to ensure symmetric enter/exit animations
   * Matches appearance with a subtle fade + upward translate + slight scale
   */
  const motionProps = {
    initial: { opacity: 0, y: -8, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98 },
    transition: { duration: 0.25, ease: 'easeOut' },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...motionProps}
          className={clsx(
            'fixed bottom-[15vh] right-4 z-50 w-full max-w-sm sm:right-6 md:right-8',
            className
          )}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-neutral-950/5">
            {/* Notification content */}
            <div className="flex items-start gap-4 p-4 sm:p-5">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <p className="font-standard text-sm font-semibold text-neutral-950">
                  {currentMember.name}
                </p>
                <p className="font-standard mt-1 text-sm text-neutral-600">
                  {currentMember.message}
                </p>

                {/* CTA buttons */}
                <div className="mt-3 flex gap-2">
                  <Button onClick={handleCtaClick} className="h-8 px-3 text-xs flex items-center">
                    {currentMember.cta || ctaText}
                  </Button>
                </div>
              </div>

              {/* Close button */}
              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
                  aria-label="Close notification"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
