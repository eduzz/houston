import { __assign } from "tslib";
import createUseStyles from '../styles/createUseStyles';
var useStyles = createUseStyles(function (theme) { return ({
    tableContainer: {
        position: 'relative'
    },
    table: {
        width: '100%',
        borderSpacing: 0,
        '& .table-label-mobile': {
            display: 'none',
            fontSize: theme.textSize('x-small'),
            fontWeight: theme.fontWeight('semibold')
        },
        '& .table-collapse-button': {
            transition: '.2s linear'
        },
        '& .table-collapse-button-opened': {
            transform: 'rotate(-180deg)'
        },
        '& > tbody > tr > td': {
            boxSizing: 'border-box'
        },
        '& > tbody > tr.table-row-even > td': {
            backgroundColor: theme.colors.grey[100]
        },
        '& > tbody > tr.table-row-even + tr.table-collapse td': {
            backgroundColor: 'transparent'
        },
        '& > tbody > tr.table-loader td': {
            padding: 0
        },
        '& > tbody > tr.table-collapse > td': {
            padding: 0
        },
        '& > tbody > tr.table-collapse:not(.table-collapse-opened) > td': {
            border: 'none'
        },
        '& > tbody > tr.table-collapse:not(.table-collapse-no-padding) > td div.table-collapse-content': {
            padding: theme.spacing(3)
        },
        '& > tbody > tr.table-collapse:not(.table-collapse-no-background) > td div.table-collapse-content': {
            backgroundColor: theme.colors.grey[200]
        },
        '& > tbody > tr > td.table-action-cell': {
            paddingRight: theme.spacing(3)
        },
        '& > tbody > tr > td.table-action-cell button + button': {
            marginLeft: theme.spacing(1)
        },
        '& > thead > tr > th.column-align-left': {
            textAlign: 'left'
        },
        '& > thead > tr > th.column-align-center': {
            textAlign: 'center'
        },
        '& > thead > tr > th.column-align-right': {
            textAlign: 'right'
        },
        '& > tbody > tr > td.cell-align-left': {
            textAlign: 'left'
        },
        '& > tbody > tr > td.cell-align-center': {
            textAlign: 'center'
        },
        '& > tbody > tr > td.cell-align-right': {
            textAlign: 'right'
        }
    },
    tableResponsive: __assign({ display: 'block !important', '& .table-label-mobile': {
            display: 'block !important'
        }, '& > thead': {
            display: 'none'
        }, '& > tbody, & > tfoot, , & > tfoot > tr, & > tfoot > tr > td': {
            display: 'block'
        }, '& > tbody > tr': {
            display: 'flex',
            width: "calc(100% - " + theme.spacing(4) + ")",
            flexWrap: 'wrap',
            position: 'relative',
            boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
            borderRadius: 3,
            margin: theme.spacing(2),
            marginTop: 0,
            border: "1px solid " + theme.colors.grey[200],
            padding: theme.spacing(3),
            paddingBottom: theme.spacing(1),
            boxSizing: 'border-box'
        }, '& > tbody > tr.table-collapse': {
            padding: 0,
            marginTop: (theme.spacing(2) + 2) * -1,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            boxShadow: 'none',
            backgroundColor: 'white'
        }, '& > tbody > tr.table-collapse-opened': {
            boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)'
        }, '& > tbody > tr.table-collapse > td': {
            marginBottom: 0
        }, '& > tbody > tr.table-row-even': {
            backgroundColor: theme.colors.grey[100]
        }, '& > tbody > tr.table-row-even + tr.table-collapse': {
            backgroundColor: theme.colors.grey[100],
            border: 0
        }, '& > tbody > tr.table-row-even > td': {
            backgroundColor: 'transparent'
        }, '& > tbody > tr.table-row-even + tr.table-collapse td': {
            backgroundColor: 'transparent'
        }, '& > tbody > tr.table-row-has-action, & > tbody > tr.table-row-has-collapse': {
            paddingRight: 50,
            '&:before': {
                content: '" "',
                display: 'block',
                position: 'absolute',
                borderLeft: "1px solid " + theme.colors.grey[200],
                right: 40,
                top: 0,
                bottom: 0
            }
        }, '& > tbody > tr > td.table-collapse-cell': {
            position: 'absolute',
            right: theme.spacing(1),
            top: 'auto',
            bottom: theme.spacing(1),
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            paddingRight: 0,
            marginBottom: 0
        }, '& > tbody > tr > td.table-action-cell': {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            bottom: 'auto',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            paddingRight: 0,
            marginBottom: 0
        }, '& > tbody > tr > td.table-action-cell button + button': {
            marginLeft: 0
        }, '& > tbody > tr > td.table-action-cell button:first-child:not(:last-child)': {
            alignSelf: 'flex-start'
        }, '& > tbody > tr > td': {
            boxSizing: 'border-box',
            wordBreak: 'break-word',
            padding: 0,
            marginBottom: theme.spacing(2),
            flex: 1,
            border: 'none',
            flexGrow: 0,
            flexBasis: '100%',
            maxWidth: '100%',
            lineHeight: theme.lineHeight('compact')
        }, '& > tbody > tr.table-loader': {
            padding: 0,
            paddingRight: 0,
            '&:before': {
                display: 'none'
            }
        }, '& > tbody > tr.table-empty-message': {
            paddingRight: 0,
            '&:before': {
                display: 'none'
            }
        }, '& > tbody > tr.table-loader > td': {
            marginBottom: 0
        }, '& > tbody > tr > td.cell-mobile-align-left': {
            textAlign: 'left'
        }, '& > tbody > tr > td.cell-mobile-align-center': {
            textAlign: 'center'
        }, '& > tbody > tr > td.cell-mobile-align-right': {
            textAlign: 'right'
        }, '& > tbody > tr > td.cell-size-true': {
            flexGrow: 1,
            flexBasis: 0,
            maxWidth: '100%'
        }, '& > tbody > tr > td.cell-size-0': {
            display: 'none'
        } }, new Array(12).fill('a').reduce(function (acc, _, index) {
        var _a;
        var size = index + 1;
        var percent = (size / 12) * 100 + "%";
        return __assign(__assign({}, acc), (_a = {}, _a["& > tbody > tr > td.cell-size-" + size] = {
            flexGrow: 0,
            maxWidth: percent,
            flexBasis: percent
        }, _a));
    }, {}))
}); });
export default useStyles;
