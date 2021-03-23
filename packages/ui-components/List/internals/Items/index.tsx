import * as React from 'react';

import ListItemMUI from '@material-ui/core/ListItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { IListItem } from '../../interfaces';
import Left from '../Left';
import Right from '../Right';
import Subtitle from '../Subtitle';
import Title from '../Title';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: '12px 16px',
      borderRadius: 4,
      alignItems: 'flex-start'
    },
    striped: {
      backgroundColor: theme.palette.grey[200]
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center'
    }
  })
);

interface IProps {
  items?: IListItem[];
  stripedRows?: boolean;
}

const Items = ({ items, stripedRows }: IProps) => {
  const classes = useStyles();

  const shouldDisplayStriped = React.useCallback(
    (position: number) => {
      return position % 2 !== 0 && stripedRows;
    },
    [stripedRows]
  );

  return (
    <React.Fragment>
      {items.map(({ left, title, subtitle, right }, index) => (
        <ListItemMUI
          key={`list-item-${index}`}
          className={clsx([classes.root, shouldDisplayStriped(index) && classes.striped])}
        >
          {left && <Left icon={left.icon} image={left.image} striped={shouldDisplayStriped(index)} />}

          <div className={classes.textContainer}>
            {title && <Title>{title.children}</Title>}
            {subtitle && <Subtitle>{subtitle.children}</Subtitle>}
          </div>

          {right && <Right icon={right.icon} text={right.text} onClick={right.onClick} />}
        </ListItemMUI>
      ))}
    </React.Fragment>
  );
};

export default React.memo(Items);
