import { MainLogo } from 'assets';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MainLogo className={styles.logo} />
        <nav className={styles['common-nav']}>
          <Link to="/" className={styles.link}>
            API 통신 검색
          </Link>
          <Link to="fuzzystring" className={styles.link}>
            퍼지 문자열 검색
          </Link>
        </nav>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
