import { imageContainer, imageWrapper, imageStyle, numberStyle } from './mainImage.css';
import NumberTag from './numberTag/NumberTag';

const mainImageData = {
  total: 4,
  templestayImgs: [
    {
      id: 1,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12916.png',
    },
    {
      id: 2,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      id: 3,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12915.png',
    },
    {
      id: 4,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_12904.png',
    },
  ],
};

const MainImage = () => {
  return (
    <div className={imageWrapper}>
      {mainImageData.templestayImgs.map((image) => (
        <div className={imageContainer} key={image.id}>
          <img className={imageStyle} src={image.imgUrl} alt={`Templestay ${image.id}`} />
          <div className={numberStyle}>
            <NumberTag currentNum={image.id} totalNum={mainImageData.total} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainImage;
