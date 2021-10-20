import * as React from 'react';
declare type AnyEvent = MouseEvent | TouchEvent;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: React.RefObject<T>, handler: (event: AnyEvent) => void): void;
export default useOnClickOutside;
