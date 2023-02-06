import { useEffect } from 'react';

import { useContextSelector } from 'use-context-selector';

import chatInit from './chat';
import { css, GlobalStyles } from '../../../styled';
import TopbarContext from '../context';

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
