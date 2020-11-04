import { Props } from 'react';
import { RouteComponentProps } from 'react-router';

export interface IRouteProps<P = {}, R = {}> extends Partial<RouteComponentProps<P>>, Props<R> {}
