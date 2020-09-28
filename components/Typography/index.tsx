import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

import { useTheme } from '../ThemeProvider/context';

type TypographyPropsExtends = 'className' | 'style' | 'children' | 'color' | 'variant' | 'paragraph';

interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {}

const Typography = React.forwardRef<HTMLSpanElement, ITypographyProps>((props, ref) => {
  const theme = useTheme();

  const { className, children, style, color, variant, paragraph } = props;
  const typographyProps = { className, style, color, variant, paragraph };

  return (
    <ThemeProvider theme={theme}>
      <TypographyMUI {...typographyProps} ref={ref}>
        {children}
      </TypographyMUI>
    </ThemeProvider>
  );
});

export default React.memo(Typography);
