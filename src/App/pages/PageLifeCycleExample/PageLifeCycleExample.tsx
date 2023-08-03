import React from 'react';

import Button from '@/App/components/Button';
import Counter from '@/App/components/Counter';
import ResizeDemo from '@/App/components/ResizeDemo';
import { log } from '@/utils/log';

const PageLifeCycleExample = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleShow = () => setIsVisible(true);
  const handleHide = () => setIsVisible(false);

  log('PageLifeCycleExample is rendered');

  React.useEffect(() => { 
    log('PageLifeCycleExample useEffect')
   }, []);

  return (
    <div>
      <Button onClick={handleShow}>Show</Button>
      <Button onClick={handleHide}>Hide</Button>
      {isVisible && <Counter />}
      {isVisible && <ResizeDemo />}
    </div>
  )
};

export default PageLifeCycleExample;