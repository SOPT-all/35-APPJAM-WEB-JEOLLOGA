import Icon from '@assets/svgs';

import { OnboardingBtnStyle, btnContentStyle } from './onboardingBtn.css';

interface OnboardingBtnProps {
  btnText: string;
  isActive?: boolean;
  leftIcon?: keyof typeof Icon;
}

const OnboardingBtn = ({ btnText, leftIcon, isActive = false }: OnboardingBtnProps) => {
  const SelectedLeftIcon = leftIcon ? Icon[leftIcon] : null;

  return (
    <button className={OnboardingBtnStyle({ active: isActive ? true : false })}>
      <div className={btnContentStyle}>
        {SelectedLeftIcon && <SelectedLeftIcon />}
        <p>{btnText}</p>
      </div>
    </button>
  );
};

export default OnboardingBtn;
