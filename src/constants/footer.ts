import { getCurrentEventContent } from './eventConfig';

const getEventInfoItems = () => {
  const eventContent = getCurrentEventContent();
  return [
    eventContent.event.date,
    'In-Person Event',
    eventContent.event.prize,
    '1-5 Team Members',
    'All Skill Levels',
  ];
};

export const footerContent = {
  brand: {
    name: 'HACKERRIVALS',
    description:
      'The ultimate eSports hackathon experience, designed for spectators and built for innovation.',
  },
  quickLinks: {
    title: 'Quick Links',
  },
  eventInfo: {
    title: 'Event Details',
    get items() {
      return getEventInfoItems();
    },
  },
  contact: {
    title: 'Contact',
    items: {
      email: 'info@hackerrivals.com',
      discord: 'https://discord.gg/wg372JtEK8',
      github: 'https://github.com/HackerRivals',
    },
  },
  bottom: {
    copyright: 'HackerRivals. All rights reserved.',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Competition Rules', href: '#rules', isModal: true, modalType: 'rules' },
      { name: 'Code of Conduct', href: '#conduct', isModal: true, modalType: 'conduct' },
    ],
  },
  creator: {
    website: {
      text: 'Website created by',
      name: 'Jaskaran Singh',
      url: 'https://thecodersingh.com/',
    },
    design: {
      text: 'UI/UX Design by',
      name: 'Neharika Sidda',
      url: 'https://neharikasidda.com/',
    },
  },
  social: {
    links: {
      discord: 'https://discord.gg/wg372JtEK8',
      github: 'https://github.com/HackerRivals',
      email: 'mailto:info@hackerrivals.com',
    },
  },
};
