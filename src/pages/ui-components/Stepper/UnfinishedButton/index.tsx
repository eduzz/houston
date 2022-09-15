import styled, { css } from '@eduzz/houston-styles';
import IconButton from '@eduzz/houston-ui/IconButton';
import Typography from '@eduzz/houston-ui/Typography';

import { ButtonPropsType } from '..';

type UnfinishedType = {
  number: number;
  className?: string;
};

const UnfinishedIcon = ({ number, className }: UnfinishedType) => (
  <div className={className}>
    <Typography color='neutralColor.low.pure'>{number}</Typography>
  </div>
);

const ICON_SIZE_IN_PX = 32;

export const StyledUnfinishedIcon = styled(UnfinishedIcon)(({ theme }) => {
  return css`
    width: ${theme.pxToRem(ICON_SIZE_IN_PX)}rem;
    height: ${theme.pxToRem(ICON_SIZE_IN_PX)}rem;
    border-radius: ${theme.border.radius.circular};
    outline: solid ${theme.border.width.xs} ${theme.neutralColor.low.pure};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
});

const UnfinishedButton = ({ buttonProps }: ButtonPropsType) => {
  const { label, description, number } = buttonProps;
  return (
    <>
      <IconButton size='md' fill className='hst-step-iconbutton'>
        <StyledUnfinishedIcon number={number} />
      </IconButton>
      <Typography size='xs' color='neutralColor.low.light' lineHeight='default' className='hst-step-label'>
        {label}
      </Typography>
      {description && (
        <Typography size='xxs' color='neutralColor.low.light' lineHeight='default'>
          {description}
        </Typography>
      )}
    </>
  );
};

export default UnfinishedButton;
