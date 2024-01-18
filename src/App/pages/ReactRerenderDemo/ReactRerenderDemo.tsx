import React from 'react';

import Checkbox from '@/App/components/Checkbox';
import Counter from '@/App/components/Counter';

const ReactRerenderDemo = () => {
  const [isSpan, setIsSpan] = React.useState(false);

  const Element = isSpan ? 'span' : 'div';

  return (
    <Element>
      <Checkbox value={isSpan} onChange={setIsSpan}>
        Сделать span
      </Checkbox>
      <Counter />
    </Element>
  );
};

export default ReactRerenderDemo;
