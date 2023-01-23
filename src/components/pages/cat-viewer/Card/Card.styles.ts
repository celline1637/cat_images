import styled from 'styled-components';

export const PinItem = styled.article<{ clicked: boolean }>`
  display: inline-flex;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.25s ease;
  cursor: zoom-in;
`;

export const PinImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Dimmer = styled.div<{ clicked: boolean; animation?: string }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  transition: opacity 350ms;
  will-change: opacity;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${({ animation }) => (animation === 'fadeIn' ? 'show' : 'hide')} 1.5s forwards;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ZoomedImg = styled.img<{
  animation?: string;
  clicked: boolean;
  offset: { x: number; y: number; width: number; height: number };
}>`
  width: ${({ offset }) => `${offset.width}px`};
  height: ${({ offset }) => `${offset.height}px`};
  top: ${({ offset }) => `${offset.x}px`};
  left: ${({ offset }) => `${offset.y}px`};
  position: absolute;
  animation: ${({ animation }) => animation} 1.5s forwards;
  cursor: zoom-out;

  @keyframes fadeIn {
    from {
      border-radius: 8px;
      top: ${({ offset }) => `${offset.x}px`};
      left: ${({ offset }) => `${offset.y}px`};
    }
    to {
      border-radius: 0px;
      ${({ theme }) => theme.posCenter()};
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @keyframes fadeOut {
    from {
      border-radius: 0px;
      ${({ theme }) => theme.posCenter()};
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    to {
      border-radius: 8px;
      top: ${({ offset }) => `${offset.x}px`};
      left: ${({ offset }) => `${offset.y}px`};
    }
  }
`;
