"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const ListItem_1 = tslib_1.__importDefault(require("@material-ui/core/ListItem"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const createUseStyles_1 = tslib_1.__importDefault(require("../../../styles/createUseStyles"));
const Left_1 = tslib_1.__importDefault(require("../Left"));
const Right_1 = tslib_1.__importDefault(require("../Right"));
const Subtitle_1 = tslib_1.__importDefault(require("../Subtitle"));
const Title_1 = tslib_1.__importDefault(require("../Title"));
const useStyles = createUseStyles_1.default(theme => ({
    root: {
        padding: '12px 16px',
        borderRadius: 4
    },
    striped: {
        backgroundColor: theme.colors.grey[200]
    },
    textContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        '& .container': {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center'
        }
    }
}));
const Items = ({ items, stripedRows }) => {
    const classes = useStyles();
    const shouldDisplayStriped = React.useCallback((position) => position % 2 !== 0 && stripedRows, [stripedRows]);
    return (React.createElement(React.Fragment, null, items.map(({ left, title, subtitle, right }, index) => (React.createElement(ListItem_1.default, { key: `list-item-${index}`, className: clsx_1.default([classes.root, shouldDisplayStriped(index) && classes.striped]) },
        React.createElement("div", { className: classes.textContainer },
            left && React.createElement(Left_1.default, { icon: left.icon, image: left.image, striped: shouldDisplayStriped(index) }),
            React.createElement("div", { className: 'container' },
                title && React.createElement(Title_1.default, null, title.children),
                subtitle && React.createElement(Subtitle_1.default, null, subtitle.children))),
        right && React.createElement(Right_1.default, { icon: right.icon, text: right.text, onClick: right.onClick }))))));
};
exports.default = React.memo(Items);
