import HomeClient from '@app/HomeClient';
import RecommendTempleClient from '@app/RecommendTempleClient';
import Icon from '@assets/svgs';
import MainBanner from '@components/banner/MainBanner';
import DetailTitle from '@components/detailTitle/DetailTitle';
import FilterTypeBox from '@components/filter/filterTypeBox/FilterTypeBox';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import TestBanner from '@components/test/testBanner/TestBanner';
import { cookies } from 'next/headers';
import Link from 'next/link';

import * as styles from './homePage.css';

const HomePage = async () => {
  const cookieStore = await cookies();
  const userName = cookieStore.get('userNickname')?.value;
  const hasType = cookieStore.get('hasType')?.value;

  const isLoggedIn = !!userName;

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <Link href="/search" className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          placeholder="찾으시는 템플스테이의 키워드를 검색해보세요"
          readOnly
        />
        <Icon.IcnSearchMediumGray />
      </Link>

      <FilterTypeBox activeFilters={[]} />

      <MainBanner />

      <section id="recommend">
        <RecommendTempleClient isLoggedIn={isLoggedIn} />
      </section>

      {hasType !== 'true' && (
        <div className={styles.testBannerWrapper}>
          <TestBanner />
        </div>
      )}

      <div className={styles.popularCarouselStyle}>
        <DetailTitle
          title="이번 주 인기 템플스테이"
          subtitle="다른 분들은 어떤 템플스테이를 가장 좋아할까요?"
        />
        <HomeClient /> {/* 인기 템플스테이 캐러셀 */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
