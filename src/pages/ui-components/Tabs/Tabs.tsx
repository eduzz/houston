import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import Tab from './Tab';
import useTabSteps from './useTabSteps';

export interface TabsProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Tabs = ({ children, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const [isOverflowed, setIsOverflowed] = React.useState(false);

  const labelsRef = React.useRef<HTMLDivElement>(null);

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

  return (
    <div {...rest}>
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
        {isOverflowed && <span className='__scrollButton'>OPLE</span>}
      </div>
      <span
        className='__slider'
        style={{
          width: widths[activeTab],
          left: steps[activeTab]
        }}
      />
      <div className='__content'>{tabs[activeTab].props.children}</div>
    </div>
  );
};

export default React.memo(
  styled(Tabs, { label: 'houston-tabs' })(({ theme }) => {
    return css`
      position: relative;
      overflow-x: clip;

      .__labels {
        display: flex;
        width: 100%;
        position: relative;
      }

      .__scrollButton {
        position: absolute;
        width: 30px;
        top: 50%;
        transform: translateY(-50%);
        left: 90%;
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
        border-bottom: solid;
        border-width: ${theme.border.width.xs};
        border-color: rgba(0, 0, 0, 0.12);
        border-radius: ${theme.border.radius.xs} ${theme.border.radius.xs} 0 0;
        transition-duration: 0.5s;
        transition-property: background-color, color;

        /* :first-of-type {
          outline-offset: -2px;
        } */

        :hover {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        }

        &.--active {
          border-color: ${theme.brandColor.primary.pure};
          border-width: ${theme.border.width.sm};
        }

        :focus {
          outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
        }

        &.--disabled {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
          opacity: ${theme.opacity.level[6]};
          pointer-events: none;
        }
      }

      .__content {
      }
    `;
  })
);
