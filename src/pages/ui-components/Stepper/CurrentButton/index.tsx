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

const ICON_SIZE_IN_PX = 32;

export const StyledCurrentIcon = styled(CurrentIcon)(({ theme }) => {
  return css`
    width: ${theme.pxToRem(ICON_SIZE_IN_PX)}rem;
    height: ${theme.pxToRem(ICON_SIZE_IN_PX)}rem;
    border-radius: ${theme.border.radius.circular};
    background-color: ${theme.neutralColor.low.pure};
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
      <Typography color='neutralColor.low.pure' size='xs' lineHeight='default' className='hst-step-label'>
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
