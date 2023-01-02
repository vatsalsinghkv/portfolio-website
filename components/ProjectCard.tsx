import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectType } from '../types';

const ProjectCard = ({ name, url, repo, year, img, tags }: ProjectType) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <a
      href={url}
      target="_blank"
      className="block group bg-bg-secondary w-full max-w-[350px] shadow-xl rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-200"
    >
      <div className="overflow-hidden h-[200px]">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 py-3 space-y-1">
        <div className="flex justify-between items-center">
          <p className="text-xs capitalize font-mono">{tags.join(' | ')}</p>
          <div className="flex items-center space-x-1.5">
            <a
              href={repo}
              className="block hover:text-accent duration-200"
              target="_blank"
            >
              <Icon icon="tabler:brand-github" width={20} height={20} />
            </a>
            <a
              href={url}
              className="block hover:text-accent duration-200"
              target="_blank"
            >
              <Icon icon="ci:external-link" width={22} height={22} />
            </a>
          </div>
        </div>
        <h4 className="flex justify-between group-hover:text-accent capitalize font-medium duration-200">
          <span>{name}</span>
          <span className="mr-1">{year}</span>
        </h4>
      </div>
    </a>
  ) : (
    <></>
  );
};

export default ProjectCard;