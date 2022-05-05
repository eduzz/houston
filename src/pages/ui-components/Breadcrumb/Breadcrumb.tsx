import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../Helpers/nestedComponent';
import Item from './Item';

export interface IBreadcrumbProps extends IStyledProp {}

const Breadcrumb: React.FC<IBreadcrumbProps> = props => {
  const { children, className } = props;

  return (
    <div className={cx(className)}>
      {React.Children.toArray(children)
        .slice(0, -1)
        .map(child => (
          <>
            <>{child}</>
            <div className='__separator'>{'>'}</div>
          </>
        ))}
      {children[React.Children.count(children) - 1]}
    </div>
  );
};

const StyledBreadcrumb = styled(Breadcrumb, { label: 'houston-breadcrumb' })(({ theme }) => {
  return css`
    border: solid;
    border-width: thin;
    text-transform: none;
    padding: 10px 16px;
    height: 40px;
    border-radius: ${theme.border.radius.xs};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    font-size: ${theme.font.size.xxs};
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & > .__item {
      display: flex;
      align-items: center;
      justify-content: center;

      & > .__icon ~ .__text {
        margin: 6px;
      }
    }

    & > .__separator {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px;
    }
  `;
});

export default nestedComponent(React.memo(StyledBreadcrumb), {
  Item
});
