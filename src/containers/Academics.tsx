'use client';
import { academicsSection } from '@/lib/content/academics';
import { AcademicItem, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

const Academics = () => {
  const { title, items } = academicsSection as any;

  return (
    <Wrapper id="academics" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-8 max-w-3xl mx-auto">
        {items.map((it: any) => (
          <AcademicItem
            key={it.id}
            degree={it.degree}
            institution={it.institution}
            location={it.location}
            period={it.period}
            details={it.details}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Academics;
