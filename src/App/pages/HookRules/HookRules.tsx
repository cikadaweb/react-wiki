import React from 'react';

import Button from '@/App/components/Button';
import Counter from '@/App/pages/HookRules/components/Counter';
import { range } from '@/utils/range';
const HookRules = () => {
  const [countersCount, setCountersCount] = React.useState(3);
  const incCountersCount = () => setCountersCount((count) => count + 1);

  return (
    <div>
      <p>Количество счетчиков: {countersCount}</p>
      <Button onClick={incCountersCount}>Добавить</Button>
      {range(countersCount).map((index) => (
        <Counter index={index} />
      ))}
    </div>
  );
};

export default HookRules;
