import * as React from 'react';

import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  /**
   * HTMLElement or id, if there is no element with id will create a new element on body
   */
  target: string | HTMLElement;
}

function createWrapper(id: string) {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.classList.add('hst-portal');
  document.body.appendChild(element);
  return element;
}

const Portal = ({ children, target }: PortalProps) => {
  const [wrapperElement, setWrapperElement] = React.useState<HTMLElement | null>(() =>
    typeof target !== 'string' ? target : null
  );

  React.useLayoutEffect(() => {
    if (typeof target !== 'string') {
      return;
    }

    let element = document.getElementById(target);
    let created = false;

    if (!element) {
      created = true;
      element = createWrapper(target);
    }

    setWrapperElement(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [target]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};

export default Portal;
