import * as React from 'react';
declare type ParametersOptional<T extends (...args: any) => any> = T extends (...args: infer P) => any ? Partial<P> : never;
export default function useCallbackGenerator<F extends (...args: any[]) => any>(generator: F, deps: React.DependencyList): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F>;
export {};
