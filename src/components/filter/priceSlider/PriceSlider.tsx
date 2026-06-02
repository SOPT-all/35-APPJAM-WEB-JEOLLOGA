'use client';
import debounce from '@hooks/debounce';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as styles from './priceSlider.css';

interface Price {
  minPrice: number;
  maxPrice: number;
}

interface PriceSliderProps {
  value: Price;
  onChange: (price: Price) => void;
}

const PriceSlider = ({ value, onChange }: PriceSliderProps) => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 30;
  const [localPrice, setLocalPrice] = useState<Price>(value);

  // 외부 값이 바뀌면 로컬 상태 동기화
  useEffect(() => {
    setLocalPrice(value);
  }, [value]);

  // onChange가 매 렌더 새로 와도 debounce 인스턴스는 유지하고 최신 onChange를 호출
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const handleDebounceSetPrice = useCallback(
    debounce((updatedPrice: Price) => {
      onChangeRef.current(updatedPrice);
    }, 300),
    [],
  );

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), localPrice.maxPrice - 1);
    const updatedLocalPrice = { ...localPrice, minPrice: value };

    setLocalPrice(updatedLocalPrice);
    handleDebounceSetPrice(updatedLocalPrice);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), localPrice.minPrice + 1);
    const updatedLocalPrice = { ...localPrice, maxPrice: value };

    setLocalPrice(updatedLocalPrice);
    handleDebounceSetPrice(updatedLocalPrice);
  };

  const getTrackStyle = () => ({
    left: `${((localPrice.minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
    width: `${((localPrice.maxPrice - localPrice.minPrice) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
  });

  return (
    <section>
      <p className={styles.descriptionStyle}>*1인 프로그램 신청 기준</p>
      <div className={styles.priceSlider}>
        <p className={styles.titleStyle}>
          {localPrice.minPrice}만원 ~ {localPrice.maxPrice}만원
        </p>

        <div className={styles.sliderContainer}>
          <div className={styles.track}>
            <div className={styles.highlight} style={getTrackStyle()} />
          </div>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={localPrice.minPrice}
            onChange={handleMinChange}
            className={styles.thumb}
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={localPrice.maxPrice}
            onChange={handleMaxChange}
            className={styles.thumb}
          />
        </div>
        <div className={styles.priceBox}>
          <p className={styles.textStyle({ align: 'left' })}>{`${MIN_PRICE}원`}</p>
          <p className={styles.textStyle({ align: 'center' })}>{`${MAX_PRICE / 2}만원`}</p>
          <p className={styles.textStyle({ align: 'right' })}>{`${MAX_PRICE}만원 이상`}</p>
        </div>
      </div>
    </section>
  );
};

export default PriceSlider;
