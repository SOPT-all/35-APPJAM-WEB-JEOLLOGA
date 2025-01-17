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
  //   stepId,
  title,
  description,
  options,
  isNextDisabledInitially = true,
  selectedOption,
  onSelectionChange,
  onNextClick,
}) => {
  //   const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    console.log(`옵션 선택됨: ${option}`);
    // setSelectedOption(option);
    onSelectionChange?.(option);
  };

  //   console.log(`현재 선택된 옵션: ${selectedOption}`);
  //   console.log(`isNextDisabled: ${isNextDisabled}`);
  //   const isNextDisabled = isNextDisabledInitially && !selectedOption;
  const isNextDisabled = isNextDisabledInitially && !selectedOption;
  console.log(`현재 선택된 옵션: ${selectedOption}`);
  console.log(`isNextDisabled: ${isNextDisabled}`);

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
