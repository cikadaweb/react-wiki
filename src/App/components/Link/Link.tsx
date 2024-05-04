import React from 'react';

import { log } from '@utils/log';

export type LinkProps = {
  to: string;
  text: string;
};

const Link: React.FC<LinkProps> = ({ to, text }) => {
  log('Link is rendered');

  return <a href={to}>{text}</a>;
};

export default React.memo(Link);
