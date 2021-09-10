import * as React from 'react';

import ListMUI, { ListProps as ListPropsMUI } from '@material-ui/core/List';

import nestedComponent from '../Helpers/nestedComponent';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

type ListProps = 'id' | 'className' | 'children';

export interface IListProps extends Pick<ListPropsMUI, ListProps> {
  stripedRows?: boolean;
}

const useStyles = createUseStyles(() => ({
  root: {
    '& > li': {
      padding: '12px 16px',
      borderRadius: 4
    },
    '& > li > div': {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%'
    },
    '& > li > div > .list-item-text': {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    }
  }
}));

const List: React.FC<IListProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <ListMUI component='ul' {...props} className={classes.root}>
      {children}
    </ListMUI>
  );
};

export default nestedComponent(withHoustonTheme(React.memo(List)), {
  Item,
  Text,
  Left,
  Right
});
