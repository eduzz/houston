import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface OverlayProps {
  children?: React.ReactNode;
  visible: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface OverlayPropsComponent extends OverlayProps, IStyledProp {}

const Overlay = ({ className, visible, ...rest }: OverlayPropsComponent) => {
  return <div aria-hidden='true' tabIndex={-1} className={cx(className, { '--visible': visible })} {...rest} />;
};

export default styled(Overlay, { label: 'houston-overlay' })`
  ${({ theme }) => css`
    background: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    opacity: ${theme.opacity.level[0]};
    visibility: hidden;
    user-select: none;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--visible {
      opacity: 1;
      visibility: visible;
      user-select: auto;
    }
  `}
`;
