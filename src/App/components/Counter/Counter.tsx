import React from 'react';

import Button from '@/App/components/Button';
import { log } from '@/utils/log';

const Counter = () => {
  const [value, setCounter] = React.useState(0);

  const handleClick = () => setCounter((prev) => prev + 1);

  log('Counter is rendered', value);

  React.useEffect(() => {
    log('Counter useEffect', value);
  }, [value]);

  return (
    <div>
      <div>Нажали {value} раз(а)</div>
      <Button onClick={handleClick}>Нажать</Button>
    </div>
  );
};

export default Counter;
