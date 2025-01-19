import * as styles from './userInfoSection.css';

interface UserInfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const UserInfoSection = ({ title, children }: UserInfoSectionProps) => (
  <section className={styles.userInfoStyle}>
    <h3 className={styles.infoStepStyle}>{title}</h3>
    <div>{children}</div>
  </section>
);

export default UserInfoSection;
