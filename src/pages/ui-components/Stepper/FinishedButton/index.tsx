import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { ButtonPropsType } from '..';

export const FinishedSvg = () => (
  <>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'>
      <rect width='32' height='32' rx='16' fill='#0D2772' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.1844 20.9494C14.1766 20.9578 14.1686 20.9662 14.1605 20.9744C13.8676 21.2673 13.3927 21.2673 13.0998 20.9744L8.71967 16.5942C8.42678 16.3013 8.42678 15.8265 8.71967 15.5336C9.01256 15.2407 9.48744 15.2407 9.78033 15.5336L13.6649 19.4182L22.1135 10.9697C22.4064 10.6768 22.8812 10.6768 23.1741 10.9697C23.467 11.2626 23.467 11.7374 23.1741 12.0303L14.4106 20.7939C14.3433 20.8612 14.2664 20.913 14.1844 20.9494Z'
        fill='white'
      />
    </svg>
  </>
);

const FinishedButton = ({ buttonProps }: ButtonPropsType) => {
  const { label, description } = buttonProps;
  return (
    <>
      <IconButton size='md' fill className='hst-step-iconbutton'>
        <FinishedSvg />
      </IconButton>
      <Typography color='neutralColor.low.light' size='xs' lineHeight='default'>
        {label}
      </Typography>
      {description && (
        <Typography color='neutralColor.low.light' size='xxs' lineHeight='default'>
          {description}
        </Typography>
      )}
    </>
  );
};

export default FinishedButton;
