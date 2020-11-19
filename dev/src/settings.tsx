export const ENV = (process.env.REACT_APP_ENV || 'production').trim();
export const IS_DEVELOPMENT = ENV === 'development';
