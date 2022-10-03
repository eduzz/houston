import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface ListRightProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListRight = ({ children, ...rest }: ListRightProps) => <div {...rest}>{children}</div>;

/**
 * @deprecated Use List from Antd
 * https://ant.design/components/list/
 */
export default styled(ListRight, { label: 'hst-list-item-right' })(() => {
  return css`
    margin-left: auto;
  `;
});
