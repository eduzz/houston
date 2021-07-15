import * as React from 'react';

import ListItemMUI from '@material-ui/core/ListItem';
import clsx from 'clsx';

import createUseStyles from '../../../styles/createUseStyles';
import { IListItem } from '../../interfaces';
import Left from '../Left';
import Right from '../Right';
import Subtitle from '../Subtitle';
import Title from '../Title';

const useStyles = createUseStyles(theme => ({
  root: {
    padding: '12px 16px',
    borderRadius: 4
  },
  striped: {
    backgroundColor: theme.colors.grey[200]
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    }
  }
}));

interface IProps {
  items?: IListItem[];
  stripedRows?: boolean;
}

const Items: React.FC<IProps> = ({ items, stripedRows }) => {
  const classes = useStyles();

  const shouldDisplayStriped = React.useCallback(
    (position: number) => position % 2 !== 0 && stripedRows,
    [stripedRows]
  );

  return (
    <>
      {items.map(({ left, title, subtitle, right }, index) => (
        <ListItemMUI
          key={`list-item-${index}`}
          className={clsx([classes.root, shouldDisplayStriped(index) && classes.striped])}
        >
          <div className={classes.textContainer}>
            {left && <Left icon={left.icon} image={left.image} striped={shouldDisplayStriped(index)} />}

            <div className='container'>
              {title && <Title>{title.children}</Title>}
              {subtitle && <Subtitle>{subtitle.children}</Subtitle>}
            </div>
          </div>

          {right && <Right icon={right.icon} text={right.text} onClick={right.onClick} />}
        </ListItemMUI>
      ))}
    </>
  );
};

export default React.memo(Items);
