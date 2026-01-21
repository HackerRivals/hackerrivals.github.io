import { CoffeeCup, Group, Trophy } from 'iconoir-react';

export const venueContent = {
  header: {
    title: 'Venue & Location',
    subtitle: 'Science World - A iconic landmark for innovation and collaboration',
  },
  mainInfo: {
    name: 'Science World',
    address: {
      street: '1455 Quebec St',
      city: 'Vancouver, BC V6A 3Z7',
    },
    event: {
      date: 'Saturday, May 1st, 2026',
      time: '02:00 PM - 07:00 PM',
      afterParty: 'Science World (07:00 PM - 09:00 PM)',
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
          'Science World SkyTrain Station (2 blocks), Expo Line, Millennium Line, Canada Line',
      },
      parking: {
        title: 'Parking',
        description: 'Street parking and nearby parkades available',
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
      description: '$1,000 cash prize plus additional sponsor prizes',
      colors: {
        background: 'bg-accent/20',
        text: 'text-accent',
      },
    },
  ],
};
