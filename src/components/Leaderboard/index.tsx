import React, { useMemo } from 'react';
import { Trophy, Medal } from 'iconoir-react';
import { LEADERBOARD_DATA } from '../../constants/leaderboardData';

const Leaderboard: React.FC = () => {
  // Memoized sorting function
  const sortedLeaderboard = useMemo(() => {
    return [...LEADERBOARD_DATA].sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) {
        return b.totalPoints - a.totalPoints;
      }
      return a.teamName.localeCompare(b.teamName);
    });
  }, []);

  const getRankBadge = (index: number) => {
    switch (index) {
      case 0:
        return 'border-yellow-400 bg-gradient-to-r from-yellow-400/20 to-transparent shadow-[0_0_20px_rgba(250,204,21,0.5)]'; // Gold
      case 1:
        return 'border-gray-300 bg-gradient-to-r from-gray-300/20 to-transparent shadow-[0_0_15px_rgba(209,213,219,0.5)]'; // Silver
      case 2:
        return 'border-amber-600 bg-gradient-to-r from-amber-600/20 to-transparent shadow-[0_0_15px_rgba(217,119,6,0.5)]'; // Bronze
      default:
        return 'border-primary/20 bg-card/50';
    }
  };

  const getRankLabel = (index: number) => {
    return `${index + 1}`;
  };

  const getRankColor = (index: number) => {
    switch (index) {
      case 0:
        return 'text-yellow-400';
      case 1:
        return 'text-gray-300';
      case 2:
        return 'text-amber-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section
      id="leaderboard"
      className="py-16 md:py-30 px-4 relative overflow-hidden bg-background"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in relative">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-glow">
              CURRENT <span className="text-primary">STANDINGS</span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Top teams battling for the championship across all hacking tracks and esports matches.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-4 text-sm font-bold text-muted-foreground tracking-wider border-b border-primary/20 bg-card/30 rounded-t-xl uppercase">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-3">Team</div>
            <div className="col-span-2 text-center">Matches</div>
            <div className="col-span-2 text-center">Wins</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-right">Points</div>
          </div>

          {sortedLeaderboard.map((team, index) => {
            const isTop3 = index < 3;

            return (
              <div
                key={team.id}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-6 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-neon relative overflow-hidden ${getRankBadge(index)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle gradient effect on hover matching schedule/cards */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Rank */}
                <div className="col-span-1 flex items-center justify-between lg:justify-center">
                  <span className="lg:hidden text-muted-foreground uppercase text-xs font-bold">
                    Rank
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    {index === 0 && (
                      <Trophy className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    )}
                    {index === 1 && (
                      <Medal className="w-7 h-7 text-gray-300 drop-shadow-[0_0_8px_rgba(209,213,219,0.8)]" />
                    )}
                    {index === 2 && (
                      <Medal className="w-7 h-7 text-amber-600 drop-shadow-[0_0_8px_rgba(217,119,6,0.8)]" />
                    )}
                    <span
                      className={`font-heading font-bold ${isTop3 ? 'text-3xl' : 'text-xl'} ${getRankColor(index)} flex items-center`}
                    >
                      {getRankLabel(index)}
                    </span>
                  </div>
                </div>

                {/* Team Name */}
                <div className="col-span-3 flex flex-col items-start justify-center py-2 lg:py-0">
                  <h3
                    className={`font-bold font-heading tracking-wide ${isTop3 ? 'text-2xl ' + getRankColor(index) : 'text-xl text-primary-light'} group-hover:text-glow transition-all duration-300`}
                  >
                    {team.teamName}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {team.members.map((member, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-background/50 border border-border text-muted-foreground"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tournaments Played */}
                <div className="col-span-2 flex items-center justify-between lg:justify-center">
                  <span className="lg:hidden text-muted-foreground uppercase text-xs font-bold">
                    Matches Played
                  </span>
                  <span className="text-lg font-medium tracking-wide">
                    {team.tournamentsPlayed}
                  </span>
                </div>

                {/* Matches Won */}
                <div className="col-span-2 flex items-center justify-between lg:justify-center">
                  <span className="lg:hidden text-muted-foreground uppercase text-xs font-bold">
                    Matches Won
                  </span>
                  <span className="text-lg font-medium tracking-wide text-green-400">
                    {team.matchesWon}
                  </span>
                </div>

                {/* Win Rate */}
                <div className="col-span-2 flex items-center justify-between lg:justify-center">
                  <span className="lg:hidden text-muted-foreground uppercase text-xs font-bold">
                    Win Rate
                  </span>
                  <span className="text-lg font-medium tracking-wide text-cyan-400">
                    {team.winRate.toFixed(1)}%
                  </span>
                </div>

                {/* Points */}
                <div className="col-span-2 flex items-center justify-between lg:justify-end mt-2 lg:mt-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-border/50">
                  <span className="lg:hidden text-muted-foreground uppercase text-xs font-bold">
                    Total Points
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-heading font-bold ${isTop3 ? 'text-3xl' : 'text-2xl'} text-glow text-primary`}
                    >
                      {team.totalPoints}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      PTS
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
