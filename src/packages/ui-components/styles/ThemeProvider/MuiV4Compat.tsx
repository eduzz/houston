import * as React from 'react';

import usePromise from '@eduzz/houston-hooks/usePromise';

const StylesProvider = React.lazy(() => {
  // @ts-ignore
  return import('@material-ui/styles/StylesProvider');
});

interface IProps {
  children: React.ReactNode;
  enabled: boolean;
}

const MuiV4Compat: React.FC<IProps> = React.memo(({ children, enabled }) => {
  const [generateClassName] = usePromise(async () => {
    if (!enabled) return null;
    // @ts-ignore
    const createGenerateClassName = await import('@material-ui/styles/createGenerateClassName');
    return createGenerateClassName.default({ disableGlobal: true });
  }, [enabled]);

  if (!enabled) return <>{children}</>;

  if (!generateClassName) return null;

  return (
    <React.Suspense fallback={<></>}>
      <StylesProvider generateClassName={generateClassName} />
    </React.Suspense>
  );
});

export default MuiV4Compat;
