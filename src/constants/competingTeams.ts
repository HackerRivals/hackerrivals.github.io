export interface CompetingTeam {
  id: number;
  name: string;
  members: string[];
}

export const competingTeams: CompetingTeam[] = [
  {
    id: 1,
    name: 'Semiahmoo Secondary Team',
    members: ['Kairui', 'Bernie', 'Dreyson'],
  },
  {
    id: 2,
    name: 'DropDB',
    members: ['Dino', 'Jocelyn', 'Michael', 'Andrew'],
  },
  {
    id: 3,
    name: 'Merge_Conflicts',
    members: ['Kush', 'Sayuj', 'Sarim'],
  },
  {
    id: 4,
    name: 'The Rizzlers',
    members: ['Greg', 'Wiliam'],
  },
];
