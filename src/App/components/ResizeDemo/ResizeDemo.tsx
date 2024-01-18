import React from 'react';

import { log } from '@/utils/log';

const ResizeDemo = () => {
  const [width, setWidth] = React.useState<null | number>(null);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      log('ResizeDemo has unmounted');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Ширина: {width} px</div>;
};

export default ResizeDemo;
