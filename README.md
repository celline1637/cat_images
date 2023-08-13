## Installation

- `package.json`이 위치한 폴더에서 `npm install && npm start` 명령을 하면 http://localhost:3000/ 에 리액트 페이지가 실행됩니다.

## File Structure

전체 파일 구조는 다음과 같습니다.

공용컴포넌트 및 페이지 관련 컴포넌트를 분리하고,
state와 theme, type 관련 값들을 각각 나누어 관리하였습니다.

```
├── public
├── src/
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── theme
│   ├── types
│   └── utils
├── App.tsx
└── Routes.tsx
```

## Stack

- React
- React Router DOM v6
- typescripts : 정적 언어인 typescripts를 사용하여, js의 언어적 단점을 보완하였습니다.
- styled-components
- redux, rtk : react-query와 함께 사용하여 client state(global state)를 관리하기 위해 사용하였습니다.
- react-query : react-query를 사용하여 server state의 비동기를 처리하였습니다.
- axios

## Feature

### /cat-viewer
클릭한 이미지 위치를 기준으로 fadeIn&fadeOut되어 미리보기가 나타납니다.
![고양이 미리보기](https://github.com/celline1637/cat_images/assets/77728308/4ae1a8b7-d5b8-4875-b0ef-9e6db84ee7ee)

### /working-hour
