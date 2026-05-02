export interface TeamLeaderboardRecord {
  id: string;
  teamName: string;
  members: string[];
  tournamentsPlayed: number;
  tournamentsWon: number;
  round3Appearances: number;
  winRate: number;
  totalPoints: number;
}

const POINTS_SYSTEM = {
  TOURNAMENT_PLAYED: 100,
  TOURNAMENT_WIN: 300,
  ROUND_3_APPEARANCE: 100,
};

type RawTeamData = Omit<TeamLeaderboardRecord, 'winRate' | 'totalPoints'>;

const rawData: RawTeamData[] = [
  {
    id: '1',
    teamName: 'JugHeads',
    members: ['Mehrdad', 'Monzer', 'Sotheng', 'Nichanun'],
    tournamentsPlayed: 1,
    tournamentsWon: 1,
    round3Appearances: 1,
  },
  {
    id: '2',
    teamName: 'Merge_Conflicts',
    members: ['Kushagra', 'Sayuj', 'Sarim'],
    tournamentsPlayed: 2,
    tournamentsWon: 1,
    round3Appearances: 2,
  },
  {
    id: '3',
    teamName: 'Team Cypress',
    members: ['Kansuke', 'Tomohiro', 'Wataru', 'Keita', 'Nagomi'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 0,
  },
  {
    id: '4',
    teamName: 'Pacific',
    members: ['Richard', 'Tomoya', 'Luis', 'Takanobu'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 0,
  },
  {
    id: '5',
    teamName: 'CST',
    members: ['Noufil', 'Towa', 'Aryan'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 0,
  },
  {
    id: '6',
    teamName: 'Semiahmoo Secondary Team',
    members: ['Kairui', 'Bernie', 'Dreyson'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 1,
  },
  {
    id: '7',
    teamName: 'DropDB',
    members: ['Dino', 'Jocelyn', 'Michael', 'Andrew'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 0,
  },
  {
    id: '8',
    teamName: 'The Rizzlers',
    members: ['Greg', 'Wiliam'],
    tournamentsPlayed: 1,
    tournamentsWon: 0,
    round3Appearances: 0,
  },
];

export const LEADERBOARD_DATA: TeamLeaderboardRecord[] = rawData.map((team) => {
  const totalPoints =
    team.tournamentsPlayed * POINTS_SYSTEM.TOURNAMENT_PLAYED +
    team.tournamentsWon * POINTS_SYSTEM.TOURNAMENT_WIN +
    team.round3Appearances * POINTS_SYSTEM.ROUND_3_APPEARANCE;

  const winRate =
    team.tournamentsPlayed > 0
      ? Number(((team.tournamentsWon / team.tournamentsPlayed) * 100).toFixed(1))
      : 0.0;

  return {
    ...team,
    totalPoints,
    winRate,
  };
});
