import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 720px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .background-image {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    z-index: -1;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: 700;
`;
