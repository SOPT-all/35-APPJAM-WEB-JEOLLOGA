import { useNavigate } from 'react-router-dom';

const useNavigateToPrev = () => {
  const navigate = useNavigate();

  return () => navigate(-1);
};

export default useNavigateToPrev;
