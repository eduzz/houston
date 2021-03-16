import * as React from 'react';

import Collapse from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AlertMUI, { AlertProps, Color } from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import Button from '../Button';
import { getReactChildrenProps } from '../Helpers/functions';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import AlertAction, { IAlertActionProps } from './Action';

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
    },

    multilineAction: {
      paddingLeft: 0
    }
  })
);

type AlertComponent = React.NamedExoticComponent<IAlertProps> & {
  Action?: typeof AlertAction;
};

let alertActionIncrementer = 0;

const Alert = React.memo(props => {
  const classes = useStyles();

  const [hide, setHide] = React.useState<boolean>(false);

  const { id, className, children, type = 'success', icon, title, onClose, closable, multiline } = props;
  const alertProps = { id, className, severity: type, icon, onClose };

  const handleClickHide = React.useCallback(() => setHide(true), []);

  const actions = React.useMemo(() => {
    return getReactChildrenProps<IAlertActionProps>(children, AlertAction).map(props => ({
      ...props,
      id: `action-${alertActionIncrementer++}`
    }));
  }, [children]);

  const buttonActions = React.useMemo(
    () =>
      actions?.map((act, index) => {
        const buttonProps = { ...act };
        delete buttonProps.label;

        return (
          <Button {...buttonProps} key={`alert-action-${index}`}>
            {act.label}
          </Button>
        );
      }),
    [actions]
  );

  const renderActions = React.useMemo(() => {
    if (multiline) return false;
    if (!!actions.length) return <div className={classes.controlButtons}>{buttonActions}</div>;
    return null;
  }, [multiline, actions, classes, buttonActions]);

  return (
    <WrapperTheme>
      <Collapse in={!hide} timeout={500}>
        <AlertMUI
          {...alertProps}
          onClose={closable ? handleClickHide : onClose}
          action={renderActions}
          classes={{ icon: multiline && classes.multilineIcon, action: multiline && classes.multilineAction }}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {children}
          {multiline && <div className={classes.controlButtonsMultiline}>{buttonActions}</div>}
        </AlertMUI>
      </Collapse>
    </WrapperTheme>
  );
}) as AlertComponent;

Alert.Action = AlertAction;

export default Alert;
