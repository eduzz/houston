import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import nestedComponent from '../utils/nestedComponent';
import CurrentButton from './CurrentButton';
import ErrorButton from './ErrorButton';
import FinishedButton from './FinishedButton';
import Step from './Step';
import UnfinishedButton from './UnfinishedButton';

type ButtonType = {
  label: string;
  description?: string;
  number: number;
};

export type ButtonPropsType = {
  buttonProps: ButtonType;
};

export interface StepperProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  current?: number;
  onPrev?: (current: number) => void;
  onNext?: (current: number) => void;
}

const ICON_SIZE = 32;

const Stepper = ({ children, current: currentProp, onPrev, onNext, ...rest }: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const Stepper = useChildrenComponent(children, Step);

  const [current, setCurrent] = React.useState(0);
  const controlled = typeof currentProp !== 'undefined';
  const currentStep = controlled ? currentProp : current;

  const stepRefs = React.useRef<HTMLDivElement[]>([]);

  const [negativeMargins, setNegativeMargins] = React.useState<number[]>([]);

  const passRefsToArray = React.useCallback(
    (index: number) => (el: HTMLDivElement) => {
      stepRefs.current[index] = el;
    },
    [stepRefs]
  );

  const handlePrev = React.useCallback(
    (current: number) => () => {
      onPrev && onPrev(current);
      !controlled && setCurrent(current);
    },
    [onPrev, controlled]
  );

  const handleNext = React.useCallback(
    (current: number) => () => {
      onNext && onNext(current);
      !controlled && setCurrent(current);
    },
    [onNext, controlled]
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const negativeMargins = stepRefs?.current?.map(
        (tab: HTMLDivElement) => -(tab.getBoundingClientRect().width - ICON_SIZE)
      );
      setNegativeMargins(negativeMargins);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div {...rest}>
      {childrenProps?.map(({ label, description, error }, index) => {
        const last = index === childrenProps.length - 1;
        const isFinished = index < currentStep;
        const isUnfinished = index > currentStep;
        const isCurrent = index === currentStep;

        const buttonProps = {
          label,
          description,
          number: index
        };

        return (
          <>
            <div
              onClick={isFinished ? handlePrev(index) : handleNext(index)}
              className={cx('hst-step', { '--hst-step-active': isCurrent })}
              key={label}
              ref={passRefsToArray(index)}
            >
              {isFinished && !error && <FinishedButton buttonProps={buttonProps} />}
              {isCurrent && !error && <CurrentButton buttonProps={buttonProps} />}
              {isUnfinished && !error && <UnfinishedButton buttonProps={buttonProps} />}
              {error && <ErrorButton buttonProps={buttonProps} />}
            </div>
            {!last && (
              <hr
                className={cx('hst-step-divider', { '--hst-step-divider-finished': isFinished })}
                style={{ marginLeft: negativeMargins[index] }}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

const StepperWrapper = React.memo(
  styled(Stepper, { label: 'hst-stepper' })(({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.spacing.nano};

      .hst-step {
        &.--hst-step-active {
          pointer-events: none;
        }

        .hst-step-iconbutton {
          margin-bottom: ${theme.spacing.stack.nano};
        }

        .hst-step-label {
          margin-bottom: ${theme.spacing.stack.quarck};
        }
      }

      .hst-step-divider {
        flex-grow: 1;
        border-color: ${theme.neutralColor.low.pure};
        height: 1px;
        margin-top: 14px;
        border-width: 0 0 ${theme.border.width.xs};

        &.--hst-step-divider-finished {
          border-color: ${theme.brandColor.primary.pure};
        }
      }
    `;
  })
);

export default nestedComponent(StepperWrapper, {
  Stepper,
  Step
});
