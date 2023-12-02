import styled from "styled-components";

export const FilterBarContainer = styled.div`
  width: 860px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  column-gap: 18px;
  margin-bottom: 50px;

  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  .selectorContainer{}
  
  .selectDiscribe {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: rgba(138, 138, 137, 1);
    margin-bottom: 8px;
  }
`;
