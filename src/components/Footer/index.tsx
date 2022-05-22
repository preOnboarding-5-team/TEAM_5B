import { KIDSLogo } from 'assets';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles['left-section']}>
          <h5 className={styles.name}>(주)휴먼스케이프</h5>
          <h5 className={styles.address}>
            서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자:
            장민후
          </h5>
          <h5 className={styles.copyrights}>
            © 2021 Humanscape, All rights reserved.
          </h5>
          <img src={KIDSLogo} alt="kids-logo" />
        </section>
        <section className={styles['right-section']}>
          <a href="/" className={styles.terms}>
            개인정보처리방침
          </a>
          <h5 className={styles.slogan}>
            Living healthier by connecting better
          </h5>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
