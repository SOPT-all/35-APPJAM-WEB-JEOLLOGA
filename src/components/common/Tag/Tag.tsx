import tagBox from '@components/common/Tag/tag.css';

interface TagProps {
  label: string;
  color?: 'brown' | 'blue' | 'gray';
}

const Tag = ({ label, color = 'brown' }: TagProps) => {
  return <p className={tagBox({ color })}>{label}</p>;
};

export default Tag;
