import * as styles from './nameContent.css';

interface TopInfoProps {
  nickname: string;
  email: string;
}

const TopInfo = ({ nickname, email }: TopInfoProps) => (
  <div className={styles.topInfoStyle}>
    <div className={styles.userNameStyle}>
      <h2>{nickname}</h2>
      <h2>님</h2>
    </div>
    <p className={styles.userEmailStyle}>{email}</p>
  </div>
);

export default TopInfo;
