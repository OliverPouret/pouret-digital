import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { buildEntrance } from '../../motion';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'span';
  delay?: number;
  amount?: number;
  variants?: Variants;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
  amount = 0.1,
  variants,
  once = true,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const v = variants ?? buildEntrance(reduced);
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={v}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
