import rankBox from '@components/card/popularCard/rankBtn.css';

interface RankBtnProps {
  ranking: number;
}

const RankBtn = ({ ranking }: RankBtnProps) => {
  return <span className={rankBox}>{ranking}</span>;
};

export default RankBtn;
