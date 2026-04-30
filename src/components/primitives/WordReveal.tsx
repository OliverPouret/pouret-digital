import { motion, useReducedMotion } from 'framer-motion';
import { buildWord } from '../../motion';

type Props = {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  once?: boolean;
};

export function WordReveal({
  text,
  className,
  as = 'h1',
  delay = 0,
  once = true,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const word = buildWord(reduced);
  const words = text.split(' ');

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.1em' }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          transition={{ delay: delay + (i * 100) / 1000 }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
