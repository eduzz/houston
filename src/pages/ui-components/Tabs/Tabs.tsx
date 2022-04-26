import * as React from 'react';

import { cx } from '@emotion/css';
import MUITabs from '@mui/material/Tabs';

import createUseStyles from '@eduzz/houston-style/createUseStyles';

import { ITabsContentProps } from './Content';
import TabsContext, { ITabsContext } from './context';

export interface ITabsProps {
  value?: number;
  onChange?: (position: number) => void;
  children?: any;
}

interface ITabsContentPropsAndKey extends ITabsContentProps {
  key: string;
}

const useStyles = createUseStyles(theme => ({
  containerPadding: {
    padding: theme.spacing.nano
  }
}));

let tabsKeyIncrementer = 0;

const Tabs: React.FC<ITabsProps> = ({ value, onChange, children }) => {
  const classes = useStyles();

  const [position, setPosition] = React.useState(0);
  const [tabs, setTabs] = React.useState<ITabsContentPropsAndKey[]>(() => []);

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

  const registerTabs = React.useCallback((tab: Omit<ITabsContentProps, 'key'>) => {
    const key = `tab-${++tabsKeyIncrementer}`;
    setTabs(tabs => [...tabs, { key, ...tab }]);
    return () => setTabs(tabs => tabs.filter(t => t.key !== key));
  }, []);

  const contextValue = React.useMemo<ITabsContext>(() => ({ tabs, registerTabs }), [tabs, registerTabs]);

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
