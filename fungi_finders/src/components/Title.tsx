import { TitleProps } from '@/app/_types/definitions';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h2', children, size, className }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        `font-bold text-balance leading-[1.1] font-fira`,
        size === 'lg' && 'text-fs-900',
        size === 'sm' && 'text-fs-800',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
