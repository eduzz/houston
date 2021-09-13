import * as React from 'react';

import ListMUI, { ListProps as ListPropsMUI } from '@material-ui/core/List';
import clsx from 'clsx';

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

const useStyles = createUseStyles(theme => ({
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
      alignSelf: 'center',
      flex: 1
    }
  },
  stripedRows: {
    '& > li:nth-child(even)': {
      backgroundColor: theme.colors.grey[100]
    }
  }
}));

const List: React.FC<IListProps> = ({ children, stripedRows, ...props }) => {
  const classes = useStyles();

  return (
    <ListMUI component='ul' {...props} className={clsx([classes.root, stripedRows && classes.stripedRows])}>
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
