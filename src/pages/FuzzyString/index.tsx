import { SubscriptionImage, SubscriptionImageSm } from 'assets';

import Footer from 'components/Footer';
import FuzzySearchInput from 'components/FuzzySearchInput';
import Header from 'components/Header';

import styles from './fuzzy-string.module.scss';

function FuzzyString() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.search}>
          <span className={styles.title}>Fuzzy String Matching</span>
          <h1 className={styles.title}>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h1>
          <FuzzySearchInput />
        </section>
        <section className={styles.subscription}>
          <div className={styles.content}>
            <div className={styles.description}>
              <p className={styles.desc}>
                새로운 임상시험이 등록되면
                <span className={styles.wordbreak}> 문자로 알려드려요.</span>
              </p>
              <button className={styles.button} type="button">
                임상시험 소식 받기
              </button>
            </div>
            <SubscriptionImage className={styles.image} />
            <SubscriptionImageSm className={styles['image-sm']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FuzzyString;
