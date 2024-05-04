import React from 'react';

export type UseStopWatchResult = {
  value: number;
  handleReset: () => void;
  handleStart: () => void;
};

export const useStopWatch = (): UseStopWatchResult => {
  const [value, setValue] = React.useState(0);
  const timeout = React.useRef<null | NodeJS.Timeout>(null);

  const reset = () => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }
  };

  React.useEffect(
    () => () => {
      reset();
    },
    [],
  );

  const handleReset = () => {
    reset();

    setValue(0);
  };

  const handleStart = () => {
    reset();

    timeout.current = setTimeout(() => {
      setValue((prev) => prev + 1);
      handleStart();
    }, 1000);
  };

  return { handleReset, handleStart, value };
};
