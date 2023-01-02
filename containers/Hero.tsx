import { Button } from '../components';
import { heroSection } from '../utils/portfolio';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;
  return (
    <section
      id="hero"
      className="min-h-screen h-full flex flex-col justify-center gap-7"
    >
      <p className="text-sm sm:text-base text-accent font-mono">{subtitle}</p>

      <div className="text-5xl sm:text-7xl font-bold tracking-tighter max-w-5xl">
        <h1 className="text-slate-900 dark:text-slate-200 capitalize mb-2">
          {title}
        </h1>
        <h1>{tagline}</h1>
      </div>

      <p className="max-w-xl text-base sm:text-lg">{description}</p>

      <p className="text-xs sm:text-sm font-mono text-accent">{specialText}</p>

      {cta && (
        <Button
          size="lg"
          type="link"
          href={cta?.link ?? '#'}
          className={`mt-8 sm:mt-10 ${cta.hideInDesktop ? 'md:hidden' : ''}`}
          newTab={cta?.newTab}
        >
          {cta.title}
        </Button>
      )}
    </section>
  );
};

export default Hero;
