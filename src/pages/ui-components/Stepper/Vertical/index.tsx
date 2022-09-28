import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import Collapse from '@eduzz/houston-ui/Collapse';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { Icons, Colors, decideStatus } from '../';
import { useChildrenProps, useChildrenComponent } from '../../hooks/useChildrenProps';
import Step from '../Step';

export interface StepperProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  current: number;
  onPrev?: (current: number) => void;
  onNext?: (current: number) => void;
  disableClick?: boolean;
  mountOnEnter?: boolean;
  destroyOnClose?: boolean;
}

const Vertical = ({
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

  const handlePrev = React.useCallback(
    (current: number) => () => {
      onPrev && onPrev(current);
    },
    [onPrev]
  );

  const handleNext = React.useCallback(
    (current: number) => () => {
      onNext && onNext(current);
    },
    [onNext]
  );

  return (
    <div {...rest}>
      <div className='hst-step-vertical-steps'>
        {childrenProps?.map(({ label, description, error }, index) => {
          const isFinished = index < currentProp;
          const isUnfinished = index > currentProp;
          const isCurrent = index === currentProp;
          const isError = error ?? false;
          const status = decideStatus(isFinished, isUnfinished, isCurrent, isError);

          return (
            <React.Fragment key={label}>
              <div
                onClick={isFinished ? handlePrev(index) : handleNext(index)}
                className={cx('hst-step-vertical', { '--hst-step-vertical-disableclick': isCurrent || disableClick })}
              >
                <IconButton size='md' fill className='hst-step-iconbutton'>
                  {Icons(index)[status]}
                </IconButton>
                <div>
                  <Typography size='xs' color={Colors[status]} lineHeight='default' className='hst-step-label'>
                    {label}
                  </Typography>
                  {description && (
                    <Typography size='xxs' color={Colors[status]} lineHeight='default'>
                      {description}
                    </Typography>
                  )}
                </div>
              </div>
              <hr className={cx('hst-step-vertical-divider', { 'hst-step-vertical-divider-finished': isFinished })} />
            </React.Fragment>
          );
        })}
      </div>
      <div className='hst-step-vertical-content'>
        {steps?.map((step, index) => (
          <Collapse
            id={step.props.id}
            key={index}
            timeout={10}
            visibled={currentProp === index}
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

        hr:last-child {
          display: none;
        }

        .hst-step-vertical {
          display: flex;
          align-items: center;
          gap: ${theme.spacing.inline.nano};
          cursor: pointer;

          &.--hst-step-vertical-disableclick {
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

          &.hst-step-vertical-divider-finished {
            border-color: ${theme.brandColor.primary.pure};
          }
        }
      }
    `;
  })
);
