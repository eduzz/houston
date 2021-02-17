import * as React from 'react';

import BoxMUI, { BoxProps } from '@material-ui/core/Box';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

type BoxPropsExtends = 'id' | 'className' | 'style' | 'children';

interface IBoxProps extends Pick<BoxProps, BoxPropsExtends> {
  xs: { margin: string; padding: string };
  sm?: { margin: string; padding: string };
  md?: { margin: string; padding: string };
  lg?: { margin: string; padding: string };
  xl?: { margin: string; padding: string };
}

const Box = React.forwardRef<HTMLDivElement, IBoxProps>(({ children, ...props }) => {
  const [margin, setMargin] = React.useState<string>('0');
  const [padding, setPadding] = React.useState<string>('0');

  const windowListener = React.useCallback(() => {
    const queries = [
      { xs: '(max-width: 600px)' },
      { sm: '(max-width: 960px) and (min-width: 601px)' },
      { md: '(max-width: 1280px) and (min-width: 961px)' },
      { lg: '(max-width: 1920px) and (min-width: 1281px)' },
      { xl: '(min-width: 1921px)' }
    ];

    const config = queries.reduce((acc, query) => {
      if (window.matchMedia(Object.values(query)[0]).matches) {
        return Object.keys(query);
      }

      return acc;
    }, 'xs');

    if (props[`${Object.values(config)[0]}`]) {
      setPadding(props[`${Object.values(config)[0]}`].padding);
      setMargin(props[`${Object.values(config)[0]}`].margin);
    }
  }, [props]);

  React.useEffect(() => {
    windowListener();

    window.addEventListener('resize', windowListener);
  }, [windowListener]);

  return (
    <WrapperTheme>
      <BoxMUI padding={padding} margin={margin} className={props.className}>
        {children}
      </BoxMUI>
    </WrapperTheme>
  );
});

export default React.memo(Box);
