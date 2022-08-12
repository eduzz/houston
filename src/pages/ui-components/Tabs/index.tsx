import * as React from 'react';

import styled, { breakpoints, css, cx, StyledProp } from '@eduzz/houston-styles';
import Select from '@eduzz/houston-ui/Forms/Select';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import useMediaQuery from '../hooks/useMediaQuery';
import IconButton from '../IconButton';
import nestedComponent from '../utils/nestedComponent';
import { ChevronLeft, ChevronRight } from './Icons';
import Tab from './Tab';
import useTabSteps from './useTabSteps';
import Vertical from './Vertical';

export interface TabsProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
  selectOnMobile?: boolean;
}

const SCROLL_MOVEMENT = 270;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.inline.nano};
`;

const Tabs = ({ children, value, onChange, selectOnMobile, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const { passRefsToArray, steps, sizes } = useTabSteps('horizontal');

  const [activeTab, setActiveTab] = React.useState(value ?? 0);
  const [isOverflowed, setIsOverflowed] = React.useState(false);

  const labelsRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery(breakpoints.down('sm'));

  React.useEffect(() => {
    const handleResize = () => {
      const labelsScrollWidth = labelsRef?.current?.scrollWidth as number;
      const labelsWidth = labelsRef?.current?.clientWidth as number;

      labelsScrollWidth > labelsWidth ? setIsOverflowed(true) : setIsOverflowed(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollBy = React.useCallback((position: 'right' | 'left', value?: number) => {
    const goToRight = value ?? SCROLL_MOVEMENT;
    const goToLeft = (value && -value) ?? -SCROLL_MOVEMENT;

    parentRef.current?.scrollBy({
      left: position === 'right' ? goToRight : goToLeft,
      behavior: 'smooth'
    });
  }, []);

  const handleScroll = React.useCallback(
    (position: 'right' | 'left') => () => {
      scrollBy(position);
    },
    [scrollBy]
  );

  const handleLastVisibleTabAdjustment = React.useCallback(
    (e: any) => {
      const ONE_PX = 1;
      const parentTabRightCoord = parentRef.current?.getBoundingClientRect().right as number;
      const clickedTabRightCoord = e.target.getBoundingClientRect().right;

      if (clickedTabRightCoord > parentTabRightCoord) {
        const diff = clickedTabRightCoord - parentTabRightCoord;
        scrollBy('right', diff + ONE_PX);
      }

      const parentTabLeftCoord = parentRef.current?.getBoundingClientRect().left as number;
      const clickedTabLeftCoord = e.target.getBoundingClientRect().left;

      if (parentTabLeftCoord > clickedTabLeftCoord) {
        const diff = parentTabLeftCoord - clickedTabLeftCoord;
        scrollBy('left', diff + ONE_PX);
      }
    },
    [scrollBy]
  );

  const handleTabClick = React.useCallback(
    (index: number) => (e: any) => {
      onChange && onChange(index);
      setActiveTab(index);

      handleLastVisibleTabAdjustment(e);
    },
    [onChange, handleLastVisibleTabAdjustment]
  );

  const handleSelectChange = React.useCallback(
    (index: number) => {
      onChange && onChange(index);
      setActiveTab(index);
    },
    [onChange]
  );

  const ele = parentRef?.current as HTMLElement;

  const [scrolledPosition, setScrolledPosition] = React.useState({ scrollLeft: 0, x: 0 });

  const touchStartHandler = (e: React.TouchEvent) => {
    const position = {
      scrollLeft: ele.scrollLeft,
      x: e.touches[0].clientX
    };

    setScrolledPosition(position);

    window.addEventListener('touchmove', touchMoveHandler as any);
    window.addEventListener('touchend', touchEndHandler);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(e, 'eventHandler');
    const { scrollLeft, x } = scrolledPosition;
    const howMuchMoved = e.touches[0].clientX - x;
    ele.scrollLeft = scrollLeft - howMuchMoved;
  };

  const touchEndHandler = () => {
    window.removeEventListener('touchmove', touchMoveHandler as any);
    window.removeEventListener('touchend', touchEndHandler);
  };

  if (isMobile && selectOnMobile) {
    return (
      <>
        <Select
          renderValue={value => (
            <StyledOption>
              {tabs[value].props.icon}
              {tabs[value].props.label}
            </StyledOption>
          )}
          onChange={handleSelectChange}
          value={value ?? activeTab}
        >
          {childrenProps?.map(({ icon, label, disabled }, index) => (
            <Select.Option value={index} key={label} disabled={disabled} aria-disabled={disabled}>
              <StyledOption>
                {icon}
                {label}
              </StyledOption>
            </Select.Option>
          ))}
        </Select>
        <div>{tabs[value ?? activeTab].props.children}</div>
      </>
    );
  }

  return (
    <>
      <div {...rest}>
        {isOverflowed && !isMobile && (
          <IconButton className='hst-tabs__scrollButton' size='md' onClick={handleScroll('left')}>
            <ChevronLeft />
          </IconButton>
        )}
        <div ref={parentRef} className='hst-tabs__parent' onTouchStart={touchStartHandler}>
          <div ref={labelsRef} className='hst-tabs__labels'>
            {childrenProps?.map(({ label, icon, disabled }, index) => (
              <div
                role='button'
                ref={passRefsToArray(index)}
                tabIndex={0}
                className={cx('hst-tabs__tab', { '--hst_tabs-disabled': disabled })}
                onClick={handleTabClick(index)}
                key={label}
                aria-disabled={disabled}
              >
                {icon}
                {label}
              </div>
            ))}
          </div>
          <span
            className='hst-tabs__slider'
            style={{
              width: sizes[value ?? activeTab],
              left: steps[value ?? activeTab]
            }}
          />
        </div>

        {isOverflowed && !isMobile && (
          <IconButton className='hst-tabs__scrollButton' size='md' onClick={handleScroll('right')}>
            <ChevronRight />
          </IconButton>
        )}
      </div>
      <div>{tabs[value ?? activeTab].props.children}</div>
    </>
  );
};

const NEGATIVE_SPACING_IN_PX = -2;
const MIN_HEIGHT_IN_PX = 48;

const TabsWrapper = React.memo(
  styled(Tabs, { label: 'hst-tabs' })(({ theme }) => {
    return css`
      display: flex;

      .hst-tabs__parent {
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
        padding-bottom: ${theme.spacing.quarck};
      }

      .hst-tabs__labels {
        display: flex;
        width: 100%;
        position: relative;
      }

      .hst-tabs__scrollButton {
        padding: ${theme.spacing.nano};
        margin: ${theme.spacing.nano};
      }

      .hst-tabs__slider {
        position: absolute;
        transition: all 0.2s;
        border: solid;
        border-color: ${theme.brandColor.primary.pure};
        border-width: ${theme.border.width.xs};
      }

      .hst-tabs__tab {
        display: flex;
        align-items: center;
        line-height: 0;
        gap: ${theme.spacing.inline.nano};
        padding: ${theme.spacing.squish.xxs};
        min-height: ${theme.pxToRem(MIN_HEIGHT_IN_PX)}rem;
        min-width: fit-content;
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.semibold};
        line-height: ${theme.line.height.default};
        border-bottom: ${theme.border.width.xs} solid rgba(0, 0, 0, 0.12);
        border-radius: ${theme.border.radius.xs} ${theme.border.radius.xs} 0 0;
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

        &.--hst_tabs-disabled {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
          opacity: ${theme.opacity.level[6]};
          pointer-events: none;
        }
      }
    `;
  })
);

export default nestedComponent(TabsWrapper, {
  Tab,
  Vertical
});
