import * as React from 'react';

import DatePickerBase, { IDatePickerFieldProps } from '../internals/DatePickerBase';

const DatePickerField: React.VoidFunctionComponent<IDatePickerFieldProps> = props => {
  return <DatePickerBase {...props} />;
};

export default React.memo(DatePickerField);
