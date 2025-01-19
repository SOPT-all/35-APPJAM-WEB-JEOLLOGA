import * as styles from './accountAction.css';

interface HelpSectionProps {
  onLogoutClick: () => void;
  onDeleteClick: () => void;
}

const AccountActions = ({ onLogoutClick, onDeleteClick }: HelpSectionProps) => (
  <div className={styles.accountActionBoxStyle}>
    <button className={styles.accountActionButtonStyle} onClick={onLogoutClick}>
      로그아웃
    </button>
    <div className={styles.smallDivider}></div>
    <button className={styles.accountActionButtonStyle} onClick={onDeleteClick}>
      탈퇴하기
    </button>
  </div>
);

export default AccountActions;
