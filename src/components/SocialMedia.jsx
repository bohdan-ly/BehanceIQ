import clsx from 'clsx';
import Link from 'next/link';
import { BsBehance, BsInstagram, BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs';

export const SocialMediaProfiles = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@dizarm.creative',
    icon: BsYoutube,
  },
  { title: 'Instagram', href: 'https://www.instagram.com/ceo_uxui/', icon: BsInstagram },
  {
    title: 'Telegram',
    href: 'https://t.me/business_moom',
    icon: BsTelegram,
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/anitasuska',
    icon: BsLinkedin,
  },
  {
    title: 'Behance',
    href: 'https://www.behance.net/dizarm',
    icon: BsBehance,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx('flex gap-x-10', invert ? 'text-white' : 'text-neutral-950', className)}
    >
      {SocialMediaProfiles.map(item => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700'
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
