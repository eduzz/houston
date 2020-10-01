import { StyleRules } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation';

export type LabOverrides = {
  [Name in keyof LabComponentNameToClassKey]?: Partial<StyleRules<LabComponentNameToClassKey[Name]>>;
} & {};

interface ICustomOverrides extends Partial<Overrides>, Partial<LabOverrides> {}

const overrides: ICustomOverrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      padding: '0px 16px',
      height: 40,
      borderRadius: 4,
      fontWeight: 600
    },

    label: {
      lineHeight: 1.25
    },

    sizeSmall: {
      height: 30
    },

    sizeLarge: {
      height: 50
    },

    startIcon: {
      marginRight: 8
    },

    contained: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#546E7A !important',
        backgroundColor: '#B0BEC5'
      }
    },

    outlined: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#B0BEC5',
        borderColor: '#B0BEC5'
      }
    },

    text: {
      padding: '0px 16px',

      '&$disabled': {
        color: '#B0BEC5'
      }
    }
  },

  MuiTypography: {
    root: {
      lineHeight: 1.5,
      fontWeight: 400
    },

    body1: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400
    },

    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h1: {
      fontSize: 32,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h2: {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h3: {
      fontSize: 20,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h4: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    h6: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400
    },

    subtitle1: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400
    },

    subtitle2: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 400
    }
  },

  MuiAlertTitle: {
    root: {
      fontWeight: 600
    }
  },

  MuiAlert: {
    root: {
      borderRadius: 4
    },

    icon: {
      alignItems: 'center'
    },

    message: {
      fontWeight: 600
    },

    standardSuccess: {
      backgroundColor: '#D2EBD3'
    },

    standardError: {
      backgroundColor: '#FDD9D7'
    },

    standardInfo: {
      backgroundColor: '#CDEBFA'
    },

    standardWarning: {
      backgroundColor: '#FFF4D4'
    }
  }
};

export default overrides;
