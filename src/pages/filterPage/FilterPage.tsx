import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import PageName from '@components/common/pageName/PageName';
import TapBar from '@components/common/tapBar/TapBar';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import titleMap from 'src/type/titleMap';

import * as styles from './filterPage.css';

const FilterPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <PageName title="필터" isLikeBtn={false} />
        <TapBar type="filter" />
      </header>
      <main className={styles.main}>
        {Object.entries(FILTERS).map(([key, items]) => (
          <div key={key}>
            <FilterBox title={titleMap[key]} items={items} id={key} />
            <Divider />
          </div>
        ))}
      </main>
      <ButtonBar type="reset" label="NN개의 템플스테이 보기" />
    </div>
  );
};

export default FilterPage;
