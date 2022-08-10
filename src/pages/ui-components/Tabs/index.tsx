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
}

const SCROLL_MOVEMENT = 300;

const Tabs = ({ children, value, onChange, ...rest }: TabsProps) => {
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

  const handleTabClick = React.useCallback(
    (index: number) => () => {
      onChange && onChange(index);
      setActiveTab(index);
    },
    [onChange]
  );

  const handleSelectChange = React.useCallback(
    (index: number) => {
      onChange && onChange(index);
      setActiveTab(index);
    },
    [onChange]
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

  if (isMobile) {
    return (
      <div>
        <Select onChange={handleSelectChange} value={value ?? activeTab}>
          {childrenProps?.map(({ label, disabled }, index) => (
            <Select.Option value={index} key={label} disabled={disabled} aria-disabled={disabled}>
              {label}
            </Select.Option>
          ))}
        </Select>
        <div>{tabs[value ?? activeTab].props.children}</div>
      </div>
    );
  }

  return (
    <>
      <div {...rest}>
        {isOverflowed && (
          <IconButton className='hst-tabs__scrollButton' size='md' onClick={handleScrollLeft}>
            <ChevronLeft />
          </IconButton>
        )}
        <div ref={parentRef} className='hst-tabs__parent'>
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

        {isOverflowed && (
          <IconButton className='hst-tabs__scrollButton' size='md' onClick={handleScrollRight}>
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
        padding-bottom: ${theme.spacing.nano};
        margin-bottom: ${theme.spacing.nano};
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
        cursor: pointer;

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
