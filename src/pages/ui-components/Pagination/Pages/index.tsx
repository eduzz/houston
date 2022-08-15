import * as React from 'react';

import ChevronLeft from '@eduzz/houston-icons/ChevronDoubleLeft';
import ChevronRight from '@eduzz/houston-icons/ChevronDoubleRight';
import DotsHorizontalIcon from '@eduzz/houston-icons/DotsHorizontal';
import styled, { css, StyledProp } from '@eduzz/houston-styles';

import { PaginationProps } from '..';
import Button from '../../Button';
import Input from '../../Forms/Input';
import Typography from '../../Typography';

interface PaginationPagesProps extends StyledProp {
  currentPage: number;
  perPage: number;
  total: number;
  mode: PaginationProps['mode'];
  maxPage: number;
  onChange: (page: number) => void;
  disabled?: boolean;
}

const siblingCount = 1,
  boundaryCount = 1;

const PaginationPages = ({
  currentPage,
  perPage,
  disabled,
  total,
  mode,
  maxPage,
  className,
  onChange
}: PaginationPagesProps) => {
  const [pageInput, setPageInput] = React.useState<string>(currentPage?.toString());

  const paginationText = React.useMemo(() => {
    if (mode !== 'table') return null;

    const startsAt = (currentPage - 1) * perPage + 1;
    const endsAt = currentPage * perPage;
    const totalFormatted = new Intl.NumberFormat('pt-BR').format(total);

    return `${startsAt}-${endsAt > total ? total : endsAt} de ${totalFormatted}`;
  }, [mode, currentPage, perPage, total]);

  const pages = React.useMemo(() => {
    if (mode === 'table') return null;

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => start + i);
    };

    const startPages = range(1, Math.min(boundaryCount, maxPage));
    const endPages = range(Math.max(maxPage - boundaryCount + 1, boundaryCount + 1), maxPage);

    const siblingsStart = Math.max(
      Math.min(currentPage - siblingCount, maxPage - boundaryCount - siblingCount * 2 - 1),
      boundaryCount + 2
    );

    const siblingsEnd = Math.min(
      Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : maxPage - 1
    );

    return [
      ...startPages,
      ...(siblingsStart > boundaryCount + 2
        ? ['previous']
        : boundaryCount + 1 < maxPage - boundaryCount
        ? [boundaryCount + 1]
        : []),
      ...range(siblingsStart, siblingsEnd),
      ...(siblingsEnd < maxPage - boundaryCount - 1
        ? ['next']
        : maxPage - boundaryCount > boundaryCount
        ? [maxPage - boundaryCount]
        : []),

      ...endPages
    ].map(page => ({
      page,
      onClick: () => {
        if (typeof page === 'number') {
          onChange(page);
          return;
        }

        if (page === 'previous') {
          const newPage = currentPage - 10;
          onChange(newPage < 1 ? 1 : newPage);
          return;
        }

        const newPage = currentPage + 10;
        onChange(newPage > maxPage ? maxPage : newPage);
      }
    }));
  }, [currentPage, maxPage, mode, onChange]);

  const handlePageInputChange = React.useCallback(
    (
      valueOrEvent: string | number | React.KeyboardEvent<HTMLDivElement>,
      event?:
        | React.KeyboardEvent<HTMLDivElement>
        | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      let enterPressed = false;
      let value = '';

      if (valueOrEvent && typeof valueOrEvent === 'object') {
        event = valueOrEvent;
        enterPressed = valueOrEvent.key?.toLowerCase() === 'enter';
        value = (valueOrEvent.target as any).value;
      } else {
        value = valueOrEvent?.toString();
      }

      setPageInput(value);

      if (event?.type === 'change' || (event?.type === 'keyup' && !enterPressed)) {
        return;
      }

      let newPage = Math.floor(Number(value));
      const maxPage = Math.ceil(total / perPage);

      if (!newPage) {
        newPage = 1;
      }

      if (newPage < 1) {
        newPage = 1;
      }

      if (newPage > maxPage) {
        newPage = maxPage;
      }

      if (newPage != Number(value)) {
        setPageInput(newPage.toString());
      }

      if (newPage === currentPage) {
        return;
      }

      onChange(newPage);
    },
    [currentPage, onChange, perPage, total]
  );

  if (mode === 'table') {
    return <Typography>{paginationText}</Typography>;
  }

  return (
    <div className={className}>
      <div className='__hts-pagination-pages-buttons'>
        {pages?.map(({ page, onClick }) => (
          <Button
            key={page}
            variant='text'
            disabled={disabled}
            active={page === currentPage}
            onClick={onClick}
            className='__hts-pagination-pages-button'
          >
            {typeof page === 'number' ? (
              page
            ) : (
              <>
                <DotsHorizontalIcon className='--hts-hidden-hover' />
                {page === 'previous' ? (
                  <ChevronLeft className='--hts-show-hover' />
                ) : (
                  <ChevronRight className='--hts-show-hover' />
                )}
              </>
            )}
          </Button>
        ))}
      </div>
      <div className='__hts-pagination-pages-mobile'>
        <Input
          size='sm'
          disabled={disabled}
          value={pageInput}
          className='__hts-pagination-pages-mobile-input'
          onChange={handlePageInputChange as any}
          onKeyUp={handlePageInputChange}
          onBlur={handlePageInputChange as any}
        />

        <Typography size='xs' weight='regular' className='__hts-pagination-pages-mobile-text'>
          de {maxPage}
        </Typography>
      </div>
    </div>
  );
};

export default styled(PaginationPages, { label: 'houston-pagination-pages' })(
  ({ theme }) => css`
    & .__hts-pagination-pages-buttons {
      align-items: center;
      display: flex;
      width: 100%;

      & .__hts-pagination-pages-button {
        min-width: 0;
        font-weight: ${theme.font.weight.regular};

        & .--hts-show-hover {
          display: none;
        }

        &:hover {
          & .--hts-show-hover {
            display: initial;
          }

          & .--hts-hidden-hover {
            display: none;
          }
        }
      }
    }

    & .__hts-pagination-pages-mobile {
      display: none;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing.nano};

      & .__hts-pagination-pages-mobile-input {
        width: 60px;
      }

      & .__hts-pagination-pages-mobile-text {
        white-space: nowrap;
      }
    }

    ${theme.breakpoints.down('md')} {
      width: 100%;

      & .__hts-pagination-pages-buttons {
        display: none;
      }

      & .__hts-pagination-pages-mobile {
        display: flex;
      }
    }
  `
);
