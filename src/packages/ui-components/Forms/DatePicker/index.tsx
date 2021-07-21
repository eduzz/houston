import * as React from 'react';

import DatePickerBase, { IDatePickerBaseProps } from '../internals/DatePickerBase';

const DatePickerField: React.FC<IDatePickerBaseProps> = props => {
  return <DatePickerBase {...props} />;
};

export default React.memo(DatePickerField);
