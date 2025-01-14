import logoSmall from '@assets/images/logo_small.png';
import Icon from '@assets/svgs';

import * as styles from './topBar.css';

const Topbar = () => {
  const handleClick = () => {};

  return (
    <nav className={styles.topBarContainer}>
      <button onClick={handleClick}>
        <img className={styles.logoImage} src={logoSmall} alt="logo" />
      </button>
      <div className={styles.iconBox}>
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={() => handleClick()} />
        <Icon.IcnWish className={styles.iconStyle} onClick={() => handleClick()} />
        <Icon.IcnMyPage className={styles.iconStyle} onClick={() => handleClick()} />
      </div>
    </nav>
  );
};

export default Topbar;
