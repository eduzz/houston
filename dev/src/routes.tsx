import { memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HelloWorld from 'components/HelloWorld';
import TooltipExample from 'components/Tooltip';

const Routes = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/tooltip' component={TooltipExample} />
        <Route path='/' component={HelloWorld} />
      </Switch>
    </BrowserRouter>
  );
});

export default Routes;
