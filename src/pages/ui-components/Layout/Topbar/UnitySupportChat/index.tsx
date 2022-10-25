import { useEffect } from 'react';

import { useContextSelector } from 'use-context-selector';

import { css, GlobalStyles } from '@eduzz/houston-ui/styled';

import TopbarContext from '../context';
import chatInit from './chat';

const TopbarUnitySupportChat = () => {
  const user = useContextSelector(TopbarContext, context => context.user);

  useEffect(() => {
    if (!user?.isClubeBlack) return;
    const destroy = chatInit(user);
    return () => destroy();
  }, [user]);

  return (
    <GlobalStyles
      styles={css`
        #lhc_status_widget_v2 {
          left: auto !important;
          bottom: 0 !important;
          z-index: 102 !important;
        }
      `}
    />
  );
};
export default TopbarUnitySupportChat;
