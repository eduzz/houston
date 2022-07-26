import * as React from 'react';

import styled, { StyledProp } from '@eduzz/houston-styles';

import { useChildrenProps } from '../hooks/useChildrenProps';
import { getReactChildrenComponent } from '../utils/children';
import Tab from './Tab';

export interface TabsProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Tabs = ({ children, ...rest }: TabsProps) => {
  const propsChildren = useChildrenProps(children, Tab);
  const labels = propsChildren.map(({ label }) => label);

  const tabs = getReactChildrenComponent(children, Tab);

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
        {labels?.map((label, index) => (
          <div onClick={handleTabClick(index)} key={label}>
            {label}
          </div>
        ))}
      </div>
      <div className='__content'>{tabs[activeTab].props.children}</div>
    </div>
  );
};

const TabsWrapper = React.memo(styled(Tabs, { label: 'houston-tabs' })`
  .__labels {
    display: flex;
    width: 100%;
    gap: 1rem;
  }

  .__content {
  }
`);

export default TabsWrapper;
