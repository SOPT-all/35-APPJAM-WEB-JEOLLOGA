import { useNavigate, useSearchParams } from 'react-router-dom';

interface FunnelProps<Steps extends readonly string[]> {
  steps: Steps;
  stepQueryKey?: string;
  initialStep?: Steps[number];
}

type SetStepOptions = {
  stepChangeType?: 'push' | 'replace';
  preserveQuery?: boolean;
  query?: Record<string, string | number>;
};

const useFunnel = <Steps extends readonly string[]>(steps: Steps, options?: FunnelProps<Steps>) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const stepQueryKey = options?.stepQueryKey || 'onboarding-step';
  const initialStep = options?.initialStep || steps[0];

  const currentStep = (searchParams.get(stepQueryKey) as Steps[number]) || initialStep;

  const setStep = (step: Steps[number], opts?: SetStepOptions) => {
    const { preserveQuery = true, query = {}, stepChangeType = 'push' } = opts || {};

    const updatedParams = new URLSearchParams(preserveQuery ? searchParams : undefined);
    updatedParams.set(stepQueryKey, step);

    Object.entries(query).forEach(([keyframes, value]) => {
      updatedParams.set(keyframes, String(value));
    });

    const path = `?${updatedParams.toString()}`;

    if (stepChangeType === 'replace') {
      navigate(path, { replace: true });
    } else {
      navigate(path);
    }
  };

  return { currentStep, setStep };
};

export default useFunnel;
