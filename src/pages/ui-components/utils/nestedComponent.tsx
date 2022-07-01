import * as React from 'react';

export default function nestedComponent<P, N>(
  component: React.ComponentType<P>,
  nested: N
): React.ComponentType<P> & N {
  Object.keys(nested).forEach(key => {
    component[key] = nested[key];
  });

  return component as any;
}
