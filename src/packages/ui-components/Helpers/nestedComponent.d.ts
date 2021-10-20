import * as React from 'react';
export default function nestedComponent<P, N>(component: React.FC<P>, nested: N): React.FC<P> & N;
