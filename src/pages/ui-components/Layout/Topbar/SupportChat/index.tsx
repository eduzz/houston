import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { css, GlobalStyles } from '@eduzz/houston-styles';

import TopbarContext from '../context';
import chatInit from './chat';

const TopbarSupportChat = () => {
  const user = useContextSelector(TopbarContext, context => context.user);

  React.useEffect(() => {
    const destroy = chatInit(user);
    return () => destroy();
  }, [user]);

  return (
    <GlobalStyles
      styles={css`
        #lhc_status_container.lhc_container--delete {
          animation: eduzzToolbarFadeOut;
          animation-duration: 500ms;
          animation-fill-mode: both;
        }

        #lhc_status_container.lhc_container--fix-position {
          left: auto;
          bottom: 0;
          z-index: 102;
        }
      `}
    />
  );
};
export default TopbarSupportChat;
