import Container from './Container';
import FadeIn, { FadeInStagger } from './FadeIn';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import clsx from 'clsx';

/**
 * PreBuiltSystems component
 * Displays information about copy-paste pre-built systems that generate leads
 * Shows title, description, benefits with checkmarks, and client feedback screenshots
 */
const PreBuiltSystems = ({ className = '' }) => {
  /**
   * List of benefits/features with checkmarks
   * Each item explains what's included in the pre-built system
   */
  const benefits = [
    'Правильну упаковку кейсів під ICP (Для кого, які теги, і як їх тестувати)',
    'Правильні повідомлення для лідів (Перевірені шаблони повідомлень, які згенерували сотні тисяч доларів)',
    'Правильну воронку для лідів (Шаблони повідомлення через email і LinkedIn—вже налаштовано для вас)',
    'Правильні скрипти для продажів (Структури скриптів, питання для продажу, відповіді на заперечення, і презентації, які ми використовуємо для продажів на $3K-$9K)',
    'Всі шаблони вже створені (Все від кейсів для продажів до КП для клієнтів—готові для використання)',
  ];

  /**
   * Client feedback screenshots
   * Placeholder paths - replace with actual screenshot images
   * These should be placed in the public folder
   */
  const clientFeedbackScreenshots = [
    {
      id: 1,
      src: '/results/4.png', // Placeholder - replace with actual image
      alt: 'Client feedback 1',
    },
    {
      id: 2,
      src: '/results/1.png', // Placeholder - replace with actual image
      alt: 'Client feedback 2',
    },
    {
      id: 3,
      src: '/results/3.png', // Placeholder - replace with actual image
      alt: 'Client feedback 3',
    },
    {
      id: 4,
      src: '/results/2.png', // Placeholder - replace with actual image
      alt: 'Client feedback 4',
    },
  ];

  return (
    <Container className={clsx('mt-24 sm:mt-32 lg:mt-40', className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">
        {/* Main title - uppercase, large */}
        <FadeIn>
          <h2 className="font-standard font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl uppercase">
            <span className="text-[#8f00ff]">COPY-PASTE ЗБУДОВАНОЇ СИСТЕМИ</span>, ЯКА ГЕНЕРУЄ ЛІДІВ
            НА АВТОПІЛОТІ,{' '}
            <span className="text-[#8f00ff]">
              БЕЗ НЕОБХІДНОСТІ ВИТРАЧАТИ МІСЯЦІ НА ВИВЧЕННЯ НОВИХ ІНСТРУМЕНТІВ
            </span>
          </h2>
        </FadeIn>

        {/* Description paragraphs */}
        <FadeIn className="mt-8">
          <p className="font-standard text-lg text-neutral-600 leading-relaxed sm:text-xl">
            Ви можете подумати: &quot;Ок, це вже звучить складно… Чи я зможу це зробити? Чи буде це
            працювати для мене?&quot;
          </p>
        </FadeIn>
        <FadeIn className="mt-4">
          <p className="font-standard text-lg text-neutral-600 leading-relaxed sm:text-xl">
            Ми вже зробили всю важку роботу. Ви отримуєте нашу систему розкладену на прості, plug&play частини.
          </p>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn className="mt-12">
          <h3 className="font-standard font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
            Ось що це означає…
          </h3>
        </FadeIn>

        {/* Benefits list with checkmarks */}
        <FadeInStagger>
          <ul className="font-standard mt-8 space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Checkmark icon */}
                <IoMdCheckmarkCircleOutline
                  className="mt-1 h-6 w-6 flex-shrink-0 text-green-600"
                  aria-hidden="true"
                />
                {/* Benefit text */}
                <span className="text-lg text-neutral-950 leading-relaxed sm:text-xl">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </FadeInStagger>

        {/* Client feedback screenshots section */}
        <FadeInStagger className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {clientFeedbackScreenshots.map(screenshot => (
              <FadeIn key={screenshot.id}>
                <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
                  {/* Screenshot image container */}
                  {/* Place images in /public folder as: client-feedback-1.png, client-feedback-2.png, client-feedback-3.png, client-feedback-4.png */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-contain p-4"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </Container>
  );
};

export default PreBuiltSystems;
