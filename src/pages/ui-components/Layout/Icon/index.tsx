import { Fragment, memo, ReactNode, SVGProps, useMemo } from 'react';

import mapper, { Icons } from './mapper';

interface IProps extends SVGProps<SVGSVGElement> {
  name: Icons;
}

const Icon = memo<IProps>(({ name, ...props }) => {
  const icon = useMemo(() => mapper(name), [name]);

  const { viewBox, content } = useMemo(() => {
    if (icon.component) return {};

    let content: ReactNode = icon.paths.map((path, index) => (
      <path key={index} d={path.d} fill={path.fill} transform={path.transform} />
    ));

    if (icon.wrapper) {
      content = icon.wrapper(content);
    }

    return { viewBox: icon.viewBox, content };
  }, [icon]);

  if (icon.component) {
    return <Fragment>{icon.component()}</Fragment>;
  }

  return (
    <svg {...props} viewBox={viewBox}>
      {content}
    </svg>
  );
});

export default Icon;
