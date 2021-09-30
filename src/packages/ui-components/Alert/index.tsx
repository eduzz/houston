import * as React from 'react';

import AlertMUI, { AlertProps, AlertColor } from '@mui/material/Alert';
import MUIAlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import clsx from 'clsx';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import Button from '../Button';
import nestedComponent from '../Helpers/nestedComponent';
import { useChildrenProps, useFirstChildrenProps } from '../hooks/useChildrenProps';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import AlertAction, { IAlertActionProps } from './Action';
import useStyles from './styles';
import AlertTitle, { IAlertTitleProps } from './Title';

type AlertPropsExtends = 'id' | 'className' | 'children' | 'severity' | 'onClose' | 'icon';

interface IAlertProps extends Pick<AlertProps, AlertPropsExtends>, React.RefAttributes<AlertProps> {
  type?: AlertColor;
  closable?: boolean;
  multiline?: boolean;
}

let alertActionIncrementer = 0;

const Alert: React.FC<IAlertProps> = props => {
  const { id, className, children, type = 'success', icon, onClose, closable, multiline } = props;
  const alertProps = { id, className, severity: type, icon, onClose };

  const classes = useStyles();

  const [hide, , , setHide] = useBoolean(false);

  const title = useFirstChildrenProps<IAlertTitleProps>(children, AlertTitle);
  const actions = useChildrenProps<IAlertActionProps>(children, AlertAction).map(props => ({
    ...props,
    id: `action-${alertActionIncrementer++}`
  }));

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
    <Collapse in={!hide} timeout={500}>
      <AlertMUI
        {...alertProps}
        onClose={closable ? setHide : onClose}
        action={renderActions}
        classes={{
          root: classes.root,
          icon: clsx(multiline && classes.multilineIcon, !multiline && classes.icon),
          action: clsx(multiline && classes.multilineAction, !multiline && classes.action),
          message: classes.message
        }}
      >
        {title && <MUIAlertTitle>{title?.children}</MUIAlertTitle>}
        {children}
        {multiline && buttonActions.length > 0 && (
          <div className={classes.controlButtonsMultiline}>{buttonActions}</div>
        )}
      </AlertMUI>
    </Collapse>
  );
};

export default nestedComponent(withHoustonTheme(React.memo(Alert)), { Title: AlertTitle, Action: AlertAction });
