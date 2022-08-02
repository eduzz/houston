import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps, useChildrenComponent } from '../../hooks/useChildrenProps';
import nestedComponent from '../../utils/nestedComponent';
import Tab from '../Tab';
import useTabSteps from '../useTabSteps';

export interface TabsProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
}

const Tabs = ({ children, value, onChange, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const { passRefsToArray, steps, sizes } = useTabSteps('vertical');

  const [activeTab, setActiveTab] = React.useState(value ?? 0);

  const labelsRef = React.useRef<HTMLDivElement>(null);

  const handleTabClick = React.useCallback(
    (index: number) => () => {
      onChange && onChange(index);
      setActiveTab(index);
    },
    [onChange]
  );

  return (
    <div {...rest}>
      <div ref={labelsRef} className='hst-tabs-vertical__labels'>
        {childrenProps?.map(({ label, icon, disabled }, index) => (
          <div
            role='button'
            ref={passRefsToArray(index)}
            tabIndex={0}
            className={cx('hst-tabs-vertical__tab', { '--hst-tabs-vertical-disabled': disabled })}
            onClick={handleTabClick(index)}
            key={label}
            aria-disabled={disabled}
          >
            {icon}
            {label}
          </div>
        ))}
        <span
          className='hst-tabs-vertical__slider'
          style={{
            height: sizes[value ?? activeTab],
            top: steps[value ?? activeTab],
            left: labelsRef.current?.getBoundingClientRect().width
          }}
        />
      </div>
      <div className='hst-tabs-vertical-content'>{tabs[value ?? activeTab].props.children}</div>
    </div>
  );
};

const MIN_HEIGHT_IN_PX = 48;
const MIN_WIDTH_IN_PX = 80;

const TabsVerticalWrapper = React.memo(
  styled(Tabs, { label: 'hst-tabs-vertical' })(({ theme }) => {
    return css`
      display: flex;

      .hst-tabs-vertical__labels {
        display: flex;
        margin-right: ${theme.spacing.xxxs};
        flex-direction: column;
        position: relative;
      }

      .hst-tabs-vertical__scrollButton {
        padding: ${theme.spacing.nano};
        margin: ${theme.spacing.nano};
      }

      .hst-tabs-vertical__slider {
        position: absolute;
        transition: all 0.2s;
        border: solid;
        border-color: ${theme.brandColor.primary.pure};
        border-width: ${theme.border.width.xs};
      }

      .hst-tabs-vertical__tab {
        display: flex;
        align-items: center;
        line-height: 0;
        gap: ${theme.spacing.inline.nano};
        padding: ${theme.spacing.squish.xxs};
        min-height: ${theme.pxToRem(MIN_HEIGHT_IN_PX)}rem;
        min-width: ${theme.pxToRem(MIN_WIDTH_IN_PX)}rem;
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.base};
        font-weight: ${theme.font.weight.semibold};
        line-height: ${theme.line.height.default};
        border-right: ${theme.border.width.xs} solid rgba(0, 0, 0, 0.12);
        border-radius: ${theme.border.radius.xs} 0 0 ${theme.border.radius.xs};
        transition-duration: 0.5s;
        transition-property: background-color, color;
        cursor: pointer;

        :hover {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        }

        :focus {
          outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
        }

        &.--hst-tabs-vertical-disabled {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
          opacity: ${theme.opacity.level[6]};
          pointer-events: none;
        }
      }
    `;
  })
);

export default nestedComponent(React.memo(TabsVerticalWrapper), {
  Tab
});
