import * as React from 'react';

import FormHelperText from '@mui/material/FormHelperText';

import Typography from '../../Typography';

interface ILabelBaseProps {
  hasError: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string;
}

const LabelBase: React.FC<ILabelBaseProps> = ({ hasError, label, description, errorMessage }) => {
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
      {label && <Typography>{label}</Typography>}

      {description && (
        <Typography size='xxxs' fontWeight='regular'>
          {description}
        </Typography>
      )}

      {hasError && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};

export default React.memo(LabelBase);
