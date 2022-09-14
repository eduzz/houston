import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import nestedComponent from '../utils/nestedComponent';
import CurrentButton from './CurrentButton';
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
  finished?: number[];
  onChange?: (finished: number[]) => void;
  active?: number;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const ICON_SIZE = 32;

const Stepper = ({ children, finished, onChange, destroyOnClose, mountOnEnter, ...rest }: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const Stepper = useChildrenComponent(children, Step);
  const [current, setCurrent] = React.useState(0);

  const stepRefs = React.useRef<HTMLDivElement[]>([]);

  const [negativeMargins, setNegativeMargins] = React.useState<number[]>([]);

  const passRefsToArray = React.useCallback(
    (index: number) => (el: HTMLDivElement) => {
      stepRefs.current[index] = el;
    },
    [stepRefs]
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
        const isFinished = index < current;
        const isUnfinished = index > current;
        const isCurrent = index === current;

        const buttonProps = {
          label,
          description,
          number: index
        };

        return (
          <>
            <div
              onClick={() => setCurrent(index)}
              className={cx('hst-step', { '--hst-step-active': isCurrent })}
              key={label}
              ref={passRefsToArray(index)}
            >
              {isFinished && <FinishedButton buttonProps={buttonProps} />}
              {isCurrent && <CurrentButton buttonProps={buttonProps} />}
              {isUnfinished && <UnfinishedButton buttonProps={buttonProps} />}
            </div>
            {!last && <hr className='hst-step-divider' style={{ marginLeft: negativeMargins[index] }} />}
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
          margin-bottom: ${theme.spacing.nano};
        }
      }

      .hst-step-divider {
        flex-grow: 1;
        border-color: blue;
        height: 1px;
        margin-top: 14px;
        border-width: 0 0 ${theme.border.width.xs};
      }
    `;
  })
);

export default nestedComponent(StepperWrapper, {
  Stepper,
  Step
});
