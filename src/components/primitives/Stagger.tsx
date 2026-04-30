import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { buildStagger } from '../../motion';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol' | 'section';
  gap?: number;
  delay?: number;
  amount?: number;
  variants?: Variants;
};

export function Stagger({
  children,
  className,
  as = 'div',
  gap = 0.09,
  delay = 0,
  amount = 0.15,
  variants,
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const v = variants ?? buildStagger(reduced, gap, delay);
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={v}
    >
      {children}
    </Comp>
  );
}
