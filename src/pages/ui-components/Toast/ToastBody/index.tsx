import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import truncateText from '../../utils/truncateText';
import warning from '../../utils/warning';
import { InformativeIcon, PositiveIcon, AlertIcon, CancelIcon, WarningIcon } from '../Icons';

type ToastTypes = 'informative' | 'positive' | 'negative' | 'warning';

interface ToastBodyProps extends StyledProp {
  content: string;
  type: ToastTypes;
}

type IconsMapType = Record<ToastTypes, JSX.Element>;

const IconsMap: IconsMapType = {
  informative: <InformativeIcon />,
  positive: <PositiveIcon />,
  negative: <AlertIcon />,
  warning: <WarningIcon />
};

const GUTTER_WIDTH = 32;
const TEXT_MAX_LENGTH = 48;

const ToastBody = ({ className, content, type }: ToastBodyProps) => {
  React.useEffect(() => {
    if (content.length > TEXT_MAX_LENGTH) {
      warning('Toast', `text limit is ${TEXT_MAX_LENGTH} characters`);
    }
  }, [content]);
  return (
    <div role='alertdialog' className={cx(className, `--type-${type}`)}>
      <span role='img' className='__icon'>
        {IconsMap[type]}
      </span>
      <div className='__text'>{truncateText(content, TEXT_MAX_LENGTH)}</div>
      <span className='__cancel-icon'>
        <CancelIcon />
      </span>
    </div>
  );
};

export default styled(ToastBody, { label: 'houston-toast-body' })`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing.inset.xs};
    border: ${theme.border.width.xs} solid;
    border-radius: ${theme.border.radius.sm};
    box-shadow: ${theme.shadow.level[2]};

    ${theme.breakpoints.down('sm')} {
      width: calc(100vw - ${theme.pxToRem(GUTTER_WIDTH)}rem);
    }

    .__icon {
      line-height: 0;
      margin-right: ${theme.spacing.inline.xxxs};

      ${theme.breakpoints.down('sm')} {
        display: none;
      }
    }

    .__cancel-icon {
      line-height: 0;
      margin-left: ${theme.spacing.inline.xxxs};

      ${theme.breakpoints.down('sm')} {
        margin-left: auto;
      }
    }

    &.--type-informative {
      background-color: ${theme.feedbackColor.informative.light};
      border-color: ${theme.feedbackColor.informative.medium};
    }

    &.--type-positive {
      background-color: ${theme.feedbackColor.positive.light};
      border-color: ${theme.feedbackColor.positive.medium};
    }

    &.--type-negative {
      background-color: ${theme.feedbackColor.negative.light};
      border-color: ${theme.feedbackColor.negative.medium};
    }

    &.--type-warning {
      background-color: ${theme.feedbackColor.warning.light};
      border-color: ${theme.feedbackColor.warning.medium};
    }

    svg {
      width: ${theme.pxToRem(24)}rem;
      height: ${theme.pxToRem(24)}rem;
    }

    .__text {
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.xs};
      line-height: ${theme.line.height.lg};
      color: ${theme.neutralColor.low.pure};
    }
  `}
`;
