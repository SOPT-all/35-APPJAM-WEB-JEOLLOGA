import btnStyle from '@components/common/button/popupBtn/popup.css';

interface PopupBtnProps {
  color: 'green' | 'gray';
  label: string;
}

const PopupBtn = ({ color, label }: PopupBtnProps) => {
  return <button className={btnStyle({ color })}>{label}</button>;
};

export default PopupBtn;
