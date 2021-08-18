import * as React from 'react';

import MUITab from '@material-ui/core/Tab';
import MUITabs from '@material-ui/core/Tabs';

import { getReactChildrenProps } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import Content, { ITabsContentProps } from './Content';

export interface ITabsProps {
  value?: number;
  onChange?: (position: number) => void;
  children?: any;
}

const useStyles = createUseStyles(theme => ({
  containerPadding: {
    padding: theme.spacing(2)
  }
}));

let incremeter = 0;

const Tabs: React.FC<ITabsProps> = ({ value, onChange, children }) => {
  const classes = useStyles();
  const [position, setPosition] = React.useState(0);

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

  const tabs = React.useMemo(() => {
    return getReactChildrenProps<ITabsContentProps>(children, Content).map(props => ({
      ...props,
      id: `tab-${incremeter++}`
    }));
  }, [children]);

  return (
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
          <MUITab
            disableRipple
            key={tab.id}
            icon={tab.icon as any}
            label={tab.label}
            disabled={tab.disabled}
            id={tab.id}
          />
        ))}
      </MUITabs>

      {tabs?.map((tab, index) => (
        <div
          id={`content-tab-${tab.id}`}
          className={!tab.disablePadding ? classes.containerPadding : null}
          hidden={index !== currentValue}
          key={tab.id}
        >
          {tab.children}
        </div>
      ))}
    </div>
  );
};

export default nestedComponent(withHoustonTheme(React.memo(Tabs)), { Content });
