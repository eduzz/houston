import styled, { css } from '@eduzz/houston-styles';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { ButtonPropsType } from '..';

type CurrentType = {
  number: number;
  className?: string;
};

const CurrentIcon = ({ number, className }: CurrentType) => (
  <div className={className}>
    <Typography color='neutralColor.high.pure'> {number}</Typography>
  </div>
);

export const StyledCurrentIcon = styled(CurrentIcon)(({ theme }) => {
  return css`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: black;

    display: flex;
    align-items: center;
    justify-content: center;
  `;
});

const CurrentButton = ({ buttonProps }: ButtonPropsType) => {
  const { label, description, number } = buttonProps;
  return (
    <>
      <IconButton size='md' fill className='hst-step-iconbutton'>
        <StyledCurrentIcon number={number} />
      </IconButton>
      <Typography color='neutralColor.low.pure' size='xs' lineHeight='default'>
        {label}
      </Typography>
      {description && (
        <Typography color='neutralColor.low.pure' size='xxs' lineHeight='default'>
          {description}
        </Typography>
      )}
    </>
  );
};

export default CurrentButton;
