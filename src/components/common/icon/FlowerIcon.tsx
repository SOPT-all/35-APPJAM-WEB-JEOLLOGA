import Icon from '@assets/svgs';

interface FlowerIconProps {
  isActive?: boolean;
}

const FlowerIcon = ({ isActive = false }: FlowerIconProps) => {
  return <>{isActive ? <Icon.IcnFlowerPink /> : <Icon.IcnFlowerGray />}</>;
};

export default FlowerIcon;
