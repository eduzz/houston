import { memo, Props } from 'react';
import { useObservable } from 'react-use-observable';

import { logError } from 'helpers/rxjs-operators/logError';
import { enRoles } from 'interfaces/models/user';
import authService from 'services/auth';

interface IProps extends Props<{}> {
  passIfNull?: boolean;
  role?: enRoles | enRoles[];
  inverse?: boolean;
}

const PermissionHide = memo<IProps>(props => {
  const [canAccess] = useObservable(() => {
    const roles = Array.isArray(props.role) ? props.role : props.role ? [props.role] : [];
    return authService.canAccess(...roles).pipe(logError());
  }, [props.role]);

  if (canAccess === undefined || canAccess === null) {
    return null;
  }

  if (props.inverse && !canAccess) {
    return props.children as any;
  }

  if (props.inverse || !canAccess) {
    return null;
  }

  return props.children as any;
});

export default PermissionHide;
