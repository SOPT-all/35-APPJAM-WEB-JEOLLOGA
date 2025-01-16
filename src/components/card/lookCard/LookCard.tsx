import BasicBtn from '@components/common/button/basicBtn/BasicBtn';

import * as styles from './lookCard.css';

interface LookCardProps {
  name: string;
}

const LookCard = ({ name }: LookCardProps) => {
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
            variant="green"
            label="둘러보기"
            size="large"
            isActive={true}
            rightIcon="IcnLineArrowLargeRight"
          />
        </div>
      </div>
    </section>
  );
};

export default LookCard;
