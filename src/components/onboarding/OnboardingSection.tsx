import OnboardingBtn from '@components/common/button/onboardingBtn/OnboardingBtn';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import React, { ReactNode } from 'react';

import * as styles from './onboardingSection.css';

interface OnboardingSectionProps {
  title: ReactNode;
  description: string;
  options?: string[];
  isNextDisabledInitially?: boolean;
  selectedOption: string | null;
  onSelectionChange?: (selected: string | null) => void;
  onNextClick: () => void;
}

const OnboardingSection: React.FC<OnboardingSectionProps> = ({
  title,
  description,
  options,
  isNextDisabledInitially = true,
  selectedOption,
  onSelectionChange,
  onNextClick,
}) => {
  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      onSelectionChange?.(null);
    } else {
      onSelectionChange?.(option);
    }
  };

  const isNextDisabled = isNextDisabledInitially && !selectedOption;

  return (
    <div className={styles.container}>
      <div className={styles.titleLayout}>
        <h1 className={styles.titleStyle}>{title}</h1>
        <p className={styles.descriptionStyle}>{description}</p>
      </div>

      {options && (
        <div className={styles.selectContainer}>
          {options.map((option) => (
            <OnboardingBtn
              key={option}
              btnText={option}
              isActive={selectedOption === option}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </div>
      )}
      <PageBottomBtn
        btnText="다음"
        size="large"
        isDisabled={isNextDisabled}
        onClick={onNextClick}
      />
    </div>
  );
};

export default OnboardingSection;
