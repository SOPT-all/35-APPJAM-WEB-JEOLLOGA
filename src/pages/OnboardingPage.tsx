import ProgressBar from '@components/common/progressBar/ProgressBar';
import OnboardingSection from '@components/onboarding/OnboardingSection';
import BUTTON_TEXTS from '@constants/onboarding/buttonTexts';
import { ONBOARDING_STEPS, COMMON_DESCRIPTION } from '@constants/onboarding/onboardingSteps';
import useFunnel from '@hooks/useFunnel';
import React, { useState, useEffect } from 'react';

const OnboardingPage: React.FC = () => {
  const { Funnel, Step, nextStep, prevStep, currentStep } = useFunnel(
    ONBOARDING_STEPS.map((step) => step.id),
    '/welcome',
  );

  const [selections, setSelections] = useState<Record<string, string | null>>(() => {
    const savedSelections = localStorage.getItem('onboardingSelections');
    return savedSelections
      ? JSON.parse(savedSelections)
      : { 나이: null, 성별: null, 종교: null, 이용경험: null };
  });

  const [userName] = useState<string>('');

  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  useEffect(() => {
    if (isInitialLoad) {
      setSelections((prev) => ({
        ...prev,
        [currentStep]: null,
      }));
      setIsInitialLoad(false);
    }
  }, [isInitialLoad, currentStep]);

  useEffect(() => {
    localStorage.setItem('onboardingSelections', JSON.stringify(selections));
  }, [selections]);

  const handleSelectionChange = (stepId: string, selected: string | null) => {
    setSelections((prev) => ({ ...prev, [stepId]: selected }));
  };

  const handleFinalSubmit = () => {
    localStorage.removeItem('onboardingSelections');
  };

  return (
    <div>
      <ProgressBar
        currentStep={ONBOARDING_STEPS.findIndex((step) => step.id === currentStep) + 1}
        totalSteps={ONBOARDING_STEPS.length}
        onBackClick={prevStep}
      />
      <Funnel steps={ONBOARDING_STEPS.map((step) => step.id)}>
        {ONBOARDING_STEPS.map(({ id, title }) => (
          <Step key={id} name={id}>
            <OnboardingSection
              id={id}
              /* eslint-disable */
              title={
                id === '나이' || id === '성별'
                  ? [`${userName}님의`, <br key="line-break" />, title]
                  : title.includes('\n')
                    ? title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : title
              }
              /* eslint-enable */
              description={COMMON_DESCRIPTION}
              options={BUTTON_TEXTS[id as keyof typeof BUTTON_TEXTS]}
              isNextDisabledInitially={id === '나이' || id === '성별'}
              selectedOption={selections[id]}
              onSelectionChange={(selected) => handleSelectionChange(id, selected)}
              onNextClick={id === '이용경험' ? handleFinalSubmit : nextStep}
            />
          </Step>
        ))}
      </Funnel>
    </div>
  );
};

export default OnboardingPage;
