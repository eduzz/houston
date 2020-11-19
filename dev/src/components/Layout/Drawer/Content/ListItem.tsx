import React, { memo, useCallback, useContext, useState } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { darken } from '@material-ui/core/styles/colorManipulator';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tooltip from '@material-ui/core/Tooltip';

import ExpandMoreIcon from 'mdi-react/ExpandMoreIcon';

import { IMenu } from '..';

import { DrawerContext } from '../context';

interface IProps {
  data: IMenu;
  onClick: (menu: IMenu) => void;
}

const useStyle = makeStyles(theme => ({
  item: {
    paddingLeft: 14,
    opacity: 0.8,
    '&.active': {
      opacity: 1,
      background: darken(theme.palette.primary.main, 0.3)
    }
  },
  icon: {
    margin: '0',
    minWidth: 34,
    marginRight: 15,
    fill: theme.palette.primary.contrastText
  },
  text: {
    color: 'inherit'
  },
  expandablePanel: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginLeft: -10,
    boxShadow: 'none',
    margin: 0,
    '&.active': {
      background: darken(theme.palette.primary.main, 0.1)
    }
  },
  expandableTitle: {
    '&:hover': {
      background: darken(theme.palette.primary.main, 0.1)
    }
  },
  expandableDetails: {
    padding: 0
  },
  innerList: {
    padding: 0,
    width: '100%',
    '& > div': {
      paddingLeft: 40
    }
  }
}));

const DrawerListItem = memo((props: IProps) => {
  const classes = useStyle(props);
  const [expanded, setExpanded] = useState(false);
  const context = useContext(DrawerContext);

  const handleClick = useCallback(() => props.onClick(props.data), [props]);
  const handleSubClick = useCallback((menu: IMenu) => props.onClick(menu), [props]);
  const handleExandedClick = useCallback((event: any, expanded: boolean) => setExpanded(expanded), []);

  if (!props.data.submenu || !props.data.submenu.length) {
    return (
      <ListItem button disableGutters className={classes.item} onClick={handleClick}>
        {!!props.data.icon && (
          <Tooltip
            title={props.data.display}
            placement='right'
            arrow
            disableHoverListener={context.isTemporary || context.isFull}
          >
            <ListItemIcon className={classes.icon} classes={{ root: classes.text }}>
              <props.data.icon />
            </ListItemIcon>
          </Tooltip>
        )}
        <ListItemText primary={props.data.display} classes={{ primary: classes.text }} />
      </ListItem>
    );
  }

  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={handleExandedClick}
      className={`${classes.expandablePanel} ${expanded ? 'active' : ''}`}
    >
      <ExpansionPanelSummary
        className={classes.expandableTitle}
        expandIcon={<ExpandMoreIcon className={classes.icon} />}
      >
        {!!props.data.icon && (
          <ListItemIcon className={classes.icon} classes={{ root: classes.text }}>
            <props.data.icon />
          </ListItemIcon>
        )}
        <ListItemText primary={props.data.display} classes={{ primary: classes.text }} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expandableDetails}>
        <List className={classes.innerList}>
          {props.data.submenu.map(sub => (
            <DrawerListItem key={sub.path} data={sub} onClick={handleSubClick} />
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default DrawerListItem;
