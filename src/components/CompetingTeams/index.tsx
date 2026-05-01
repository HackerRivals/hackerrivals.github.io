import { competingTeams } from '../../constants/competingTeams';
import { isEventActive, hasEventStarted } from '../../constants/eventConfig';

const CompetingTeams = () => {
  const eventActive = isEventActive();
  const eventStarted = hasEventStarted();

  if (!eventActive) return null;

  const title = eventStarted ? 'CURRENTLY COMPETING' : 'TEAMS READY TO COMPETE';

  return (
    <section id="competing-teams" className="py-16 md:py-30 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10" />
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-5xl font-mono md:mb-12 mb-8 text-center text-primary font-bold uppercase tracking-wider">
          <span className="text-foreground">&lt;</span>
          {title}
          <span className="text-foreground">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competingTeams.map((team) => (
            <div
              key={team.id}
              className="border border-primary/30 bg-black/40 p-6 shadow-neon hover:shadow-neon-intense transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary font-mono text-sm border border-primary/50 bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {team.id}
                </span>
                <span className="text-secondary font-heading">{team.name}</span>
              </h3>
              <ul className="space-y-2">
                {team.members.map((member, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-center gap-2 font-mono text-sm"
                  >
                    <span className="text-accent">&gt;</span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetingTeams;
