import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TopbarContext from '../context';
import chatInit from './chat';

const TopbarSupportChat = () => {
  const user = useContextSelector(TopbarContext, context => context.user);

  React.useEffect(() => {
    const destroy = chatInit(user);
    return () => destroy();
  }, [user]);

  return null;
};
export default TopbarSupportChat;
