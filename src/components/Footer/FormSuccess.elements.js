import styled from "styled-components";

export const FormSuccessContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: solid white 1px;
  border-radius: 30px;
  @media screen and (max-width: 820px) {
    padding: 30px;
  }
`;
