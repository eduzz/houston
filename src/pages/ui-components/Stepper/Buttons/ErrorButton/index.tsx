import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { ButtonPropsType } from '..';

export const ErrorSvg = () => {
  const { feedbackColor } = useHoustonTheme();
  return (
    <>
      <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='32' height='32' rx='16' fill={feedbackColor.negative.pure} />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.1222 8.84467C9.82935 8.55178 9.35447 8.55178 9.06158 8.84467C8.76869 9.13756 8.76869 9.61244 9.06158 9.90533L14.9394 15.7831L8.84467 21.8778C8.55178 22.1707 8.55178 22.6456 8.84467 22.9385C9.13756 23.2314 9.61244 23.2314 9.90533 22.9385L16 16.8438L22.0679 22.9116C22.3608 23.2045 22.8357 23.2045 23.1285 22.9116C23.4214 22.6187 23.4214 22.1439 23.1285 21.851L17.0607 15.7831L22.9116 9.93217C23.2045 9.63928 23.2045 9.16441 22.9116 8.87151C22.6187 8.57862 22.1439 8.57862 21.851 8.87151L16 14.7225L10.1222 8.84467Z'
          fill='white'
        />
      </svg>
    </>
  );
};

const ErrorButton = ({ buttonProps }: ButtonPropsType) => {
  const { label, description } = buttonProps;
  return (
    <>
      <IconButton size='md' fill className='hst-step-iconbutton'>
        <ErrorSvg />
      </IconButton>
      <div>
        <Typography color='neutralColor.low.pure' size='xs' lineHeight='default' className='hst-step-label'>
          {label}
        </Typography>
        {description && (
          <Typography color='neutralColor.low.pure' size='xxs' lineHeight='default'>
            {description}
          </Typography>
        )}
      </div>
    </>
  );
};

export default ErrorButton;
