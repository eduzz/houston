import * as React from 'react';

import { useTheme } from '@emotion/react';
import FormHelperText from '@mui/material/FormHelperText';

import Typography from '../../Typography';

interface ILabelBaseProps {
  hasError: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string;
}

const LabelBase: React.FC<ILabelBaseProps> = ({ hasError, label, description, errorMessage }) => {
  const theme = useTheme();

  if (label && typeof label !== 'string') {
    return (
      <>
        {label}
        {hasError && <FormHelperText error>{errorMessage}</FormHelperText>}
      </>
    );
  }

  return (
    <>
      {label && <Typography size='xxs'>{label}</Typography>}

      {description && (
        <Typography size='xxs' weight='regular'>
          {description}
        </Typography>
      )}

      {hasError && (
        <FormHelperText sx={{ fontSize: theme.font.size.xxxs }} error>
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};

export default React.memo(LabelBase);
