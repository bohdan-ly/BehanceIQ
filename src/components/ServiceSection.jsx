import Button from './Button';
import Container from './Container';
import FadeIn from './FadeIn';
import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

/**
 * ServiceSection component
 * Displays service information with title, process image, and two-column layout
 * Left column shows included services with checkmarks
 * Right column shows opportunity generation message with call-to-action button
 */
const ServiceSection = ({ className = '' }) => {
  return (
    <Container className={`mt-24 sm:mt-32 lg:mt-40 ${className}`}>
      <FadeIn>
        {/* Main container with rounded dark border */}
        <div className="rounded-2xl border-2 border-neutral-950 p-8 sm:p-12">
          {/* Section title */}
          <h2 className="font-standard font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Послуга з пошуку клієнтів
          </h2>

          {/* Process image */}
          <div className="mt-8">
            <Image
              src="/process.png"
              alt="Послуга з пошуку клієнтів"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          {/* Two-column content block */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left column: What is included */}
            <div>
              <h3 className="font-standard font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
                Що входить в процес
              </h3>
              <p className="font-standard mt-3 text-base text-neutral-600">
                End-to-end налаштування та управління профілем на Behance
              </p>

              {/* Included items list */}
              <ul className="font-standard mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Упаковка та прогрів 3х профілів
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Дослідження аудиторії та ключових слів
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">Упаковка 10 кейсів статичних</span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Анімація 4х кейсів з адаптацією
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Оптимізація кейсів та профілів
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Перевірка метрик, побудова гіпотез на тест
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-base text-neutral-950">
                    Копірайт та просування кейсів
                  </span>
                </li>
              </ul>
            </div>

            {/* Right column: We generate opportunities */}
            <div className="flex flex-col">
              <h3 className="font-standard font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
                Ми створюємо можливості - Ви закриваєте клієнтів
              </h3>

              {/* Book a call button */}
              <div className="mt-8 w-full">
                <Button className="py-4 px-8 w-full !text-lg justify-center">Book a call</Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ServiceSection;

