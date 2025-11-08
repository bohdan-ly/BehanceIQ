import Image from 'next/image';

import logoBM from '../../public/companies/bm.png';
import logoLnoks from '../../public/companies/Lnoks.png';
import logoRise from '../../public/companies/rise.png';
import logoTired from '../../public/companies/tired.png';
import logoTRC from '../../public/companies/trc.png';
import logoU1Core from '../../public/companies/u1core.png';
import logoBalance from '../../public/companies/balance.png';
import logoPeiko from '../../public/companies/peiko.png';

import Container from './Container';
import FadeIn, { FadeInStagger } from './FadeIn';

const clients = [
  ['Peiko', logoPeiko],
  ['Lnoks', logoLnoks],
  ['U1Core', logoU1Core],
  ['See the balance', logoBalance],
  ['Rise', logoRise],
  ['Tired', logoTired],
  ['TRC', logoTRC],
  ['BusinessMatch', logoBM],
];

const Clients = () => {
  return (
    <div className="mt-24 relative rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Ми працювали з сотнями дивовижних людей
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 align-baseline"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
