import { SubtitleProps } from '@/app/_types/definitions';
import clsx from 'clsx';

const Subtitle = ({ as: Comp, children, className }: SubtitleProps) => {
  return (
    <Comp className={clsx(`text-fs-500 font-semibold text-balance`, className)}>
      {children}
    </Comp>
  );
};

export default Subtitle;
