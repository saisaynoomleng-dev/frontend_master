import clsx from 'clsx';
import React from 'react';

const MushroomType = ({
  type,
  children,
}: {
  type: 'edible' | 'toxic';
  children: React.ReactNode;
}) => {
  return (
    <p
      className={clsx(
        'px-2 text-fs-300 capitalize rounded-sm',
        type === 'edible' && 'bg-teal-500',
        type === 'toxic' && 'bg-red-500',
      )}
    >
      {children}
    </p>
  );
};

export default MushroomType;
