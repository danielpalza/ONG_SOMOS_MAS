import styled from "styled-components";

export default styled.div `
  display: block;
  height: 170px;
  width: 50%;
  margin: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`;