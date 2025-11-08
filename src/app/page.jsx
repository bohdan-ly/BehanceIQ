import Clients from '@/components/Clients';
import CampaignResults from '@/components/CampaignResults';
import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import Countdown from '@/components/Countdown';
import FadeIn from '@/components/FadeIn';
import HowItWorks from '@/components/HowItWorks';
import ServiceSection from '@/components/ServiceSection';
import PreBuiltSystems from '@/components/PreBuiltSystems';
import StoriesOfSuccess from '@/components/StoriesOfSuccess';
import StrategyCallForm from '@/components/StrategyCallForm';
import Testimonials from '@/components/Testimonials';
import AutomatedAcquisitionSystems from '@/components/AutomatedAcquisitionSystems';
import WhyListenToMe from '@/components/WhyListenToMe';
import logoPeiko from '../../public/companies/peikodark.png';

export default function Home() {
  return (
    <>
      <Container className="relative mt-24 sm:mt-32">
        {/* Notification - positioned in top right corner of hero section */}
        <FadeIn className="max-w-3xl">
          {/* Availability badge */}
          <div className="mb-6 flex items-center gap-3">
            {/* Availability circle indicator */}
            <div className="relative flex h-3 w-3 items-center justify-center">
              {/* Outer pulsing circle */}
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></span>
              {/* Inner solid circle */}
              <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            {/* Badge text */}
            <span className="font-standard text-sm font-medium uppercase tracking-wide text-neutral-700">
              ДЛЯ B2B АГЕНЦІЙ З РЕВЕНЮ &gt;$30K/МІС.
            </span>
          </div>

          <h1 className="font-standard font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Наша система яка приносить нам{' '}
            <span className="text-[#8f00ff]">+20 лідів/місяць з чеком від $7k</span>
          </h1>
          <p className="font-standard mt-6 text-xl text-neutral-600">
            і як ми можемо впровадити такий самий BehanceIQ™ фреймворк для вас.
          </p>

          {/* Strategy call form with button and email field */}
          <StrategyCallForm />

          {/* Countdown timer for next price raise */}
          <div className="mt-8 flex">
            <Countdown
              targetDate={new Date(Date.now() + 7 * 24 * 53 * 60 * 1000)}
              className="pl-2.5"
            />
          </div>
        </FadeIn>
      </Container>

      <Clients />
      <Testimonials className="mt-24 sm:mt-32 lg:mt-40" client={{ name: 'Peiko', logo: logoPeiko }}>
        Біханс керівницвто - це бомба! Ми досі цим користуємося майже на 100% і це нам принесло і
        приносить лідів та не один продаж, ддалі розвиваємо це, експериментуємо, але чітко йдемо за
        основами цього гайду. Ти зробила супер роботу і це дійсно дало результат, не просто якась
        вода) МОЛОДЕЦЫ 5 з 5! якщо не 10 балів)
      </Testimonials>

      {/* Service section with rounded dark border */}
      <ServiceSection />

      {/* Stories of Success section */}
      <StoriesOfSuccess />

      <HowItWorks className="mt-24 sm:mt-32 lg:mt-40" />

      {/* Campaign Results section with horizontal scroll animation */}
      <CampaignResults />

      {/* Pre-Built Systems section */}
      <PreBuiltSystems />

      {/* Automated Acquisition Systems section */}
      <AutomatedAcquisitionSystems />

      {/* Why Listen to Me section */}
      <WhyListenToMe />

      <ContactSection />
    </>
  );
}
