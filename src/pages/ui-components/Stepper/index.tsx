import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import Collapse from '@eduzz/houston-ui/Collapse';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import nestedComponent from '../utils/nestedComponent';
import CurrentButton from './Buttons/CurrentButton';
import ErrorButton from './Buttons/ErrorButton';
import FinishedButton from './Buttons/FinishedButton';
import UnfinishedButton from './Buttons/UnfinishedButton';
import Step from './Step';
import Vertical from './Vertical';

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
  noClick?: boolean;
  mountOnEnter?: boolean;
  destroyOnClose?: boolean;
}

const ICON_SIZE = 32;

const Stepper = ({
  children,
  current: currentProp,
  onPrev,
  onNext,
  noClick,
  mountOnEnter,
  destroyOnClose,
  ...rest
}: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const steps = useChildrenComponent(children, Step);

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
    <>
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
            <React.Fragment key={label}>
              <div
                onClick={isFinished ? handlePrev(index) : handleNext(index)}
                className={cx('hst-step', { '--hst-step-noclick': isCurrent || noClick })}
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
            </React.Fragment>
          );
        })}
      </div>
      <div>
        {steps?.map((step, index) => (
          <Collapse
            id={step.props.id}
            key={index}
            timeout={10}
            visibled={currentStep === index}
            mountOnEnter={mountOnEnter}
            destroyOnClose={destroyOnClose}
          >
            <div>{step.props.children}</div>
          </Collapse>
        ))}
      </div>
    </>
  );
};

const MARGIN_TOP_IN_PX = 16;

const StepperWrapper = React.memo(
  styled(Stepper, { label: 'hst-stepper' })(({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.spacing.nano};

      .hst-step {
        cursor: pointer;

        &.--hst-step-noclick {
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
        height: ${theme.border.width.xs};
        margin-top: ${MARGIN_TOP_IN_PX}px;
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
  Vertical,
  Step
});
