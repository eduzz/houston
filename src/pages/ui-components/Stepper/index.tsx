import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import Collapse from '@eduzz/houston-ui/Collapse';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import nestedComponent from '../utils/nestedComponent';
import { CurrentIcon, UnfinishedIcon, ErrorIcon, FinishedIcon } from './Icons';
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
  disableClick?: boolean;
  mountOnEnter?: boolean;
  destroyOnClose?: boolean;
}

const Icons = (number: number) => ({
  current: <CurrentIcon number={number} />,
  unfinished: <UnfinishedIcon number={number} />,
  finished: <FinishedIcon />,
  error: <ErrorIcon />
});

const Colors = {
  current: 'neutralColor.low.pure',
  unfinished: 'neutralColor.low.light',
  finished: 'neutralColor.low.light',
  error: 'neutralColor.low.pure'
};

const decideStatus = (isFinished: boolean, isUnfinished: boolean, isCurrent: boolean, isError: boolean) => {
  const booleans = { error: isError, current: isCurrent, unfinished: isUnfinished, finished: isFinished };
  return Object.keys(booleans).filter(key => booleans[key])[0];
};

const Stepper = ({
  children,
  current: currentProp,
  onPrev,
  onNext,
  disableClick,
  mountOnEnter,
  destroyOnClose,
  ...rest
}: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const steps = useChildrenComponent(children, Step);

  const [dividersWidth, setDividersWidth] = React.useState<number[]>([]);

  const [current, setCurrent] = React.useState(0);
  const controlled = typeof currentProp !== 'undefined';
  const currentStep = controlled ? currentProp : current;

  const stepRefs = React.useRef<HTMLDivElement[]>([]);

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

  const ICON_SIZE_IN_PX = 32;
  const theme = useHoustonTheme();
  const SPACING_INLINE_IN_PX = theme.remToPx(theme.cleanUnit(theme.spacing.inline.nano));

  React.useEffect(() => {
    const dividersWidth = stepRefs.current.map(
      step => step.getBoundingClientRect().width - ICON_SIZE_IN_PX - SPACING_INLINE_IN_PX * 2
    );
    setDividersWidth(dividersWidth);
  }, [SPACING_INLINE_IN_PX]);

  return (
    <>
      <div {...rest}>
        {childrenProps?.map(({ label, description, error }, index) => {
          const isFinished = index < currentStep;
          const isUnfinished = index > currentStep;
          const isCurrent = index === currentStep;
          const isError = error ?? false;
          const status = decideStatus(isFinished, isUnfinished, isCurrent, isError);

          return (
            <div className='hst-step' ref={passRefsToArray(index)} key={label + index}>
              <div
                className={cx('hst-step-button', { 'hst-step-disableclick': disableClick })}
                onClick={isFinished ? handlePrev(index) : handleNext(index)}
              >
                <IconButton size='md' fill className='hst-step-iconbutton'>
                  {Icons(index)[status]}
                </IconButton>
                <Typography size='xs' color={Colors[status]} lineHeight='default' className='hst-step-label'>
                  {label}
                </Typography>
                {description && (
                  <Typography size='xxs' color={Colors[status]} lineHeight='default'>
                    {description}
                  </Typography>
                )}
              </div>
              <hr
                className={cx('hst-step-divider', { 'hst-step-divider-finished': isFinished })}
                style={{ width: dividersWidth[index], left: ICON_SIZE_IN_PX + SPACING_INLINE_IN_PX }}
              />
            </div>
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

      div:last-child > hr:last-child {
        display: none;
      }

      .hst-step {
        display: flex;
        position: relative;
        flex: 1 1 0px;

        .hst-step-button {
          cursor: pointer;
          &.hst-step-disableclick {
            pointer-events: none;
          }
        }

        .hst-step-iconbutton {
          margin-bottom: ${theme.spacing.stack.nano};
        }

        .hst-step-label {
          margin-bottom: ${theme.spacing.stack.quarck};
        }
      }

      .hst-step-divider {
        position: absolute;
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
