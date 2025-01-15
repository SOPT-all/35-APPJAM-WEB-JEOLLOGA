import Icon from '@assets/svgs';

import * as styles from './textBtn.css';

interface TextBtnProps {
  clicked?: boolean;
  size?: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
  onClick: () => void;
}

const TextBtn = ({
  clicked = false,
  size = 'small',
  text,
  leftIcon,
  rightIcon,
  onClick,
}: TextBtnProps) => {
  const LeftIconComponent = leftIcon ? Icon[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icon[rightIcon] : null;

  return (
    <button className={styles.textBtnStyle({ clicked, size })} onClick={onClick}>
      {LeftIconComponent && <LeftIconComponent className={styles.iconStyle({ size })} />}
      <span>{text}</span>
      {RightIconComponent && <RightIconComponent className={styles.iconStyle({ size })} />}
    </button>
  );
};

export default TextBtn;
