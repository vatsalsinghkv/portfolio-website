import { Button, Wrapper } from '../components';
import { heroSection } from '../utils/portfolio';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;
  return (
    <Wrapper
      id="hero"
      className="min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-16 sm:mt-0"
    >
      <p className="text-sm sm:text-base text-accent font-mono">{subtitle}</p>

      <div className="text-4xl xs:text-5xl sm:text-7xl font-bold tracking-tighter max-w-5xl">
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
          className={`mt-5 xs:mt-8 sm:mt-10 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          newTab={cta?.newTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
