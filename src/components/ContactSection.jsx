'use client';

import React, { useState } from 'react';
import Container from './Container';
import FadeIn from './FadeIn';
import Button from './Button';
import Image from 'next/image';

const ContactSection = () => {
  // State for email input value
  const [email, setEmail] = useState('');
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for success message display
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Handle form submission
   * Sends email to newsletter subscription endpoint
   * Shows success message after successful submission
   *
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async e => {
    e.preventDefault();

    // Validate email format
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email to API endpoint (update endpoint as needed)
      const response = await fetch('/api/subscribe-newsletter', {
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

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Content and form on the left */}
            <div className="lg:w-1/2 lg:flex-shrink-0">
              <p className="font-standard text-base font-medium text-white/80 uppercase tracking-wide">
                ПРИЄДНУЙТЕСЬ ДО 2000+ ПІДПИСНИКІВ
              </p>

              <h2 className="font-display text-xl font-medium text-white [text-wrap:balance] mt-4 sm:text-2xl uppercase">
                ОТРИМУЙТЕ ІНСАЙТИ ПРО ПРОДАЖІ ТА ПРОСУВАННЯ ВІД ПРАКТИЧНИХ КЕЙСІВ ТА БЕЗКОШТОВНИХ
                МАТЕРІАЛІВ
              </h2>

              <p className="font-standard text-lg text-white/90 mt-6 leading-relaxed sm:text-xl">
                Як вітальний подарунок, ви отримаєте повну лекцію, де я детально прозповідаю
                &quot;Behance без прикрас: як отримувати ліди системно та генерувати +20 зустрічей
                на місяць використовуючи найновіші інструменти платформи&quot;
              </p>

              {/* Email form */}
              <div className="mt-8">
                {showSuccess ? (
                  <div className="flex items-center justify-start p-4">
                    <p className="font-standard text-lg font-medium text-green-400">
                      Дякую! Перевірте свою електронну пошту, щоб отримати вітальний подарунок.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {/* Email input field */}
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        disabled={isSubmitting}
                        className="font-standard w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base text-white ring-4 ring-transparent transition placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        autoComplete="email"
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      invert
                      disabled={isSubmitting}
                      className="py-4 px-8 !text-lg flex items-center justify-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Відправка...' : 'Отримати безкоштовний подарунок'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Gift image on the right */}
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex-1 flex justify-center lg:justify-end">
              <FadeIn className="w-full max-w-md lg:max-w-lg">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-800 sm:rounded-3xl">
                  {/* Gift image - place in /public folder as welcome-gift.jpg or similar */}
                  <Image
                    src="/gift.png"
                    alt="Welcome gift - Free guide on Behance leadgen"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    unoptimized
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
