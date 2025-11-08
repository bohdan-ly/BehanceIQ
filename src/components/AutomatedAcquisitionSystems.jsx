import Container from './Container';
import FadeIn from './FadeIn';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import clsx from 'clsx';

/**
 * AutomatedAcquisitionSystems component
 * Displays information about automated acquisition systems
 * Shows title, description, subtitle, and a list of benefits with checkmarks
 */
const AutomatedAcquisitionSystems = ({ className = '' }) => {
  /**
   * List of benefits/features with checkmarks
   * Each item explains why the automated acquisition system works
   */
  const benefits = [
    'Ви не вигадуєте якусь неперевірену лідген-гіпотезу',
    'Ви використовуєте рекламу, кейси, налаштовані сервіси, і прямий аутріч, який працює десятиліттями для генерації клієнтів',
    'Ми просто робимо 80% роботи за вас в 10х разів швидше, щоб вони кейси працювали навіть коли ви спите (так що вони працюють в бекграунді)',
    'Таким чином ви можете нарешті забути про сезонність, бани та масштабуватися до постійного доходу від $30K-$50K+ місяць без потреби в додатковому наймі, років спроб і помилок, досконалих кейсів, або стати технічним експертом на Behance',
  ];

  return (
    <Container className={clsx('mt-24 sm:mt-32 lg:mt-40', className)}>
      <FadeIn>
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Main title */}
          <h2 className="font-standard font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Впровадження системи надійної генерації лідів
          </h2>

          {/* Description */}
          <p className="font-standard mt-6 text-xl text-neutral-600 leading-relaxed sm:text-2xl">
            Система, де ви використовуєте практичні методи генерації лідів, які агенції роблять
            щодня...
          </p>
          <p className="font-standard mt-4 text-xl text-neutral-600 leading-relaxed sm:text-2xl">
            Речі які <span className="font-semibold text-neutral-950">ЗАВЖДИ працюють</span> для
            отримання клієнтів (і будуть працювати)...
          </p>
          <p className="font-standard mt-4 text-xl text-neutral-600 leading-relaxed sm:text-2xl">
            Просто створи та заповни профілі, щоб вони працювали{' '}
            <span className="font-semibold text-neutral-950">24/7</span> і підсилювали один одного.
          </p>

          {/* Subtitle */}
          <h3 className="font-standard font-display text-3xl font-medium tracking-tight text-neutral-950 mt-12 sm:text-4xl">
            Чому це працює? (навіть якщо починаєте з нуля)
          </h3>

          {/* Benefits list with checkmarks */}
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
        </div>
      </FadeIn>
    </Container>
  );
};

export default AutomatedAcquisitionSystems;
