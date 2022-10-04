import Icon, { IconProps } from '../Icon';

const MessageRoundSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M169.5 89.5C169.5 125.399 136.817 154.5 96.5 154.5C85.9662 154.5 75.9535 152.513 66.9087 148.938C66.695 149.094 66.4686 149.238 66.2298 149.368L35.7702 165.943C35.0472 166.336 34.279 166.566 33.5083 166.644C32.3426 167.024 31.0501 167.051 29.795 166.643C26.6441 165.617 24.9214 162.231 25.9473 159.08L36.2322 127.49C36.3288 127.194 36.4462 126.91 36.5823 126.64C28.336 116.112 23.5 103.309 23.5 89.5C23.5 53.6015 56.1832 24.5 96.5 24.5C136.817 24.5 169.5 53.6015 169.5 89.5ZM61.5 59.5C58.1863 59.5 55.5 62.1863 55.5 65.5C55.5 68.8137 58.1863 71.5 61.5 71.5H129.5C132.814 71.5 135.5 68.8137 135.5 65.5C135.5 62.1863 132.814 59.5 129.5 59.5H61.5ZM56.5 89.5C56.5 86.1863 59.1863 83.5 62.5 83.5H113.5C116.814 83.5 119.5 86.1863 119.5 89.5C119.5 92.8137 116.814 95.5 113.5 95.5H62.5C59.1863 95.5 56.5 92.8137 56.5 89.5ZM61.5 107.5C58.1863 107.5 55.5 110.186 55.5 113.5C55.5 116.814 58.1863 119.5 61.5 119.5H129.5C132.814 119.5 135.5 116.814 135.5 113.5C135.5 110.186 132.814 107.5 129.5 107.5H61.5Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default MessageRoundSolid;
