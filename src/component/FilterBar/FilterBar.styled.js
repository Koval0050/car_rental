import styled from "styled-components";

export const FilterBarContainer = styled.div`
  width: 860px;
  display: flex;
  margin-bottom: 50px;
  margin-top: 150px;

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
