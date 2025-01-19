import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import * as styles from '@components/search/recentBtn/recentBtnBox.css';

const RecentBtnBox = ({ data }: { data: { id: number; content: string }[] }) => {
  return (
    <div className={styles.recentBtnBox}>
      {data.length > 0 ? (
        data.map((item) => (
          <BasicBtn
            key={item.id}
            label={item.content}
            variant="lightGrayOutlined"
            size="small"
            rightIcon="IcnCloseSmallGray"
          />
        ))
      ) : (
        <p className={styles.emptyResult}>최근 검색 내역이 없어요</p>
      )}
    </div>
  );
};

export default RecentBtnBox;
