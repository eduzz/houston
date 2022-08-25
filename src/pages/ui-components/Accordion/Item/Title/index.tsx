import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';
import Divider from '@eduzz/houston-ui/Divider';
import Typography from '@eduzz/houston-ui/Typography';

import { AccordionContext } from '../../context';
import { ItemContext } from '../context';

export interface TitleProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ChevronIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.04231 7.64349C2.74941 7.93638 2.7494 8.41125 3.04229 8.70415L11.4697 17.1318C11.6103 17.2725 11.8011 17.3515 12 17.3515C12.1989 17.3515 12.3897 17.2725 12.5303 17.1319L20.9515 8.71091C21.2444 8.41802 21.2444 7.94315 20.9515 7.65025C20.6586 7.35735 20.1837 7.35735 19.8908 7.65024L12 15.5409L4.10297 7.64351C3.81008 7.35061 3.33521 7.3506 3.04231 7.64349Z'
    />
  </svg>
);

const AccordionTitle = ({ children, ...rest }: TitleProps) => {
  const expandedItems = useContextSelector(AccordionContext, context => context.expandedItems);
  const itemId = useContextSelector(ItemContext, context => context.itemId);

  return (
    <>
      <div tabIndex={0} {...rest}>
        {typeof children === 'string' ? (
          <Typography lineHeight='default' weight='semibold' as='span'>
            {children}
          </Typography>
        ) : (
          <>{children}</>
        )}
        <span className={cx('hst-accordion__icon', { '--isExpanded': expandedItems.includes(itemId) })}>
          <ChevronIcon />
        </span>
      </div>
      <Divider />
    </>
  );
};

export default styled(AccordionTitle, { label: 'hst-accordion-title' })(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    padding: ${theme.spacing.squish.xxs};
    transition-duration: 0.5s;
    transition-property: background-color, color;

    .hst-accordion__icon {
      line-height: 0;
      margin-left: auto;
      transition: 0.15s linear;

      &.--isExpanded {
        transform: rotateX(180deg);
      }
    }

    :hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }

    :focus {
      outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
    }
  `;
});
