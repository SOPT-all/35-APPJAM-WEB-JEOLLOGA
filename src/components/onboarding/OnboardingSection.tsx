import OnboardingBtn from '@components/common/button/onboardingBtn/OnboardingBtn';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import React from 'react';

interface OnboardingSectionProps {
  stepId: string;
  title: string;
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
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {options && (
        <div>
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
