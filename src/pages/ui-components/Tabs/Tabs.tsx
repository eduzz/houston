import * as React from 'react';

import MUITabs from '@mui/material/Tabs';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import TabsContext, { TabsContextProps } from './context';

export interface TabsProps {
  value?: number;
  onChange?: (position: number) => void;
  children?: any;
}

const useStyles = createUseStyles(theme => ({
  containerPadding: {
    padding: theme.spacing.nano
  }
}));

let tabsKeyIncrementer = 0;

const Tabs = ({ value, onChange, children }: TabsProps) => {
  const classes = useStyles();

  const [position, setPosition] = React.useState(0);
  const [tabs, setTabs] = React.useState<TabsContextProps['tabs']>(() => []);

  const controlled = value !== undefined;
  const currentValue = controlled ? value : position;

  const handleChange = React.useCallback(
    (_: React.SyntheticEvent, value: number) => {
      if (controlled) {
        onChange && onChange(value);
        return;
      }

      setPosition(value);
    },
    [controlled, onChange]
  );

  const registerTabs: TabsContextProps['registerTabs'] = React.useCallback(tab => {
    const key = `tab-${++tabsKeyIncrementer}`;
    setTabs(tabs => [...tabs, { key, ...tab }]);
    return () => setTabs(tabs => tabs.filter(t => t.key !== key));
  }, []);

  const contextValue = React.useMemo<TabsContextProps>(() => ({ tabs, registerTabs }), [tabs, registerTabs]);

  return (
    <TabsContext.Provider value={contextValue}>
      <MUITabs
        scrollButtons='auto'
        variant='scrollable'
        textColor='primary'
        indicatorColor='primary'
        value={currentValue}
        onChange={handleChange}
      >
        {children}
      </MUITabs>

      {tabs?.map(({ id, className, children, disablePadding }, index) => {
        const currentId = id ? id : `content-tab-${index}`;

        return (
          <div
            role='tabpanel'
            id={currentId}
            className={cx(!disablePadding && classes.containerPadding, className)}
            hidden={index !== currentValue}
            key={currentId}
          >
            {children}
          </div>
        );
      })}
    </TabsContext.Provider>
  );
};

export default React.memo(Tabs);
