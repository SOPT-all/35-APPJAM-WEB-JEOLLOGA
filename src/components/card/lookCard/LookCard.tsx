import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import { useNavigate } from 'react-router-dom';

import * as styles from './lookCard.css';

interface LookCardProps {
  name: string;
}

const LookCard = ({ name }: LookCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/look'); // 추후 변경예정
  };

  return (
    <section className={styles.cardWrapper}>
      <div className={styles.textBox}>
        <span>
          <span className={styles.name}>{name}</span> 님은
          <br />
          어떤 템플스테이를
          <br />
          원하시나요?
        </span>
        <div>
          <BasicBtn
            onClick={handleClick}
            variant="green"
            label="둘러보기"
            size="large"
            rightIcon="IcnLineArrowLargeRight"
          />
        </div>
      </div>
    </section>
  );
};

export default LookCard;
