import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useGetCats } from '../../hooks/useGetCats';
import Card from '../../components/pages/cat-viewer/Card';
import * as S from './CatViewer.styles';

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

export default CatViewer;
