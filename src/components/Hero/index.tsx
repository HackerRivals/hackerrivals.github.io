import Countdown from '../Countdown';
import { heroContent } from '../../constants/hero';
import { isEventActive, hasEventStarted } from '../../constants/eventConfig';

const Hero = () => {
  const eventActive = isEventActive();
  const eventStarted = hasEventStarted();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      id="home"
      aria-label="Hero section with event details and countdown"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30 bg-hero bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        role="img"
        aria-label="Futuristic technology background pattern"
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark" aria-hidden="true" />

      {/* Floating Elements */}
      <div
        className="absolute inset-0 opacity-20 animate-float bg-floating bg-cover"
        aria-hidden="true"
        role="img"
        aria-label="Floating geometric elements for visual enhancement"
      />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-neon-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-neon-purple rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-neon-green rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-3/4 left-1/2 w-20 md:w-40 h-20 md:h-40 bg-neon-orange rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full mt-20">
        <div className="mb-0 animate-fade-in">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-glow leading-tight">
            {heroContent.title.main}
          </h1>
          <h1 className="block text-primary animate-pulse font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-glow leading-tight md:-mt-8">
            {heroContent.title.highlight}
          </h1>
        </div>
      </div>

      {/* Tagline */}
      <div className="mb-2 animate-fade-in delay-200">
        <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed text-center">
          {heroContent.tagline.prefix}{' '}
          <span className="text-neon font-semibold animate-pulse">
            {heroContent.tagline.highlight}
          </span>
          <br />
          {heroContent.tagline.suffix}{' '}
          <span className="text-primary font-semibold">{heroContent.tagline.emphasis}</span>
        </p>
      </div>

      {/* Powered by AI Badge */}
      <div className="mb-4 animate-fade-in delay-250">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-md border border-primary/30 rounded-full shadow-neon group hover:shadow-purple transition-all duration-300 hover:scale-105">
          {/* AI Icon */}
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" />
                <path d="M5 7L5.5 8.5L7 9L5.5 9.5L5 11L4.5 9.5L3 9L4.5 8.5L5 7Z" />
              </svg>
            </div>
            <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full animate-ping opacity-20"></div>
          </div>
          {/* Text */}
          <span className="font-heading text-sm md:text-base font-bold text-glow animate-glow-pulse">
            POWERED BY AI
          </span>
          {/* Sparkle Animation */}
          <div className="relative">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Event Date */}
      <div className="mb-8 animate-fade-in delay-300">
        <div className="inline-block px-4 md:px-6 py-3 md:py-4 bg-card/80 backdrop-blur-md border border-primary rounded-lg shadow-neon">
          <p className="font-body text-lg md:text-xl lg:text-2xl font-semibold text-primary">
            {heroContent.event.date}
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground text-center">
            {heroContent.event.location}
          </p>
          <p className="font-body text-xs md:text-sm text-secondary text-center mt-1">
            {heroContent.event.afterParty}
          </p>
        </div>
      </div>

      {/* Countdown Timer or Live Event Status */}
      <div className="mb-8 animate-fade-in delay-400 w-full max-w-4xl mx-auto px-4">
        {!eventStarted ? (
          <Countdown />
        ) : (
          <a
            href="#competing-teams"
            className="block transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center p-8 bg-card/80 backdrop-blur-md border-[2px] border-accent/70 rounded-xl shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)] animate-pulse-slow hover:border-accent hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.7)] cursor-pointer relative overflow-hidden group">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500 rounded-xl"></div>

              <div className="flex items-center gap-4 mb-4 z-10 relative">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-red-500 uppercase tracking-widest text-center">
                  Live Now
                </h2>
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80 delay-300"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                </span>
              </div>
              <p className="text-lg md:text-xl text-center text-foreground font-body max-w-2xl font-medium z-10 relative">
                The tournament is currently underway! Watch the hackers battle it out and don't
                forget to cast your vote.
              </p>
              <div className="mt-6 text-base font-bold text-accent flex items-center gap-2 bg-accent/10 px-6 py-2 rounded-full border border-accent/30 z-10 relative">
                <span>View Currently Competing Teams</span>
                <svg
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Registration Buttons */}
      {eventActive && (
        <div className="mb-12 animate-fade-in delay-500 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto px-4 flex-wrap">
            {!eventStarted && (
              <>
                <a
                  href="https://luma.com/cloudsummit26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon font-body text-lg py-3 px-8 w-full sm:w-auto transform hover:scale-105 transition-all duration-300 text-center shrink-0"
                >
                  Attendee Ticket
                </a>
                <a
                  href="#register"
                  className="btn-neon font-body text-lg py-3 px-8 w-full sm:w-auto transform hover:scale-105 transition-all duration-300 text-center shrink-0"
                >
                  Apply to Compete
                </a>
              </>
            )}
            {eventStarted && (
              <a
                href="https://hackerrivals-poll.up.railway.app/poll/ba4ec706-3b37-4816-8c80-b15ce56a2253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 group px-8 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-md border border-accent/50 rounded-lg shadow-neon font-body text-lg text-white font-bold transition-all duration-300 hover:scale-105 hover:from-accent/30 hover:to-secondary/30 shrink-0"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  🔥
                </span>
                <span>Vote for a Whammy</span>
              </a>
            )}
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-4 max-w-lg mx-auto px-4">
            {eventStarted
              ? 'Support your favorite team by casting your vote below!'
              : 'Choose your experience: Purchase a ticket to attend or apply to compete for the $1000 prize'}
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
