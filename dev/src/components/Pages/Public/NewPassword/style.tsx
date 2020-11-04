import makeStyles from '@material-ui/core/styles/makeStyles';

import splashImage from 'assets/images/splash.png';

const useStyle = makeStyles({
  root: {
    background: `url(${splashImage}) no-repeat center`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative'
  },
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    width: '320px',
    height: '400px',
    maxWidth: 'calc(100% - 30px)',
    color: 'white'
  },
  logo: {
    textAlign: 'center',
    marginBottom: 20
  },
  logoImage: {
    maxWidth: '100%',
    maxHeight: 120
  },
  viewContainer: {
    boxSizing: 'border-box',
    padding: '0 10px',
    height: 310
  },
  buttonsBack: {
    justifyContent: 'flex-start'
  },
  buttons: {
    justifyContent: 'flex-end'
  }
});

export default useStyle;
