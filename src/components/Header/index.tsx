import { MainLogo } from 'assets';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MainLogo className={styles.logo} />
        <nav className={styles['common-nav']}>
          <NavLink
            to="/"
            className={({ isActive }) => cx({ [styles.active]: isActive })}
          >
            API 통신 검색
          </NavLink>
          <NavLink
            to="/fuzzystring"
            className={({ isActive }) => cx({ [styles.active]: isActive })}
          >
            퍼지 문자열 검색
          </NavLink>
        </nav>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
