import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about">
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Vatsal Singh, an artist as well as crazy full stack
            web developer who wants to explore every tech stack.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            {/* idk why using Link component here giving hydration failed error */}
            <Link
              href="https://webnetics.vercel.app/"
              target="_blank"
              className="text-accent"
            >
              Webnetics
            </Link>
            .
          </p>
          <p>
            My main focus these days is learning mobile development and finding
            a decent remote job.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
