'use client';
import { motion, MotionProps } from 'framer-motion';
import { getId } from '@/lib/utils/helper';
import { ListItem } from '@/components';

type Props = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string[];
} & MotionProps;

const AcademicItem = ({ degree, institution, location, period, details = [], ...rest }: Props) => {
  return (
    <motion.div className="space-y-4" {...rest}>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium capitalize">{degree}</h3>
          <p className="text-sm text-dark-3">{institution}{location ? ` — ${location}` : ''}</p>
        </div>
        <p className="text-sm text-dark-3">{period}</p>
      </div>

      {details.length > 0 && (
        <ul className="space-y-1">
          {details.map((d) => (
            <ListItem key={getId()}>{d}</ListItem>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default AcademicItem;
