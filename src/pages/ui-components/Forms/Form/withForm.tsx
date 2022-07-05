/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { Controller, useFormContext } from 'react-hook-form';

export interface WithFormProps {
  name?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const withForm =
  <P extends WithFormProps>(Component: React.ComponentType<P>): React.FC<P> =>
  ({ name, errorMessage, ...props }) => {
    const form = useFormContext();

    if (!form || !name) {
      return <Component {...(props as any)} name={name} errorMessage={errorMessage} />;
    }

    return (
      <Controller
        control={form.control}
        name={name}
        render={({ field, fieldState }) => (
          <Component {...(props as any)} {...field} errorMessage={errorMessage ?? fieldState.error?.message} />
        )}
      />
    );
  };

export default withForm;
