import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import Collapse from '@eduzz/houston-ui/Collapse';

import { useChildrenProps, useChildrenComponent } from '../../hooks/useChildrenProps';
import CurrentButton from '../Buttons/CurrentButton';
import ErrorButton from '../Buttons/ErrorButton';
import FinishedButton from '../Buttons/FinishedButton';
import UnfinishedButton from '../Buttons/UnfinishedButton';
import Step from '../Step';

export interface StepperProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  current?: number;
  onPrev?: (current: number) => void;
  onNext?: (current: number) => void;
  mountOnEnter?: boolean;
  destroyOnClose?: boolean;
}

const Vertical = ({
  children,
  current: currentProp,
  onPrev,
  onNext,
  mountOnEnter,
  destroyOnClose,
  ...rest
}: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const steps = useChildrenComponent(children, Step);

  const [current, setCurrent] = React.useState(0);
  const controlled = typeof currentProp !== 'undefined';
  const currentStep = controlled ? currentProp : current;

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

  return (
    <div {...rest}>
      <div className='hst-step-vertical-steps'>
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
                className={cx('hst-step-vertical', { '--hst-step-vertical-active': isCurrent })}
              >
                {isFinished && !error && <FinishedButton buttonProps={buttonProps} />}
                {isCurrent && !error && <CurrentButton buttonProps={buttonProps} />}
                {isUnfinished && !error && <UnfinishedButton buttonProps={buttonProps} />}
                {error && <ErrorButton buttonProps={buttonProps} />}
              </div>
              {!last && (
                <hr
                  className={cx('hst-step-vertical-divider', { '--hst-step-vertical-divider-finished': isFinished })}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className='hst-step-vertical-content'>
        {steps?.map((step, index) => (
          <Collapse
            id={step.props.id}
            key={index}
            timeout={0}
            visibled={currentStep === index}
            mountOnEnter={mountOnEnter}
            destroyOnClose={destroyOnClose}
          >
            <div>{step.props.children}</div>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

const LINE_HEIGHT_IN_PX = 24;
const MARGIN_LEFT_IN_PX = 15;

export default React.memo(
  styled(Vertical, { label: 'hst-stepper-vertical' })(({ theme }) => {
    return css`
      display: flex;

      .hst-step-vertical-steps {
        display: flex;
        gap: ${theme.spacing.nano};
        flex-direction: column;

        .hst-step-vertical {
          display: flex;
          align-items: center;
          gap: ${theme.spacing.inline.nano};

          &.--hst-step-vertical-active {
            pointer-events: none;
          }

          .hst-step-label {
            margin-bottom: ${theme.spacing.stack.quarck};
          }
        }

        .hst-step-vertical-divider {
          all: unset;
          height: ${LINE_HEIGHT_IN_PX}px;
          border-left: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
          margin-left: ${MARGIN_LEFT_IN_PX}px;

          &.--hst-step-vertical-divider-finished {
            border-color: ${theme.brandColor.primary.pure};
          }
        }
      }
    `;
  })
);
