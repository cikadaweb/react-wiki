import React from 'react';

import Button from '@/App/components/Button';

const PageWithCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => setCounter((prevValue) => prevValue + 1);

  return (
    <div>
      <div>Нажали {counter} раз(а)</div>
      <Button onClick={handleClick}>Нажать</Button>
    </div>
  );
};

export default PageWithCounter;
