import * as React from 'react';

import ListItemMUI from '@material-ui/core/ListItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import { useListContext } from '../../context';
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

const Items = () => {
  const classes = useStyles();

  const { items, stripedRows } = useListContext();

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
          {left && (
            <Left
              key={`list-item-${index}-left`}
              icon={left.icon}
              image={left.image}
              striped={shouldDisplayStriped(index)}
            />
          )}

          <div className={classes.textContainer}>
            {title && <Title key={`list-item-${index}-title`}>{title.children}</Title>}
            {subtitle && <Subtitle key={`list-item-${index}-subtitle`}>{subtitle.children}</Subtitle>}
          </div>

          {right && (
            <Right key={`list-item-${index}-right`} icon={right.icon} text={right.text} onClick={right.onClick} />
          )}
        </ListItemMUI>
      ))}
    </React.Fragment>
  );
};

export default React.memo(Items);
