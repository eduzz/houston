import './types';

import emotionStyled from '@emotion/styled';

import useHoustonTheme from './useHoustonTheme';

export { breakpoinstUtils as breakpoints } from '@eduzz/houston-tokens/variables/breakpoints';
export { keyframes, cx, cx as clsx } from '@emotion/css';

export interface IStyledProp {
  className?: string;
}

export const withHoustonTheme =
  <P,>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const tokens = useHoustonTheme();
    return <Component {...props} houston={tokens} />;
  };

const styled = emotionStyled;
export default styled;
