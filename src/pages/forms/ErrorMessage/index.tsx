import * as React from 'react';
import { useFormState } from 'react-hook-form';

import { Typography } from 'antd';

import { ErrorMessage as ErrorMessageHook } from '@hookform/error-message';

export interface ErrorMessageProps extends Omit<React.ComponentProps<typeof Typography.Text>, 'children'> {
  name: string;
}

const ErrorMessage = ({ name, ...props }: ErrorMessageProps) => {
  const formState = useFormState({ name, exact: true });

  return (
    <ErrorMessageHook
      errors={formState.errors}
      name={name}
      render={({ message }) => (
        <Typography.Text type='danger' {...props}>
          {message}
        </Typography.Text>
      )}
    />
  );
};

export default React.memo(ErrorMessage);
