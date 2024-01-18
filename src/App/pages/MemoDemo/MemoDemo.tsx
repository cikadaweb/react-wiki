import React from 'react';

import Checkbox from '@/App/components/Checkbox';
import Link from '@/App/components/Link';

const MemoDemo = () => {
  const [value, setValue] = React.useState(false);

  return (
    <Checkbox value={value} onChange={setValue}>
      <Link to="#" text="Текст ссылки" />
    </Checkbox>
  );
};

export default MemoDemo;
