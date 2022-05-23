import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { InformativeIcon, PositiveIcon, AlertIcon, CancelIcon } from '../Icons';

type ToastTypes = 'informative' | 'positive' | 'negative' | 'warning';

interface IToastBodyProps extends IStyledProp {
  content: React.ReactNode;
  type: ToastTypes;
}

type IIconsMap = Record<ToastTypes, JSX.Element>;

type IInitialIcon = Record<'type', ToastTypes>;

const iconsMap: IIconsMap = {
  informative: <InformativeIcon />,
  positive: <PositiveIcon />,
  negative: <AlertIcon />,
  warning: <AlertIcon />
};

const InitialIcon = ({ type }: IInitialIcon) => iconsMap[type];

const ToastBody = ({ className, content, type }: IToastBodyProps) => {
  return (
    <div className={cx(className, `--type-${type}`)}>
      <InitialIcon type={type} />
      <div className='__text'>{content}</div>
      <CancelIcon />
    </div>
  );
};

export default styled(ToastBody, { label: 'houston-toast-body' })`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing.inset.xs};

    &.--type-informative {
      background-color: ${theme.feedbackColor.informative.medium};
    }

    &.--type-positive {
      background-color: ${theme.feedbackColor.positive.medium};
    }

    &.--type-negative {
      background-color: ${theme.feedbackColor.negative.medium};
    }

    &.--type-warning {
      background-color: ${theme.feedbackColor.warning.medium};
    }

    svg {
      width: ${theme.pxToRem('24px')};
      height: ${theme.pxToRem('24px')};
    }

    .__text {
      margin: 0 ${theme.spacing.inline.xxxs};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.xs};
      line-height: ${theme.line.height.lg};
      color: ${theme.neutralColor.low.pure};
      max-width: ${theme.pxToRem('391px')};
    }
  `}
`;
