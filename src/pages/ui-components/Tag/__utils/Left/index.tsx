import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TagLeftProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const TagLeft = ({ children, onClick: onClickProp, ...rest }: TagLeftProps) => {
  const handleOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      onClickProp && onClickProp(e);
    },
    [onClickProp]
  );
  return (
    <span {...(onClickProp && { role: 'button', tabIndex: 0 })} onClick={handleOnClick} {...rest}>
      {children}
    </span>
  );
};

/**
 * @deprecated Use Tag from Antd
 * https://ant.design/components/tag/
 */
export default styled(TagLeft, { label: 'hst-tag-left' })(({ theme }) => {
  return css`
    border-radius: ${theme.border.radius.circular};
    padding: ${theme.spacing.stack.quarck};
    transition: 0.5s background-color;

    :hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.high.pure, theme.opacity.level[4])};
    }

    :focus {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }
  `;
});
