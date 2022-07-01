import * as React from 'react';

import ListMUI, { ListProps as ListPropsMUI } from '@mui/material/List';

import { cx } from '@eduzz/houston-styles';
import createUseStyles from '@eduzz/houston-styles/createUseStyles';

import nestedComponent from '../utils/nestedComponent';
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
      backgroundColor: theme.neutralColor.high.pure
    }
  }
}));

const List: React.FC<IListProps> = ({ children, stripedRows, ...props }) => {
  const classes = useStyles();

  return (
    <ListMUI component='ul' {...props} className={cx([classes.root, stripedRows && classes.stripedRows])}>
      {children}
    </ListMUI>
  );
};

export default nestedComponent(React.memo(List), {
  Item,
  Text,
  Left,
  Right
});
