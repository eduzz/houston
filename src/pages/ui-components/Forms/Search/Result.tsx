import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import Typography from '../../Typography';
import { useSearch } from './context';

export type SearchResultProps = StyledProp & {
  children: string;
};

const SearchResult = ({ className, children }: SearchResultProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const { onSelect } = useSearch();

  function handleClick() {
    onSelect(children);
  }

  return (
    <div ref={divRef} className={className} onClick={handleClick}>
      <Typography className='__text' size='xs'>
        {children}
      </Typography>
    </div>
  );
};

export default styled(React.memo(SearchResult), { label: 'houston-form-search-option' })(
  ({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacing.squish.xs};
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    transition: 0.3s;
    position: relative;

    &:hover {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[1])};
    }

    &:not(:last-child):after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: ${theme.spacing.xxxs};
      right: ${theme.spacing.xxxs};
      border-bottom: ${theme.border.width.xs} solid ${theme.neutralColor.high.medium};
    }

    & > .__text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `
);
