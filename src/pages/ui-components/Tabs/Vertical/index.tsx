import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';
import Collapse from '@eduzz/houston-ui/Collapse';

import { useChildrenProps, useChildrenComponent } from '../../hooks/useChildrenProps';
import Tab from '../Tab';
import useTabSteps from '../useTabSteps';

export interface TabsProps extends StyledProp, Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  value?: number;
  onChange?: (value: number) => void;
  destroyOnClose?: boolean;
  mountOnEnter?: boolean;
}

const MIN_HEIGHT_IN_PX = 48;
const MIN_WIDTH_IN_PX = 80;
const NEGATIVE_SPACING_IN_PX = -2;

const Tabs = ({ children, value, onChange, destroyOnClose, mountOnEnter, ...rest }: TabsProps) => {
  const childrenProps = useChildrenProps(children, Tab);
  const tabs = useChildrenComponent(children, Tab);

  const { passRefsToArray, steps, sizes } = useTabSteps('vertical');

  const [activeTab, setActiveTab] = React.useState(value ?? 0);
  const controlled = typeof value !== 'undefined';
  const activeTabValue = controlled ? value : activeTab;

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
      <div ref={labelsRef} className='hst-tabs-vertical-labels'>
        {childrenProps?.map(({ label, icon, disabled }, index) => (
          <div
            role='button'
            ref={passRefsToArray(index)}
            tabIndex={0}
            className={cx('hst-tabs-vertical-tab', { 'hst-tabs-vertical-disabled': disabled })}
            onClick={handleTabClick(index)}
            key={label}
            aria-disabled={disabled}
          >
            {icon}
            {label}
          </div>
        ))}
        <span
          className='hst-tabs-vertical-slider'
          style={{
            height: sizes[activeTabValue],
            top: steps[activeTabValue],
            left: labelsRef.current?.getBoundingClientRect().width
          }}
        />
      </div>

      <div className='hst-tabs-vertical-content'>
        {tabs?.map((tab, index) => (
          <Collapse
            key={index}
            timeout={0}
            visibled={activeTabValue === index}
            destroyOnClose={destroyOnClose}
            mountOnEnter={mountOnEnter}
          >
            {tab.props.children}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

/**
 * @deprecated Use Tabs from Antd
 * https://ant.design/components/tabs/
 */
export default React.memo(
  styled(Tabs, { label: 'hst-tabs-vertical' })(({ theme }) => {
    return css`
      display: flex;

      .hst-tabs-vertical-labels {
        display: flex;
        margin-right: ${theme.spacing.quarck};
        flex-direction: column;
        position: relative;
      }

      .hst-tabs-vertical-slider {
        position: absolute;
        transition: all 0.2s;
        width: ${theme.border.width.sm};
        background-color: ${theme.brandColor.primary.pure};
      }

      .hst-tabs-vertical-tab {
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
        transition-duration: 0.5s;
        transition-property: background-color, color;
        margin-right: ${NEGATIVE_SPACING_IN_PX}px;
        cursor: pointer;

        :hover {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        }

        :focus {
          outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
          outline-offset: ${NEGATIVE_SPACING_IN_PX}px;
        }

        &.hst-tabs-vertical-disabled {
          background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
          opacity: ${theme.opacity.level[6]};
          pointer-events: none;
        }
      }
    `;
  })
);
