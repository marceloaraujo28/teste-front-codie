import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 104px;
  padding: 0 83px;
  background-color: ${(props) => props.theme.colors.white};
`;
