export interface TeamLeaderboardRecord {
  id: string;
  teamName: string;
  members: string[];
  tournamentsPlayed: number;
  matchesWon: number;
  winRate: number;
  totalPoints: number;
}

export const LEADERBOARD_DATA: TeamLeaderboardRecord[] = [
  {
    id: '8',
    teamName: 'Neon Knights',
    members: ['Dave', 'Eve'],
    tournamentsPlayed: 2,
    matchesWon: 1,
    winRate: 50.0,
    totalPoints: 100,
  },
  {
    id: '3',
    teamName: 'Syntax Errors',
    members: ['Frank', 'Grace', 'Heidi'],
    tournamentsPlayed: 5,
    matchesWon: 3,
    winRate: 60.0,
    totalPoints: 250,
  },
  {
    id: '1',
    teamName: 'The Glitches',
    members: ['Peggy', 'Sybil', 'Trent'],
    tournamentsPlayed: 12,
    matchesWon: 10,
    winRate: 83.3,
    totalPoints: 1000,
  },
  {
    id: '6',
    teamName: 'Null Pointers',
    members: ['Ivan', 'Judy'],
    tournamentsPlayed: 3,
    matchesWon: 1,
    winRate: 33.3,
    totalPoints: 100,
  },
  {
    id: '4',
    teamName: 'Byte Me',
    members: ['Mallory', 'Oscar'],
    tournamentsPlayed: 8,
    matchesWon: 5,
    winRate: 62.5,
    totalPoints: 500,
  },
  {
    id: '2',
    teamName: 'Cyber Punks',
    members: ['Alice', 'Bob', 'Charlie'],
    tournamentsPlayed: 10,
    matchesWon: 7,
    winRate: 70.0,
    totalPoints: 750,
  },
  {
    id: '5',
    teamName: 'Loop Hole',
    members: ['Victor', 'Walter'],
    tournamentsPlayed: 9,
    matchesWon: 5,
    winRate: 55.5,
    totalPoints: 500,
  },
  {
    id: '7',
    teamName: 'Ctrl Alt Defeat',
    members: ['Xeno', 'Yara', 'Zane'],
    tournamentsPlayed: 6,
    matchesWon: 2,
    winRate: 33.3,
    totalPoints: 250,
  },
];
