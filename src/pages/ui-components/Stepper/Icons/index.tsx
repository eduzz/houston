import styled, { css } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import Typography from '@eduzz/houston-ui/Typography';

type IconType = {
  number: number;
  className?: string;
};

const ICON_SIZE_IN_PX = 32;

const CurrIcon = ({ number, className }: IconType) => (
  <div className={className}>
    <Typography color='neutralColor.high.pure'>{number}</Typography>
  </div>
);

export const CurrentIcon = styled(CurrIcon)(({ theme }) => {
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

const UnfinIcon = ({ number, className }: IconType) => (
  <div className={className}>
    <Typography color='neutralColor.low.pure'>{number}</Typography>
  </div>
);

export const UnfinishedIcon = styled(UnfinIcon)(({ theme }) => {
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

export const ErrorIcon = () => {
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

export const FinishedIcon = () => {
  const { brandColor } = useHoustonTheme();
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'>
        <rect width='32' height='32' rx='16' fill={brandColor.primary.pure} />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.1844 20.9494C14.1766 20.9578 14.1686 20.9662 14.1605 20.9744C13.8676 21.2673 13.3927 21.2673 13.0998 20.9744L8.71967 16.5942C8.42678 16.3013 8.42678 15.8265 8.71967 15.5336C9.01256 15.2407 9.48744 15.2407 9.78033 15.5336L13.6649 19.4182L22.1135 10.9697C22.4064 10.6768 22.8812 10.6768 23.1741 10.9697C23.467 11.2626 23.467 11.7374 23.1741 12.0303L14.4106 20.7939C14.3433 20.8612 14.2664 20.913 14.1844 20.9494Z'
          fill='white'
        />
      </svg>
    </>
  );
};
