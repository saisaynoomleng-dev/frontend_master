import { BoundedProps } from '@/app/_types/definitions';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
  width,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        `mx-auto py-5`,
        width === 'wide' && 'max-w-[1130px]',
        width === 'compact' && 'max-w-[760px]',
        width === 'small' && 'max-w-[560px]',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
