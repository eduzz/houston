import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Avatar from './Avatar';
import CloseIcon from './CloseIcon';
import Label from './Label';
import PlusIcon from './PlusIcon';

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children, ...rest }: TagProps) => {
  return <span {...rest}>{children}</span>;
};

const TagWrapper = styled(Tag, { label: 'houston-tag' })(({ theme }) => {
  return css`
    display: inline-flex;
    align-items: center;
    border: 1px solid ${theme.neutralColor.low.pure};
    border-radius: ${theme.border.radius.pill};
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.nano};
  `;
});

export default nestedComponent(TagWrapper, {
  Avatar,
  PlusIcon,
  Label,
  CloseIcon
});
