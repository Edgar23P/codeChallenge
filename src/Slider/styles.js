import styled, { css } from "styled-components";

export const Contenedor = styled.div`
  position: relative;
  background: #fafafa;
  overflow: hidden;
  width: 100%;
  height: ${props => props.height || "500px"};
`;

export const CorredorImagenes= styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  position: relative;
  height: 500px;
  width: ${props => props.width + "px" || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const Navigation = styled.ul`
  position: absolute;
  bottom: 10px;
  margin: 0;
  padding: 0;
  left: 0;
  display: flex;
`;

export const NavigationItem = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  background: #f00;
  border-radius: 100%;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      background: #000;
    `};
`;

export const Control = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
`;

export const Izquierda = styled(Control)`
  left: 0;
  width: 60px;
  height: 20px;
  background: #ffffff;
`;
export const Derecha = styled(Control)`
  right: 0;
  width: 60px;
  height: 20px;
  background: #ffffff;
`;