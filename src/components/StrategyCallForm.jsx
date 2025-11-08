'use client';

import { useState } from 'react';
import Button from './Button';

/**
 * StrategyCallForm component
 * Displays a button on the left and email input on the right
 * Submits email to spreadsheet and shows success message
 */
const StrategyCallForm = () => {
  // State for email input value
  const [email, setEmail] = useState('');
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for success message display
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Handle form submission
   * Sends email to API endpoint which saves to spreadsheet
   * Shows success message after successful submission
   *
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email to API endpoint
      const response = await fetch('/api/submit-strategy-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        // Reset email field
        setEmail('');
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        // Handle error
        const errorData = await response.json();
        alert(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If success message is shown, display it
  if (showSuccess) {
    return (
      <div className="mt-16 flex items-center justify-center">
        <p className="font-standard text-lg font-medium text-green-600">
          Thanks you, we will contact to you in shortly
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Submit button on the left */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="py-4 px-6 !text-xl flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'FREE-КОНСУЛЬТАЦІЯ'}
      </Button>

      {/* Email input field on the right */}
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={isSubmitting}
          className="font-standard w-full rounded-full border border-neutral-300 bg-transparent px-6 py-4 text-base text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 disabled:opacity-50 disabled:cursor-not-allowed"
          autoComplete="email"
        />
      </div>
    </form>
  );
};

export default StrategyCallForm;

