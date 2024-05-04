import React from 'react';

import './MouseObserver.css';
import { log } from '@/utils/log';

const MouseObserver = () => {
  const containerRef = React.useRef<null | HTMLDivElement>(null);
  const mouseRef = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const containerNode = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current === null) {
        return;
      }
      mouseRef.current.style.left = `${e.offsetX}px`;
      mouseRef.current.style.top = `${e.offsetY}px`;
    };

    containerNode.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerNode.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  log('MouseObserver is mounted');

  return (
    <div ref={containerRef} className="mouse-observer">
      <div ref={mouseRef} className="mouse-observer__mouse" />
    </div>
  );
};

export default MouseObserver;
