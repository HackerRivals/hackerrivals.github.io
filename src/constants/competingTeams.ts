export interface CompetingTeam {
  id: number;
  name: string;
  members: string[];
}

export const competingTeams: CompetingTeam[] = [
  {
    id: 1,
    name: 'Old Fellows',
    members: ['Petrus'],
  },
  {
    id: 2,
    name: 'DropDB',
    members: ['Dino', 'Jocelyn', 'Michael', 'Andrew'],
  },
  {
    id: 3,
    name: 'Direction',
    members: ['Elnaz', 'Alireza'],
  },
  {
    id: 4,
    name: 'Merge_Conflicts',
    members: ['Kush', 'Sayuj'],
  },
  {
    id: 5,
    name: 'The Rizzlers',
    members: ['Greg', 'Wiliam'],
  },
];
