import useIntersectionObserver from '../hooks/useIntersectionObserver';
import React from 'react';
import { useState } from 'react';
import { Cat, useGetCats } from '../hooks/useGetCats';
import * as S from './CatViewer.styles';
import { forwardRef } from 'react';

function CatViewer() {
  const { data, fetchNextPage, hasNextPage } = useGetCats();

  const observeElement = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observeElement();
      observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    onIntersect,
  });

  return (
    <S.CatViewer>
      <S.ImgWrapper>
        {data?.map((info, i) => (
          <Card key={info.id} ref={data?.length === i + 1 ? setTarget : null} {...info} />
        ))}
      </S.ImgWrapper>
    </S.CatViewer>
  );
}

const Card = forwardRef<HTMLDivElement, Cat>(({ url, id }, ref) => {
  const [clicked, setClicked] = useState(false);
  const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>(null);
  const [offset, setOffSet] = useState({ x: 0, y: 0, width: 0, height: 0, transform: '' });
  return (
    <>
      <S.PinItem
        ref={ref}
        clicked={clicked}
        onClick={({ currentTarget }) => {
          setClicked((prev) => !prev);
          setAnimation('fadeIn');
          const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
          const scrollLeft =
            window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft ||
            0;

          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const zoomTarget = currentTarget.getBoundingClientRect();
          const top = zoomTarget.top;
          const left = zoomTarget.left;
          const width = zoomTarget.width;
          const height = zoomTarget.height;

          const scaleX = Math.min(Math.max(width, screenWidth), screenWidth) / width;
          const scaleY = Math.min(Math.max(height, screenHeight), screenHeight) / height;
          const scale = Math.min(scaleX, scaleY);
          const translateX = (-left + (screenWidth - width) / 2) / scale;
          const translateY = (-top + (screenHeight - height) / 2) / scale;
          const transform = 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';

          setOffSet({
            x: top + scrollTop,
            y: left + scrollLeft,
            width,
            height,
            transform,
          });
        }}
      >
        <S.PinImg src={url} alt={id} />
      </S.PinItem>
      {clicked && (
        <S.Dimmer
          animation={animation}
          clicked={clicked}
          onClick={() => {
            setTimeout(() => setClicked((prev) => !prev), 1500);
            setAnimation('fadeOut');
          }}
        >
          <S.ZoomedImg animation={animation} clicked={clicked} offset={offset} src={url} alt={id} />
        </S.Dimmer>
      )}
    </>
  );
});

export default CatViewer;
