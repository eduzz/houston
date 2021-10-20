import createUseStyles from '../../styles/createUseStyles';
export default createUseStyles(function (theme) { return ({
    cellAction: {
        padding: '6px 12px',
        borderTop: "1px solid " + theme.colors.grey[200],
        fontSize: theme.textSize('normal'),
        '&.--small': {
            fontSize: theme.textSize('small')
        }
    },
    cellCollapse: {
        paddingRight: 8,
        borderTop: "1px solid " + theme.colors.grey[200],
        fontSize: theme.textSize('normal'),
        '&.--small': {
            fontSize: theme.textSize('small')
        }
    },
    iconAction: {
        display: 'inline-flex',
        padding: 4,
        transition: 'background 0.2s linear',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            background: theme.colors.grey[200]
        },
        '&:focus': {
            background: theme.colors.grey[300]
        },
        '& .houston-icon': {
            '& svg': {
                fill: theme.colors.grey[600]
            }
        }
    }
}); });
