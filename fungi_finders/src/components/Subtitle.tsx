import { SubtitleProps } from '@/app/_types/definitions';
import clsx from 'clsx';

const Subtitle = ({ as: Comp = 'h3', children, className }: SubtitleProps) => {
  return (
    <Comp
      className={clsx(
        `text-fs-600 font-semibold text-balance font-fira`,
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Subtitle;
