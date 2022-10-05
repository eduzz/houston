import * as React from 'react';

import { ErrorMessage as ErrorMessageHook } from '@hookform/error-message';
import { useFormState } from 'react-hook-form';

import { cx } from '@eduzz/houston-styles';

import Typography from '../../Typography';

export interface ErrorMessageProps {
  id?: string;
  name: string;
  className?: string;
}

/**
 * @deprecated
 */
const ErrorMessage = ({ id, name, className }: ErrorMessageProps) => {
  const formState = useFormState({ name, exact: true });

  return (
    <ErrorMessageHook
      errors={formState.errors}
      name={name}
      render={({ message }) => (
        <Typography id={id} className={cx(className, 'hst-form-error-message')}>
          {message}
        </Typography>
      )}
    />
  );
};

export default React.memo(ErrorMessage);
