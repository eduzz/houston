import * as React from 'react';

import styled, { css, cx } from '@eduzz/houston-styles';

interface IToastBody {
  className?: string;
  content: React.ReactNode;
  type: 'informative' | 'positive' | 'negative' | 'warning';
}

const PositiveIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.1889 9.87176C18.4818 9.57887 18.4818 9.10399 18.1889 8.8111C17.896 8.51821 17.4211 8.51821 17.1282 8.8111L10.5 15.4393L6.78517 11.7245C6.49228 11.4316 6.01741 11.4316 5.72451 11.7245C5.43162 12.0174 5.43162 12.4923 5.72451 12.7852L9.61612 16.6768C10.1043 17.1649 10.8957 17.1649 11.3839 16.6768L18.1889 9.87176Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z'
      fill='black'
    />
  </svg>
);

const CancelIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.12224 4.84467C5.82935 4.55178 5.35447 4.55178 5.06158 4.84467C4.76869 5.13756 4.76869 5.61244 5.06158 5.90533L10.9394 11.7831L4.84467 17.8778C4.55178 18.1707 4.55178 18.6456 4.84467 18.9385C5.13756 19.2314 5.61244 19.2314 5.90533 18.9385L12 12.8438L18.0679 18.9116C18.3608 19.2045 18.8357 19.2045 19.1285 18.9116C19.4214 18.6187 19.4214 18.1439 19.1285 17.851L13.0607 11.7831L18.9116 5.93217C19.2045 5.63928 19.2045 5.16441 18.9116 4.87151C18.6187 4.57862 18.1439 4.57862 17.851 4.87151L12 10.7225L6.12224 4.84467Z'
      fill='black'
    />
  </svg>
);

interface IInitialIcon {
  type: IToastBody['type'];
}

const InitialIcon = ({ type }: IInitialIcon) => {
  switch (type) {
    case 'informative':
      return <PositiveIcon />;
    case 'positive':
      return <PositiveIcon />;
    case 'negative':
      return <PositiveIcon />;
    case 'warning':
      return <PositiveIcon />;
    default:
      return <div />;
  }
};

const ToastBody = ({ className, content, type }: IToastBody) => {
  return (
    <div className={cx(className, `--type-${type}`)}>
      <div className='__icon'>
        <InitialIcon type={type} />
      </div>
      <div className='__text'>{content}</div>
      <div className='__icon'>
        <CancelIcon />
      </div>
    </div>
  );
};

export default styled(ToastBody, { label: 'houston-toast-body' })`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing.inset.xs};
    background-color: #66d26a;

    .--type-informative {
      background-color: #66d26a;
    }

    .__icon {
      width: 20px;
      height: 20px;
    }

    .__icon > svg {
      width: 20px;
      height: 20px;
    }

    .__text {
      margin: 0 ${theme.spacing.inline.nano};
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.xs};
      line-height: ${theme.line.height.lg};
      color: ${theme.neutralColor.low.pure};
    }
  `}
`;
