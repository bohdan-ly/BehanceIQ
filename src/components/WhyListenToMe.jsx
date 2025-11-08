import Container from './Container';
import FadeIn from './FadeIn';
import Image from 'next/image';
import clsx from 'clsx';

/**
 * WhyListenToMe component
 * Displays credentials and achievements of Alex Vacca
 * Shows why readers should listen to the author's advice
 */
const WhyListenToMe = ({ className = '' }) => {
  /**
   * List of achievements and credentials
   */
  const achievements = [
    'Я зробили DizArm з $0 до $1M за 2 роки.',
    'Ми #1 партнер для найбільших брендів України з мільярдами доларів в креативному сегменті',
    'Ми допомогли більше 75+ агенцій побудувати свій лідген на Behance використовуючи нашу систему',
    'Наші клієнти заробили більше $10M в доході',
    'Ми створили один з найсильніших брендів агенції в Україні (про нас говорять лідери зі списку Forbes 30 Under 30).',
  ];

  return (
    <Container className={clsx('mt-24 sm:mt-32 lg:mt-40', className)}>
      <div className="lg:flex lg:items-start lg:gap-x-12 xl:gap-x-16">
        {/* Image on the left */}
        <div className="flex justify-center lg:w-1/3 lg:flex-shrink-0 lg:justify-start">
          <FadeIn className="w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:rounded-3xl">
              {/* Image - place in /public folder as alex-vacca.jpg */}
              {/* Replace /alex-vacca.jpg with your actual image path */}
              <Image
                src="/anita.jpg"
                alt="Anita Suska, CEO of DizArm and COO of ClipSwift"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                unoptimized
              />
            </div>
          </FadeIn>
        </div>

        {/* Content on the right */}
        <div className="mt-10 lg:mt-0 lg:w-2/3 lg:flex-1">
          <FadeIn>
            {/* Main title - uppercase */}
            <h2 className="font-standard font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl uppercase">
              ЧОМУ САМЕ Я?
            </h2>

            {/* Author information */}
            <div className="mt-8 space-y-1">
              <p className="font-standard text-xl font-semibold text-neutral-950 sm:text-2xl">
                Аніта Суська
              </p>

              <p className="font-standard text-lg text-neutral-600 sm:text-xl">
                CEO DizArm & COO ClipSwift
              </p>
            </div>

            {/* Achievements list */}
            <ul className="font-standard mt-10 space-y-5">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Bullet point */}
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#8f00ff]"></span>
                  {/* Achievement text */}
                  <span className="text-lg text-neutral-950 leading-relaxed sm:text-xl">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>

            {/* Closing statement */}
          </FadeIn>
        </div>
      </div>
      <p className="font-standard mt-10 text-lg text-neutral-600 leading-relaxed sm:text-xl">
        Я кажу вам про це, бо бачу, як сотні агенцій застрягли на позначці від 10 до 30 тисяч доларів
        на місяць, щомісяця обираючи між пошуком клієнтів та власним сервісом.
      </p>
    </Container>
  );
};

export default WhyListenToMe;
