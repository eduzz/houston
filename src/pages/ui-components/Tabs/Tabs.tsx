import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import IconButton from '../IconButton';
import { ChevronLeft, ChevronRight } from './Icons';
import Tab from './Tab';
import useTabSteps from './useTabSteps';

export interface TabsProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SCROLL_MOVEMENT = 300;

const Tabs = ({ children, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const [isOverflowed, setIsOverflowed] = React.useState(false);

  const labelsRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const labelsFullWidth = labelsRef?.current?.scrollWidth as number;
    const parentWidth = labelsRef?.current?.parentElement?.offsetWidth as number;

    if (labelsFullWidth > parentWidth) {
      setIsOverflowed(true);
    }
  }, []);

  const { tabsRefs, steps, widths } = useTabSteps();

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = React.useCallback(
    (index: number) => (e: React.MouseEvent<HTMLSpanElement>) => {
      setActiveTab(index);
    },
    []
  );

  const handleScrollRight = () => {
    parentRef.current?.scrollBy({
      left: SCROLL_MOVEMENT,
      behavior: 'smooth'
    });
  };

  const handleScrollLeft = () => {
    parentRef.current?.scrollBy({
      left: -SCROLL_MOVEMENT,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div {...rest}>
        {isOverflowed && (
          <IconButton className='__scrollButton' size='md' onClick={() => handleScrollLeft()}>
            <ChevronLeft />
          </IconButton>
        )}
        <div ref={parentRef} className='__parent'>
          <div ref={labelsRef} className='__labels'>
            {childrenProps?.map(({ label, icon, disabled }, index) => (
              <div
                ref={el => (tabsRefs.current[index] = el)}
                tabIndex={0}
                className={cx('__tab', { '--disabled': disabled })}
                onClick={handleTabClick(index)}
                key={label + index}
              >
                {icon && <span>{icon}</span>}
                {label && <span>{label}</span>}
              </div>
            ))}
          </div>
          <span
            className='__slider'
            style={{
              width: widths[activeTab],
              left: steps[activeTab]
            }}
          />
        </div>

        {isOverflowed && (
          <IconButton className='__scrollButton' size='md' onClick={() => handleScrollRight()}>
            <ChevronRight />
          </IconButton>
        )}
      </div>
      <div className='__content'>{tabs[activeTab].props.children}</div>
    </>
  );
};

const NEGATIVE_MARGIN_IN_PX = -2;

export default React.memo(
  styled(Tabs, { label: 'houston-tabs' })(({ theme }) => {
    return css`
      display: flex;

      .__parent {
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
        margin-left: ${NEGATIVE_MARGIN_IN_PX}px;
      }

      .__labels {
        display: flex;
        width: 100%;
        position: relative;
      }

      .__scrollButton {
        padding: ${theme.spacing.nano};
        margin: ${theme.spacing.nano};
      }

      .__slider {
        position: absolute;
        transition: all 0.3s;
        border-bottom: solid;
        border-color: ${theme.brandColor.primary.pure};
        border-width: ${theme.border.width.sm};
      }

      .__tab {
        display: flex;
        align-items: center;
        line-height: 0;
        gap: ${theme.spacing.inline.nano};
        padding: ${theme.spacing.squish.xxs};

        border-bottom: ${theme.border.width.xs} solid rgba(0, 0, 0, 0.12);
        border-top: ${theme.border.width.sm} solid transparent;
        border-left: ${theme.border.width.sm} solid transparent;
        border-right: ${theme.border.width.sm} solid transparent;

        margin-right: ${NEGATIVE_MARGIN_IN_PX}px;

        border-radius: ${theme.border.radius.xs} ${theme.border.radius.xs} 0 0;
        transition-duration: 0.5s;
        transition-property: background-color, color;

        :hover {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        }

        :focus {
          border-top: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
          border-left: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
          border-right: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
        }

        &.--disabled {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
          opacity: ${theme.opacity.level[6]};
          pointer-events: none;
        }
      }
    `;
  })
);
