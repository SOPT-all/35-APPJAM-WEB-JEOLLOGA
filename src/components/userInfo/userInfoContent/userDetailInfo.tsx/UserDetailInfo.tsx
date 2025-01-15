import * as styles from './userDetailInfo.css';

interface MemberInfoProps {
  ageRange: string;
  gender: string;
  religion: string;
}

const MemberInfo = ({ ageRange, gender, religion }: MemberInfoProps) => (
  <div className={styles.infoDetailContainer}>
    <div className={styles.infoDetailBox}>
      <p className={styles.infoDetailTitle}>연령대</p>
      <p className={styles.infoDetailData}>{ageRange}</p>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.infoDetailBox}>
      <p className={styles.infoDetailTitle}>성별</p>
      <p className={styles.infoDetailData}>{gender}</p>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.infoDetailBox}>
      <p className={styles.infoDetailTitle}>종교</p>
      <p className={styles.infoDetailData}>{religion}</p>
    </div>
  </div>
);

export default MemberInfo;
