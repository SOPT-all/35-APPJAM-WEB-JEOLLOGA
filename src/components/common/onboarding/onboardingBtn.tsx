import Icon from '@assets/svgs';

import { onboardingBtnStyle, btnContentStyle } from './onboardingBtn.css';

interface onboardingBtnProps {
  btnText: string;
  isActive?: boolean;
  leftIcon?: keyof typeof Icon;
}

const onboardingBtn = ({ btnText, leftIcon, isActive = false }: onboardingBtnProps) => {
  const SelectedLeftIcon = leftIcon ? Icon[leftIcon] : null;

  return (
    <button className={onboardingBtnStyle({ active: isActive ? true : false })}>
      <div className={btnContentStyle}>
        {SelectedLeftIcon && <SelectedLeftIcon />}
        <p>{btnText}</p>
      </div>
    </button>
  );
};

export default onboardingBtn;
