import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface PanelProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const AccordionPanel = ({ children, ...rest }: PanelProps) => {
  return <div {...rest}>{children}</div>;
};

export default styled(AccordionPanel, { label: 'hst-accordion-Panel' })(({ theme }) => {
  return css`
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    padding: ${theme.spacing.inset.xs};
  `;
});
