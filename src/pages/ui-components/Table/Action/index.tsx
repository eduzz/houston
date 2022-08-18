import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import usePromiseCallback from '@eduzz/houston-hooks/usePromiseCallback';
import styled from '@eduzz/houston-styles';

import Button from '../../Button';
import Portal from '../../Portal';
import Typography from '../../Typography';
import TableRowContext from '../Row/context';

export interface TableActionOptionProp {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example a, NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick: (data: unknown, index: number, event?: React.MouseEvent<HTMLButtonElement>) => any | Promise<any>;
  children: string;
}

const TableActionOption = ({
  as: Tag,
  children,
  disabled,
  onClick,
  icon,
  className,
  ...rest
}: TableActionOptionProp) => {
  const registerAction = useContextSelector(TableRowContext, context => context.registerAction);
  const data = useContextSelector(TableRowContext, context => context.data);
  const index = useContextSelector(TableRowContext, context => context.index);
  const portal = useContextSelector(TableRowContext, context => context.portals.actions);
  const setLoading = useContextSelector(TableRowContext, context => context.setActionLoading);
  const closeMenu = useContextSelector(TableRowContext, context => context.closeMenu);

  React.useEffect(() => {
    const unregister = registerAction();
    return () => unregister();
  }, [registerAction]);

  const handleClick = usePromiseCallback(
    async (isSubscribed, event: React.MouseEvent<HTMLButtonElement>) => {
      closeMenu();
      const promise = onClick(data, index, event);

      if (!(promise instanceof Promise)) return;

      try {
        setLoading(true);
        await promise;
      } finally {
        setLoading(false);
      }
    },
    [data, index, onClick]
  );

  let content = (
    <Button startIcon={icon} variant='text' onClick={handleClick} className={className} disabled={disabled}>
      <Typography color='inherit'>{children}</Typography>
    </Button>
  );

  if (Tag) {
    content = <Tag {...rest}>{content}</Tag>;
  }

  return <Portal target={portal}>{content}</Portal>;
};

export default styled(React.memo(TableActionOption))`
  justify-content: start;
  text-align: left;
  border-radius: 0;

  &.--disabled {
    background-color: transparent;
  }
`;
