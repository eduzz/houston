import * as React from 'react';
import { BoxProps } from '@mui/material/Box';
declare type IBoxSpacement = {
    margin?: number | string;
    padding?: number | string;
};
declare type BoxPropsExtends = 'id' | 'className' | 'children';
export interface IBoxProps extends Pick<BoxProps, BoxPropsExtends> {
    xs?: IBoxSpacement;
    sm?: IBoxSpacement;
    md?: IBoxSpacement;
    lg?: IBoxSpacement;
    xl?: IBoxSpacement;
    paper?: boolean;
    /**
     * Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.
     */
    boxShadow?: number;
}
declare const _default: React.FC<IBoxProps>;
export default _default;
