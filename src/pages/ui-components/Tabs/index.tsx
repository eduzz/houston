import * as React from 'react';

import styled, { breakpoints, css, cx, StyledProp } from '@eduzz/houston-styles';
import Collapse from '@eduzz/houston-ui/Collapse';
import Select from '@eduzz/houston-ui/Forms/Select';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import useMediaQuery from '../hooks/useMediaQuery';
import IconButton from '../IconButton';
import nestedComponent from '../utils/nestedComponent';
import { ChevronLeft, ChevronRight } from './Icons';
import Tab from './Tab';
import useCheckDisabledArrows from './useCheckDisabledArrows';
import useTabDragScroller from './useTabDragScroller';
import useTabSteps from './useTabSteps';
import Vertical from './Vertical';

export interface TabsProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
  selectOnMobile?: boolean;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.inline.nano};
`;

const Tabs = ({ children, value, onChange, selectOnMobile, destroyOnClose, mountOnEnter, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const [activeTab, setActiveTab] = React.useState(0);
  const controlled = typeof value !== 'undefined';
  const activeTabValue = controlled ? value : activeTab;

  const [isOverflowed, setIsOverflowed] = React.useState(false);

  const labelsRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);

  const { passRefsToArray, steps, sizes } = useTabSteps('horizontal');
  const { touchStartHandler, touchMoveHandler } = useTabDragScroller(parentRef?.current as HTMLElement);
  const { isDisabledLeftArrow, isDisabledRightArrow, handleScrollArrows } = useCheckDisabledArrows(
    parentRef?.current as HTMLDivElement
  );
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  React.useEffect(() => {
    const handleResize = () => {
      const labelsScrollWidth = labelsRef?.current?.scrollWidth as number;
      const labelsWidth = labelsRef?.current?.clientWidth as number;

      labelsScrollWidth > labelsWidth ? setIsOverflowed(true) : setIsOverflowed(false);

      handleScrollArrows();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleScrollArrows]);

  const scrollBy = React.useCallback((position: 'right' | 'left', value: number) => {
    const goToRight = value;
    const goToLeft = -value;

    parentRef.current?.scrollBy({
      left: position === 'right' ? goToRight : goToLeft,
      behavior: 'smooth'
    });
  }, []);

  const handleScroll = React.useCallback(
    (position: 'right' | 'left') => () => {
      const HOWMANYTABSTOSCROLL = 2;
      const sizesSum = sizes.reduce((sum, value) => sum + value, 0);
      const avgTabSize = sizesSum / sizes.length;
      scrollBy(position, avgTabSize * HOWMANYTABSTOSCROLL);
    },
    [scrollBy, sizes]
  );

  const handleLastVisibleTabAdjustment = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const eventTarget = e.target as HTMLDivElement;
      const clickedDivRect = eventTarget.getBoundingClientRect();
      const parentDivRect = parentRef?.current?.getBoundingClientRect() as DOMRect;

      const ONE_PX = 1;

      if (clickedDivRect.right > parentDivRect.right) {
        const diff = clickedDivRect.right - parentDivRect.right;
        scrollBy('right', diff + ONE_PX);
      }

      if (parentDivRect.left > clickedDivRect.left) {
        const diff = parentDivRect.left - clickedDivRect.left;
        scrollBy('left', diff + ONE_PX);
      }
    },
    [scrollBy]
  );

  const handleTabClick = React.useCallback(
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
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
          value={activeTabValue}
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
        {tabs?.map((tab, index) => (
          <Collapse
            key={index}
            timeout={0}
            visibled={activeTabValue === index}
            destroyOnClose={destroyOnClose}
            mountOnEnter={mountOnEnter}
          >
            <div>{tab.props.children}</div>
          </Collapse>
        ))}
      </>
    );
  }

  return (
    <>
      <div {...rest}>
        {isOverflowed && !isMobile && (
          <IconButton
            disabled={isDisabledLeftArrow}
            className='hst-tabs__scrollButton'
            size='md'
            onClick={handleScroll('left')}
          >
            <ChevronLeft />
          </IconButton>
        )}

        <div
          ref={parentRef}
          className='hst-tabs__parent'
          {...(!isMobile && { onScroll: handleScrollArrows })}
          {...(isMobile && { onTouchStart: touchStartHandler, onTouchMove: touchMoveHandler })}
        >
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
              width: sizes[activeTabValue],
              left: steps[activeTabValue]
            }}
          />
        </div>

        {isOverflowed && !isMobile && (
          <IconButton
            disabled={isDisabledRightArrow}
            className='hst-tabs__scrollButton'
            size='md'
            onClick={handleScroll('right')}
          >
            <ChevronRight />
          </IconButton>
        )}
      </div>

      {tabs?.map((tab, index) => (
        <Collapse
          key={index}
          timeout={0}
          visibled={activeTabValue === index}
          destroyOnClose={destroyOnClose}
          mountOnEnter={mountOnEnter}
        >
          <div>{tab.props.children}</div>
        </Collapse>
      ))}
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
        height: ${theme.border.width.sm};
        background-color: ${theme.brandColor.primary.pure};
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
        cursor: pointer;

        > svg {
          pointer-events: none;
        }

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
