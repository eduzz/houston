import * as React from 'react';

export interface IAlertTitleProps extends Pick<HTMLDivElement, 'children'> {}

export default React.memo<IAlertTitleProps>(() => null);
