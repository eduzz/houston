import styled, { css, StyledProp } from '@eduzz/houston-styles';

const PlusIcon = ({ className }: StyledProp) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.08337 2C8.35952 2 8.58337 2.22386 8.58337 2.5V13.5C8.58337 13.7761 8.35952 14 8.08337 14C7.80723 14 7.58337 13.7761 7.58337 13.5L7.58337 2.5C7.58337 2.22386 7.80723 2 8.08337 2Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 8C2 7.72386 2.22386 7.5 2.5 7.5L13.5 7.5C13.7761 7.5 14 7.72386 14 8C14 8.27614 13.7761 8.5 13.5 8.5L2.5 8.5C2.22386 8.5 2 8.27614 2 8Z'
      fill='black'
    />
  </svg>
);

export default styled(PlusIcon, { label: 'houston-tag-plus-icon' })(({ theme }) => {
  return css`
    margin-right: ${theme.spacing.inline.nano};
  `;
});
