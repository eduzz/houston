import * as React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import MUITab from '@material-ui/core/Tab';
import MUITabs from '@material-ui/core/Tabs';

import { getReactChildrenProps } from '../Helpers/functions';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import Content, { ITabsContentProps } from './Content';

export interface ITabsProps {
  value?: number;
  onChange?: (position: number) => any;
  children?: any;
}

const useStyles = makeStyles(theme => ({
  containerPadding: {
    padding: theme.spacing(2)
  }
}));

type TabsComponent = React.NamedExoticComponent<ITabsProps> & {
  Content?: typeof Content;
};

let incremeter = 0;

const Tabs: TabsComponent = React.memo<ITabsProps>(props => {
  const { value, onChange, children } = props;

  const classes = useStyles(props);
  const [position, setPosition] = React.useState(0);

  const controlled = value !== undefined;
  const currentValue = controlled ? value : position;

  const handleChange = React.useCallback(
    (e: React.SyntheticEvent, value: number) => {
      onChange && onChange(value);
      if (controlled) return;

      setPosition(value);
    },
    [controlled, onChange]
  );

  const tabs = React.useMemo(() => {
    return getReactChildrenProps<ITabsContentProps>(children, Content).map(props => ({
      ...props,
      id: `tab-${incremeter++}`
    }));
  }, [children]);

  return (
    <WrapperTheme>
      <div>
        <MUITabs
          scrollButtons='auto'
          variant='scrollable'
          textColor='primary'
          indicatorColor='primary'
          value={currentValue}
          onChange={handleChange}
        >
          {tabs?.map(tab => (
            <MUITab disableRipple key={tab.id} icon={tab.icon as any} label={tab.label} disabled={tab.disabled} />
          ))}
        </MUITabs>
        {tabs?.map((tab, index) => (
          <div
            className={!tab.disablePadding ? classes.containerPadding : null}
            hidden={index !== currentValue}
            key={tab.id}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </WrapperTheme>
  );
});

Tabs.Content = Content;

export default Tabs;
