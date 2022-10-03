import Icon, { IconProps } from '../Icon';

const EyeDropper = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M139.744 36.9289C135.838 33.0237 129.507 33.0237 125.602 36.9289L114.549 47.9813C114.26 48.2702 113.993 48.5724 113.747 48.8859L108.34 43.4792C105.997 41.1361 102.198 41.1361 99.8547 43.4792C97.5116 45.8224 97.5116 49.6214 99.8547 51.9645L105.535 57.645L44.8823 118.521L44.8787 118.518L37.5809 125.815C36.5532 126.413 35.7779 127.467 35.6322 128.843L33.0228 153.483C32.7546 156.016 34.8895 158.15 37.4218 157.882L62.0616 155.273C63.4386 155.127 64.4929 154.351 65.0908 153.322L72.3868 146.027L72.3163 145.956L133.081 85.1911L141.931 94.0411C144.274 96.3842 148.073 96.3842 150.417 94.0411C152.76 91.6979 152.76 87.8989 150.417 85.5558L143.864 79.0031C144.177 78.757 144.48 78.4894 144.768 78.2005L155.821 67.1482C159.726 63.243 159.726 56.9113 155.821 53.0061L139.744 36.9289ZM63.8312 137.471L124.596 76.7058L114.021 66.1303L53.3675 127.007L63.8312 137.471Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default EyeDropper;
