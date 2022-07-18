import styled, { css } from '@eduzz/houston-styles';
import Avatar from '@eduzz/houston-ui/Avatar';

const TagAvatar = ({ ...rest }) => <Avatar size='xs' {...rest} />;

export default styled(TagAvatar, { label: 'houston-tag-avatar' })(({ theme }) => {
  return css`
    margin-right: ${theme.spacing.inline.nano};
  `;
});
