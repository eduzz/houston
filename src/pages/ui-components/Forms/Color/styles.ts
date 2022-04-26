import createUseStyles from '@eduzz/houston-style/createUseStyles';

interface IStyleProps {
  size?: 'small' | 'normal';
}

export default createUseStyles(theme => ({
  root: {
    position: 'relative'
  },

  icon: {
    color: 'currentcolor'
  },

  input: {
    '&.--active': {
      '& fieldset': {
        borderWidth: 2,
        borderColor: theme.brandColor.primary.pure
      },

      '& label': {
        color: theme.brandColor.primary.pure
      }
    }
  },

  picker: (props: IStyleProps) => ({
    position: 'absolute',
    marginTop: 4,
    top: props?.size === 'small' ? 35 : 45,
    left: 0,
    zIndex: 2,
    height: 0,
    opacity: 0,
    visibility: 'hidden',
    marginLeft: 16,

    '&.--show': {
      opacity: 1,
      visibility: 'visible',
      height: 'auto'
    },

    '& .react-colorful': {
      width: 170,
      height: 170,
      boxShadow: '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d'
    },

    '& .react-colorful__saturation': {
      borderRadius: 0
    },

    '& .react-colorful__pointer': {
      width: 20,
      height: 20
    },

    '& .react-colorful__hue': {
      height: 22
    },

    '& .react-colorful__last-control': {
      borderRadius: '0 0 4px 4px'
    }
  })
}));
