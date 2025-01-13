import tagBox from '@components/common/whyrano/tag.css';

interface TagProps {
  label: string;
  color: 'brown' | 'blue' | 'gray';
}

const Tag = ({ label, color }: TagProps) => {
  return <p className={tagBox({ color })}>{label}</p>;
};

export default Tag;
