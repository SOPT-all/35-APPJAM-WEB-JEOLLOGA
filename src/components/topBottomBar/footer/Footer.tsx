import logoSmall from '@assets/images/logo_small.png';
import Icon from '@assets/svgs';

import * as styles from './footer.css';

const Footer = () => {
  return (
    <nav className={styles.footerContainer}>
      <div className={styles.topBox}>
        <img className={styles.logoImage} src={logoSmall} alt="logo" />
        <p className={styles.topBoxText}>Copyright 2025. Jeolloga. All rights reserved.</p>
      </div>
      <main>
        <a
          href="https://www.instagram.com/nami_amu_tabul?igsh=MTA3OHhkcmh1NDVkdQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer">
          <Icon.IcnInsta />
        </a>
        <div className={styles.contentContainer}>
          <ul className={styles.contentTitle}>
            <li>대표</li>
            <li>이메일</li>
          </ul>
          <ul className={styles.contentBody}>
            <li>조아영</li>
            <li>qq4807@naver.com</li>
          </ul>
        </div>
      </main>
      <nav className={styles.bottomContainer}>
        <a
          href="https://www.instagram.com/nami_amu_tabul?igsh=MTA3OHhkcmh1NDVkdQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer">
          개인정보처리방침
        </a>
        <Icon.IcnDivder />
        <a
          href="https://www.instagram.com/nami_amu_tabul?igsh=MTA3OHhkcmh1NDVkdQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer">
          이용약관
        </a>
      </nav>
    </nav>
  );
};

export default Footer;
