import clsx from 'clsx';
import React from 'react';

const SeasonType = ({
  children,
  season,
}: {
  children: React.ReactNode;
  season: 'spring' | 'summer' | 'fall';
}) => {
  return (
    <p
      className={clsx(
        'px-2 text-fs-300 capitalize rounded-sm',
        season === 'spring' && 'bg-teal-500',
        season === 'summer' && 'bg-green-600',
        season === 'fall' && 'bg-orange-500',
      )}
    >
      {children}
    </p>
  );
};

export default SeasonType;
