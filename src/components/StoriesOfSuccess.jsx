'use client';

import { useState } from 'react';
import Container from './Container';
import FadeIn, { FadeInStagger } from './FadeIn';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * StoriesOfSuccess component
 * Displays messenger screenshots and client video testimonials
 * Features creative animations to engage users and build trust
 */
const StoriesOfSuccess = ({ className = '' }) => {
  // State for active video
  const [activeVideo, setActiveVideo] = useState(null);

  /**
   * Sample messenger screenshots data
   * In production, replace with actual client screenshots
   */
  const messengerScreenshots = [
    {
      id: 1,
      name: 'Андрій К.',
      company: 'Digital Agency',
      message: 'Дякую за результат! Вже отримали перших 5 лідів за тиждень 🚀',
      avatar: '/avatars/default-avatar.png',
      timestamp: '2 дні тому',
    },
    {
      id: 2,
      name: 'Марія П.',
      company: 'B2B Services',
      message: 'Нарешті знайшли стабільний канал для лідів. Behance працює краще за рекламу!',
      avatar: '/avatars/default-avatar.png',
      timestamp: '5 днів тому',
    },
    {
      id: 3,
      name: 'Олексій В.',
      company: 'Creative Studio',
      message: 'За місяць отримали 12 заявок з Behance. Це наш найкращий канал зараз 👍',
      avatar: '/avatars/default-avatar.png',
      timestamp: '1 тиждень тому',
    },
    {
      id: 4,
      name: 'Тетяна С.',
      company: 'Marketing Agency',
      message: 'Профіль на Behance приносить більше якісних лідів ніж LinkedIn. Неймовірно!',
      avatar: '/avatars/default-avatar.png',
      timestamp: '3 дні тому',
    },
  ];

  /**
   * Sample video testimonials data
   * In production, replace with actual video URLs
   */
  const videoTestimonials = [
    {
      id: 1,
      thumbnail: '/testimonials/video-1-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/example1',
      clientName: 'Peiko Agency',
      duration: '2:15',
    },
    {
      id: 2,
      thumbnail: '/testimonials/video-2-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/example2',
      clientName: 'Digital Studio',
      duration: '1:45',
    },
    {
      id: 3,
      thumbnail: '/testimonials/video-3-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/example3',
      clientName: 'Creative Lab',
      duration: '3:20',
    },
  ];

  /**
   * Animation variants for messenger cards
   * Creates a staggered, floating effect
   */
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  /**
   * Animation variants for video cards
   * Creates a zoom and fade effect
   */
  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`relative mt-24 sm:mt-32 lg:mt-40 ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Section title */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-standard font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Останні історії успіху
            </h2>
            <p className="font-standard mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Реальні результати наших клієнтів і BehanceIQ™ змінює бізнес
            </p>
          </div>
        </FadeIn>

        {/* Messenger screenshots grid */}
        <FadeInStagger faster>
          <div className="mb-20">
            <h3 className="font-standard font-display text-2xl font-medium tracking-tight text-neutral-950 mb-8 text-center sm:text-3xl">
              Відгуки клієнтів
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {messengerScreenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative"
                >
                  {/* Messenger-style card */}
                  <div className="bg-white rounded-2xl border-2 border-neutral-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Messenger header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {screenshot.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-standard font-semibold text-neutral-950">
                          {screenshot.name}
                        </h4>
                        <p className="font-standard text-sm text-neutral-500">
                          {screenshot.company} • {screenshot.timestamp}
                        </p>
                      </div>
                    </div>

                    {/* Message bubble */}
                    <div className="bg-green-50 rounded-2xl rounded-tl-none p-4 border border-green-100">
                      <p className="font-standard text-neutral-950 leading-relaxed">
                        {screenshot.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInStagger>

        {/* <FadeInStagger>
        <div>
          <h3 className="font-standard font-display text-2xl font-medium tracking-tight text-neutral-950 mb-8 text-center sm:text-3xl">
            Відео-відгуки
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                custom={index}
                variants={videoVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: '-50px' }}
                className="relative group cursor-pointer"
                onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
              >
                
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 border-2 border-neutral-200 shadow-lg">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                        <svg
                          className="w-10 h-10 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="font-standard font-semibold">{video.clientName}</p>
                    </div>
                  </div>

                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <svg
                        className="w-8 h-8 ml-1 text-neutral-950"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {video.duration}
                  </div>
                </div>

                
                {activeVideo === video.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo(null);
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      
                      <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <p className="text-center">
                          Video player would be embedded here
                          <br />
                          <span className="text-sm text-neutral-400">
                            {video.videoUrl}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInStagger> */}
      </Container>
    </div>
  );
};

export default StoriesOfSuccess;
