import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../hooks/useChildrenProps';
import Tab from './Tab';

export interface TabsProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Tabs = ({ children, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const tabsRefs = React.useRef<any>([]);

  const [steps, setSteps] = React.useState<number[]>([]);
  const [widths, setWidths] = React.useState<number[]>([]);

  React.useEffect(() => {
    const widths = tabsRefs.current.map((tab: any) => tab.offsetWidth);
    setWidths(widths);

    let sum = 0;
    const steps = widths.map((width: any) => {
      sum = sum + width;
      return sum;
    });

    setSteps([0, ...steps]);
  }, []);

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = React.useCallback(
    (index: number) => (e: React.MouseEvent<HTMLSpanElement>) => {
      setActiveTab(index);
    },
    []
  );

  return (
    <div {...rest}>
      <div className='__labels'>
        {childrenProps?.map(({ label, icon, disabled }, index) => (
          <div
            ref={el => (tabsRefs.current[index] = el)}
            tabIndex={0}
            className={cx('__tab', { '--disabled': disabled })}
            onClick={handleTabClick(index)}
            key={label}
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
          left: steps[activeTab],
          borderBottom: 'solid'
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

      .__labels {
        display: flex;
        width: 100%;
      }

      .__slider {
        position: absolute;
        transition: all 300ms;
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
