import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 720px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .background-image {
    height: 100%;
    width: 100%;
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
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: 700;
`;
