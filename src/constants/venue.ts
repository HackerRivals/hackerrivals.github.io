import { CoffeeCup, Group, Trophy } from 'iconoir-react';

export const venueContent = {
  header: {
    title: 'Venue & Location',
    subtitle: 'Northeastern University, Toronto Campus',
  },
  mainInfo: {
    name: 'Northeastern University',
    address: {
      street: '375 Queen St W',
      city: 'Toronto, ON M5V 2A5, Canada',
    },
    event: {
      date: 'Saturday, Aug 29th, 2026',
      time: '12:00 PM - 06:00 PM',
      afterParty: 'Secret Location (06:30 PM - 09:00 PM)',
    },
    labels: {
      date: 'Date:',
      time: 'Time:',
      afterParty: 'VIP After Party:',
    },
    transportation: {
      title: 'Getting There',
      transit: {
        title: 'Public Transit',
        description:
          'TTC access at Queen Street West and University Avenue. Close to Osgoode Station',
      },
      parking: {
        title: 'Parking',
        description: 'Street parking and nearby paid parkades available',
      },
      accessibility: {
        title: 'Accessibility',
        description: 'Fully accessible facility with elevators and ramps',
      },
    },
  },
  levels: {
    presentationStage: {
      title: 'Presentation Stage',
      features: ['Seated Audience Area', 'Large Screen Displays'],
    },
    mainStage: {
      title: 'Main Stage',
      features: [
        'Main Stage with Professional AV',
        'Seated Audience Area',
        'Large Screen Displays',
      ],
    },
    hackerHub: {
      title: 'Hacker Hub',
      features: ['Hackathon Workspace', 'Workshop Rooms', 'Breakout Spaces'],
    },
  },
  amenities: [
    {
      icon: CoffeeCup,
      title: 'Food & Beverages',
      description: 'Complimentary meals, snacks, and beverages throughout the event',
      colors: {
        background: 'bg-secondary/20',
        text: 'text-secondary',
      },
    },
    {
      icon: Group,
      title: 'Networking Opportunities',
      description: 'Connect with industry professionals, sponsors, and fellow participants',
      colors: {
        background: 'bg-primary/20',
        text: 'text-primary',
      },
    },
    {
      icon: Trophy,
      title: 'Prize Competition',
      description: '$500 cash prize plus additional sponsor prizes',
      colors: {
        background: 'bg-accent/20',
        text: 'text-accent',
      },
    },
  ],
};
