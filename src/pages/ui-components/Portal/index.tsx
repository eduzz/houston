import * as React from 'react';

import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

function createWrapper(wrapperId: string) {
  const element = document.createElement('div');
  element.setAttribute('id', wrapperId);
  document.body.appendChild(element);
  return element;
}

const Portal = ({ children, wrapperId }: PortalProps) => {
  const [wrapperElement, setWrapperElement] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) {
    return null;
  }

  return createPortal(children, document.getElementById(wrapperId) as HTMLElement);
};

export default Portal;
