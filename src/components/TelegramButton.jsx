'use client';

import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';

/**
 * TelegramButton component
 * Fixed button in bottom right corner for contacting via Telegram
 * Fully rounded (circular) button with Telegram icon
 */
const TelegramButton = ({
  telegramUrl = 'https://t.me/clip_swift?text=%D0%A6%D1%96%D0%BA%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20BehanceIQ%E2%84%A2%2C%20%D1%80%D0%BE%D0%B7%D0%BA%D0%B0%D0%B6%D1%96%D1%82%D1%8C%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%96%D1%88%D0%B5',
}) => {
  return (
    <Link
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us via Telegram"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg transition-all hover:bg-[#0077b5] hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#0088cc]/50 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <FaTelegramPlane className="h-6 w-6 sm:h-7 sm:w-7" />
    </Link>
  );
};

export default TelegramButton;
