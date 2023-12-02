import styled from 'styled-components';

export const CarsCardListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;

  .listItem {
    position: relative;
  }

  .heart {
    position: absolute;
    right: 14px;
    top: 14px;
    background-color: transparent;
    border: 1px solid transparent;
    fill: #fff;
  }
  .heart:hover {
    cursor: pointer;
  }
  .heart.active {
    fill: rgba(52, 112, 255, 1);
  }
  .carImg {
    display: block;
    width: 274px;
    height: 268px;
    border-radius: 14px;
  }
  .carDiscribe {
    margin-top: 14px;
    margin-bottom: 28px;
  }
  .carName {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 8px;
  }
  .carTags {
    width: 274px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    line-height: calc(18 / 12);
    color: rgba(18, 20, 23, 0.5);
  }
`;
