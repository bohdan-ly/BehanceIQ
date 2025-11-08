'use client';

import { useState, useEffect } from 'react';

/**
 * Countdown component that displays time remaining until next price raise
 * Shows Days : Hours : Minutes : Seconds in a minimalistic format
 *
 * @param {string} targetDate - ISO string or Date object for the target date
 * @param {string} className - Additional CSS classes
 */
const Countdown = ({ targetDate, className = '' }) => {
  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /**
   * Calculate the time difference between now and target date
   * Updates the countdown state with remaining days, hours, minutes, and seconds
   */
  useEffect(() => {
    // Parse the target date
    const target = new Date(targetDate).getTime();

    /**
     * Update countdown timer
     * Calculates time difference and breaks it down into time units
     */
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      // If target date has passed, set all values to 0
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Initial calculation
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  /**
   * Format number with leading zero if less than 10
   * Ensures consistent two-digit display for time units
   *
   * @param {number} num - Number to format
   * @returns {string} - Formatted string with leading zero if needed
   */
  const formatTime = num => {
    return num.toString().padStart(2, '0');
  };

  const TimeUnit = ({ value, label }) => {
    return (
      <div className="flex flex-col items-center">
        <span>{formatTime(value)}</span>
        <span className="font-standard text-xs text-neutral-500 text-center">{label}</span>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label text */}
      <p className="font-standard text-sm text-neutral-600">До підняття ціни:</p>

      {/* Countdown display */}
      <div className="font-standard flex gap-2 text-2xl font-medium tracking-tight text-neutral-950">
        <TimeUnit value={timeLeft.days} label="Днів" />
        <span className="text-neutral-400">:</span>
        <TimeUnit value={timeLeft.hours} label="Годин" />
        <span className="text-neutral-400">:</span>
        <TimeUnit value={timeLeft.minutes} label="Хвилин" />
        <span className="text-neutral-400">:</span>
        <TimeUnit value={timeLeft.seconds} label="Секунд" />
      </div>
    </div>
  );
};

export default Countdown;
