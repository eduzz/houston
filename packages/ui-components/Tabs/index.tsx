import * as React from 'react';

import MUITab from '@material-ui/core/Tab';
import MUITabs from '@material-ui/core/Tabs';

import { getReactChildrenProps } from '../Helpers/functions';
import Content, { ITabsContentProps } from './Content';

export interface ITabsProps {
  value?: number;
  onChange?: (position: number) => any;
  children?: any;
}

type TabsComponent = React.NamedExoticComponent<ITabsProps> & {
  Content?: typeof Content;
};

const Tabs: TabsComponent = React.memo<ITabsProps>(props => {
  const { value, onChange, children } = props;
  const [position, setPosition] = React.useState(0);

  const controlled = value !== undefined;

  const handleChange = React.useCallback(
    (e: React.SyntheticEvent, value: number) => {
      onChange && onChange(value);
      if (controlled) return;

      setPosition(value);
    },
    [controlled, onChange]
  );

  const tabs = React.useMemo(() => getReactChildrenProps<ITabsContentProps>(children, Content), [children]);

  return (
    <MUITabs indicatorColor='primary' value={controlled ? value : position} onChange={handleChange}>
      {tabs?.map((tab, index) => (
        <MUITab disableRipple key={index} label={tab.label} />
      ))}
    </MUITabs>
  );
});

Tabs.Content = Content;

export default Tabs;
