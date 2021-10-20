import * as React from 'react';
interface ICollapseProps {
    visibled: boolean;
    children?: any;
    onEnter?: () => void;
    destroyOnClose?: boolean;
    mountOnEnter?: boolean;
}
declare const _default: React.FC<ICollapseProps>;
export default _default;
