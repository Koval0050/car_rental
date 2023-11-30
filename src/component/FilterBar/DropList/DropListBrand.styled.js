import styled from "styled-components";
import Arrow from "../../../icon/arrow.svg";
export const DropListBrandStyle = styled.div`
  position: relative;
  width: ${(props) => props.w};
  border: 1px solid rgba(247, 247, 251, 1);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px;

  padding: 14px 18px;
  font-family: "Manrope";

  .hida {
    font-weight: 500;
    font-size: 18px;
    line-height: calc(20 / 18);
  }

  .arrow {
    position: absolute;
    top: 14px;
    right: 18px;
    border-color: transparent;
    background-color: transparent;
  }

  .select {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 10%);
    z-index: 2;
    padding: 14px 18px;
    border-radius: 14px;
    height: 272px;
    width: 224px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(18, 20, 23, 0.05);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }
  .selectList {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .selectItemButton {
    border-color: transparent;
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(20 / 16);
    color: rgba(18, 20, 23, 0.2);
    transition: color 0.3s ease;
    &:hover {
      color: rgba(18, 20, 23, 0.7);
    }
  }
`;
/* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 50%;
  border: 1px solid rgba(247, 247, 251, 1);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px;
  min-width: ${(props) => props.w};
  padding: 14px 18px;
  font-family: "Manrope";

  &.option {
    background-color: rgba(247, 247, 251, 1);
    border-radius: 14px;
  }  */
