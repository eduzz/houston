import { GridSpacing } from '@material-ui/core/Grid';

export type IContainerType = 'comfortable' | 'cozy' | 'compact';

export interface IGridConfig {
  [key: string]: {
    className?: string;
    spacing?: GridSpacing;
  };
}
