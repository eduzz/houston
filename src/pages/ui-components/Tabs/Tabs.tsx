import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import Typography from '@eduzz/houston-ui/Typography';

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

  const { tabsRefs, steps, widths } = useTabSteps();

  const [activeTab, setActiveTab] = React.useState(0);
  const [isOverflowed, setIsOverflowed] = React.useState(false);

  const labelsRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  console.log(labelsRef, 'asasas');
  React.useEffect(() => {
    const labelsFullWidth = labelsRef?.current?.scrollWidth as number;
    const mainWidth = mainRef?.current?.parentElement?.offsetWidth as number;

    if (labelsFullWidth > mainWidth) {
      setIsOverflowed(true);
    }
  }, []);

  const handleTabClick = React.useCallback(
    (index: number) => () => {
      setActiveTab(index);
    },
    []
  );

  const handleScrollRight = React.useCallback(() => {
    parentRef.current?.scrollBy({
      left: SCROLL_MOVEMENT,
      behavior: 'smooth'
    });
  }, []);

  const handleScrollLeft = React.useCallback(() => {
    parentRef.current?.scrollBy({
      left: -SCROLL_MOVEMENT,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <div ref={mainRef} {...rest}>
        {isOverflowed && (
          <IconButton className='__scrollButton' size='md' onClick={handleScrollLeft}>
            <ChevronLeft />
          </IconButton>
        )}
        <div ref={parentRef} className='__parent'>
          <div ref={labelsRef} className='__labels'>
            {childrenProps?.map(({ label, icon, disabled }, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  ref={el => (tabsRefs.current[index] = el)}
                  tabIndex={0}
                  className={cx('__tab', { '--disabled': disabled })}
                  onClick={handleTabClick(index)}
                  key={label + index}
                >
                  {icon && <span>{icon}</span>}
                  {label && <span className='__label'>{label}</span>}
                </div>
              );
            })}
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
          <IconButton className='__scrollButton' size='md' onClick={handleScrollRight}>
            <ChevronRight />
          </IconButton>
        )}
      </div>
      <div>{tabs[activeTab].props.children}</div>
    </>
  );
};

const NEGATIVE_SPACING_IN_PX = -2;
const MIN_HEIGHT_IN_PX = 48;

export default React.memo(
  styled(Tabs, { label: 'houston-tabs' })(({ theme }) => {
    return css`
      display: flex;

      .__parent {
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
        padding-bottom: ${theme.spacing.nano};
        margin-bottom: ${theme.spacing.nano};
        cursor: pointer;
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
        transition: all 0.2s;
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
        min-height: ${MIN_HEIGHT_IN_PX}px;

        border-bottom: ${theme.border.width.xs} solid rgba(0, 0, 0, 0.12);
        border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;
        transition-duration: 0.5s;
        transition-property: background-color, color;

        margin-bottom: ${NEGATIVE_SPACING_IN_PX}px;

        :hover {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        }

        :focus {
          outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
          outline-offset: ${NEGATIVE_SPACING_IN_PX}px;
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
