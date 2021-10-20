import createUseStyles from '../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: (_a = {},
            _a[theme.breakpoints.down('md')] = {
                display: 'block'
            },
            _a),
        message: {
            width: '100%'
        },
        controlButtons: {
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            '& button': {
                marginLeft: 4
            }
        },
        action: (_b = {},
            _b[theme.breakpoints.down('md')] = {
                width: '100%',
                paddingLeft: 0,
                paddingBottom: 10,
                paddingTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                '& button': {
                    marginRight: 4,
                    marginLeft: 0,
                    display: 'block',
                    width: '100%'
                }
            },
            _b),
        controlButtonsMultiline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 16,
            '& button': {
                marginLeft: 4
            }
        },
        multilineIcon: (_c = {
                alignItems: 'flex-start'
            },
            _c[theme.breakpoints.down('md')] = {
                display: 'none'
            },
            _c),
        multilineAction: {
            paddingLeft: 0
        }
    });
});
export default useStyles;
