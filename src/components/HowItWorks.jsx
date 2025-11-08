'use client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { PiPackage } from 'react-icons/pi';
import { PiFlowArrow } from 'react-icons/pi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';

import Button from './Button';
import Container from './Container';
import FadeIn, { FadeInStagger } from './FadeIn';
import GridPattern from './GridPattern';

/**
 * StepItem component for individual step with mouse-following image
 * Separate component to allow proper hook usage
 */
const StepItem = ({ step, index, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <FadeIn>
      <div
        className="group relative flex gap-8 sm:gap-12"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Step number */}
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
            <span className="font-standard text-xl font-bold sm:text-2xl">{step.icon}</span>
          </div>
        </div>

        {/* Step content */}
        <div className="flex-1 max-w-xl">
          <h3 className="font-standard text-xl font-semibold text-neutral-950 sm:text-2xl">
            Крок {index + 1}: {step.title}
          </h3>
          <p className="font-standard mt-4 text-base text-neutral-600 sm:text-lg">
            {step.description}
          </p>
        </div>

        {/* Floating image that appears near cursor and follows mouse */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute bottom-0 right-0 z-50 hidden w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-neutral-950/10 sm:block lg:w-96"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={`Process visualization for ${step.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 20rem"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-transparent p-4">
                <p className="font-standard text-sm font-medium text-white">
                  Step {index + 1} Process
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

/**
 * HowItWorks component that displays the Portfolio → Pipeline mechanism
 * with animated steps and timeline information
 */
const HowItWorks = ({ className }) => {
  // Track which step is being hovered to show the corresponding image
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: '01',
      title: 'Упакувати свої 10 найкращих кейсів з продаючим результатом (не процес)',
      description:
        'Перетворіть своє портфоліо на актив для генерації лідів, зосередившись на результатах та ефекті для бізнесу, а не на естетиці дизайну',
      image: '/agency.jpg', // Placeholder - replace with actual process images
      icon: <PiPackage />,
    },
    {
      number: '02',
      title:
        'Опублікувати на Behance (налаштувавши 2–3 профілі), з трендовими тегами + публікувати 3×/тиждень',
      description:
        'Стратегічне налаштування профілю з оптимізованими тегами під тендеції та встановлений графік публікації для максимізації видимості + залучення',
      image: '/agency.jpg', // Placeholder - replace with actual process images
      icon: <PiFlowArrow />,
    },
    {
      number: '03',
      title: 'Конвертувати перегляди → кваліфіковані ліди з воронкою через CTA + скриптами відповіді',
      description:
        'Систематичний процес прогріву з використанням верифікованих стратегій CTA та автоматизованими скриптами відповіді для перетворення переглядів у кваліфіковані ліди з воронки',
      image: '/agency.jpg', // Placeholder - replace with actual process images
      icon: <FaMoneyBillTrendUp />,
    },
  ];

  return (
    <div className={clsx('relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32', className)}>
      {/* Background pattern */}
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_right,white_50%,transparent_60%)]"
        yOffset={-256}
      />

      <Container>
        {/* Section header */}
        <FadeIn className="max-w-2xl">
          <h2 className="font-standard font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
            Як це працює — Кейси → Воронка{' '}
            <span className="text-neutral-600">(механізм)</span>
          </h2>
        </FadeIn>

        {/* Steps */}
        <FadeInStagger className="mt-16 sm:mt-20">
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                isHovered={hoveredStep === index}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              />
            ))}
          </div>
        </FadeInStagger>

        {/* Timeline section */}
        <FadeIn className="mt-16 sm:mt-20">
          <div className="rounded-2xl bg-neutral-950 px-6 py-8 sm:px-8 sm:py-10">
            <h3 className="font-standard font-display text-2xl font-semibold text-white sm:text-3xl">
              45–60 денний план
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="font-standard text-base text-neutral-300 sm:text-lg">
                  <strong className="text-white">Тиждень 1:</strong> Швидкі результати
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="font-standard text-base text-neutral-300 sm:text-lg">
                  <strong className="text-white">Тиждень 2–3:</strong> Перші запити
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="font-standard text-base text-neutral-300 sm:text-lg">
                  <strong className="text-white">День 45–60:</strong> 20+/міс. (за умови дотримання SOP)
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA section */}
        <FadeIn className="mt-12 text-center sm:mt-16">
          <div className="mx-auto max-w-2xl">
            <p className="font-standard text-lg text-neutral-600 sm:text-xl">
              Даємо реальну користь спочатку, потім пропонуємо.
            </p>
            <div className="mt-6">
              <Button className="py-4 px-8 text-lg sm:text-xl">
                Дізнатися про 3 найбільших можливості
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default HowItWorks;
