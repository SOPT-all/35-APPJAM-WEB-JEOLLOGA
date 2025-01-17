import ButtonBar from '@components/common/button/buttonBar/ButtonBar';
import Divider from '@components/common/divider/Divider';
import PageName from '@components/common/pageName/PageName';
import TapBar from '@components/common/tapBar/TapBar';
import FilterBox from '@components/filter/filterBox/FilterBox';
import FILTERS from '@constants/filters';
import titleMap from 'src/type/titileMap';

const FilterPage = () => {
  return (
    <div>
      <PageName title="필터" isLikeBtn={false} />
      <TapBar type="filter" />
      {Object.entries(FILTERS).map(([key, items]) => (
        <div key={key}>
          <FilterBox title={titleMap[key]} items={items} />
          <Divider />
        </div>
      ))}
      <ButtonBar type="reset" label="NN개의 템플스테이 보기" />
    </div>
  );
};

export default FilterPage;
