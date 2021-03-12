import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AlertMUI, { AlertProps, Color } from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import Button from '../Button';
import { getReactChildrenProps } from '../Helpers/functions';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import Action, { IAlertActionProps } from './Action';

type AlertPropsExtends = 'id' | 'className' | 'children' | 'severity' | 'onClose' | 'icon';

interface IAlertProps extends Pick<AlertProps, AlertPropsExtends> {
  type?: Color;
  title?: React.ReactNode;
  closable?: boolean;
  multiline?: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    controlButtons: {
      display: 'flex',
      alignItems: 'center',

      '& button': {
        marginLeft: 4
      }
    },

    controlButtonsMultiline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 16,

      '& button': {
        marginLeft: 4
      }
    },

    multilineIcon: {
      alignItems: 'flex-start'
    }
  })
);

type AlertComponent = React.NamedExoticComponent<IAlertProps> & {
  Action?: typeof Action;
};

let alertActionIncrementer = 0;

const Alert: AlertComponent = React.memo(props => {
  const classes = useStyles();

  const [hide, setHide] = React.useState<boolean>(false);

  const { id, className, children, type = 'success', icon, title, onClose, closable, multiline } = props;
  const alertProps = { id, className, severity: type, icon, onClose };

  const handleClickHide = React.useCallback(() => setHide(true), []);

  const actions = React.useMemo(() => {
    return getReactChildrenProps<IAlertActionProps>(children, Action).map(props => ({
      ...props,
      id: `action-${alertActionIncrementer++}`
    }));
  }, [children]);

  const buttonActions = React.useMemo(
    () =>
      actions.map((act, index) => {
        const buttonProps = { ...act };
        delete buttonProps.label;

        return (
          <Button {...buttonProps} key={`action-${index}`}>
            {act.label}
          </Button>
        );
      }),
    [actions]
  );

  return (
    <WrapperTheme>
      <Collapse in={!hide} timeout={500}>
        <AlertMUI
          {...alertProps}
          onClose={closable ? handleClickHide : onClose}
          action={!multiline && actions.length ? <div className={classes.controlButtons}>{buttonActions}</div> : null}
          classes={{ icon: multiline && classes.multilineIcon }}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {children}
          {multiline && <div className={classes.controlButtonsMultiline}>{buttonActions}</div>}
        </AlertMUI>
      </Collapse>
    </WrapperTheme>
  );
});

Alert.Action = Action;

export default Alert;
