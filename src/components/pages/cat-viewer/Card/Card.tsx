import React, { forwardRef, useState } from 'react';
import { Cat } from '../../../../hooks/useGetCats';
import { getPosition } from '../../../../utils/getPosition';
import * as S from './Card.styles';

const Card = forwardRef<HTMLDivElement, Cat>(({ url, id }, ref) => {
  const [clicked, setClicked] = useState(false);
  const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>(null);
  const [offset, setOffSet] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleClickItem = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    setClicked((prev) => !prev);
    setAnimation('fadeIn');
    const position = getPosition(currentTarget);
    setOffSet(position);
  };

  const handleClickDimmer = () => {
    setTimeout(() => setClicked((prev) => !prev), 1500);
    setAnimation('fadeOut');
  };

  return (
    <>
      <S.PinItem ref={ref} clicked={clicked} onClick={handleClickItem}>
        <S.PinImg src={url} alt={id} />
      </S.PinItem>
      {clicked && (
        <S.Dimmer animation={animation} clicked={clicked} onClick={handleClickDimmer}>
          <S.ZoomedImg animation={animation} clicked={clicked} offset={offset} src={url} alt={id} />
        </S.Dimmer>
      )}
    </>
  );
});

export default Card;
