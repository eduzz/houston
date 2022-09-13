import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import nestedComponent from '../utils/nestedComponent';
import Step from './Step';

export interface StepperProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  finished?: number[];
  onChange?: (finished: number[]) => void;
  active?: number;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const FinishedIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'>
    <rect width='32' height='32' rx='16' fill='#0D2772' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.1844 20.9494C14.1766 20.9578 14.1686 20.9662 14.1605 20.9744C13.8676 21.2673 13.3927 21.2673 13.0998 20.9744L8.71967 16.5942C8.42678 16.3013 8.42678 15.8265 8.71967 15.5336C9.01256 15.2407 9.48744 15.2407 9.78033 15.5336L13.6649 19.4182L22.1135 10.9697C22.4064 10.6768 22.8812 10.6768 23.1741 10.9697C23.467 11.2626 23.467 11.7374 23.1741 12.0303L14.4106 20.7939C14.3433 20.8612 14.2664 20.913 14.1844 20.9494Z'
      fill='white'
    />
  </svg>
);

const ICON_SIZE = 32;

const Stepper = ({ children, finished, onChange, destroyOnClose, mountOnEnter, ...rest }: StepperProps) => {
  const childrenProps = useChildrenProps(children, Step);
  const Stepper = useChildrenComponent(children, Step);

  const stepRefs = React.useRef<HTMLDivElement[]>([]);
  const [negativeMargins, setNegativeMargins] = React.useState<number[]>([]);

  const passRefsToArray = React.useCallback(
    (index: number) => (el: HTMLDivElement) => {
      stepRefs.current[index] = el;
    },
    [stepRefs]
  );

  React.useEffect(() => {
    const negativeMargins = stepRefs?.current?.map(
      (tab: HTMLDivElement) => -(tab.getBoundingClientRect().width - ICON_SIZE)
    );
    setNegativeMargins(negativeMargins);
  }, []);

  return (
    <div {...rest}>
      {childrenProps?.map(({ label, description, error }, index) => {
        const lastDivider = index === childrenProps.length - 1;
        return (
          <>
            <div className='hst-step' key={label} ref={passRefsToArray(index)}>
              <IconButton size='md' fill>
                <FinishedIcon />
              </IconButton>
              <Typography color='neutralColor.low.light' size='xs'>
                {label}
              </Typography>
              <Typography color='neutralColor.low.light' size='xxs'>
                {description}
              </Typography>
            </div>
            {!lastDivider && <hr className='hst-step-divider' style={{ marginLeft: negativeMargins[index] }} />}
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

      .hst-step-divider {
        flex-grow: 1;
        border-color: blue;
        height: 1px;
        margin-top: 14px;
      }
    `;
  })
);

export default nestedComponent(StepperWrapper, {
  Stepper,
  Step
});
