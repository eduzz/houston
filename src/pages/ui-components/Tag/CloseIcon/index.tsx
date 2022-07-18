import styled, { css, StyledProp } from '@eduzz/houston-styles';

const CloseIcon = ({ className }: StyledProp) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.08153 3.22976C3.88627 3.0345 3.56969 3.0345 3.37443 3.22976C3.17917 3.42502 3.17917 3.7416 3.37443 3.93687L7.29295 7.85539L3.22982 11.9185C3.03456 12.1138 3.03456 12.4304 3.22982 12.6256C3.42508 12.8209 3.74167 12.8209 3.93693 12.6256L8.00006 8.5625L12.0453 12.6077C12.2406 12.803 12.5571 12.803 12.7524 12.6077C12.9477 12.4125 12.9477 12.0959 12.7524 11.9006L8.70717 7.85539L12.6078 3.95476C12.8031 3.7595 12.8031 3.44292 12.6078 3.24765C12.4125 3.05239 12.096 3.05239 11.9007 3.24765L8.00006 7.14829L4.08153 3.22976Z'
      fill='black'
    />
  </svg>
);

export default styled(CloseIcon, { label: 'houston-tag-close-icon' })(({ theme }) => {
  return css`
    margin-left: ${theme.spacing.inline.nano};
  `;
});
