import React, { useState, useEffect, useReducer, useRef } from "react";
import {
  Item,
  Contenedor,
  CorredorImagenes,
  Navigation,
  NavigationItem,
  Izquierda,
  Derecha,
} from "./styles";
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  /* Efecto usado para adecuar el tamaño del card */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}
const Slider = (props) => {
  const width = useWindowWidth();
  /* Utilizo Redux para almacenar el Indice de la imagen */
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: props.items
  });

  return (
    <div>
      <Contenedor className={"slider-instance"} height={"500px"}>
        <CorredorImagenes
          width={width * state.items.length}
          style={{
            transform: `translateX(${-(state.currentIndex * width)}px)`,
            transition: "transform ease-out 0.30s",
            width: width * state.items.length + "px"
          }}
        >
          {state.items.map((i, index) => {
            return (
              <Slide
                key={i.id}
                last={index === state.items.length - 1}
                index={index}
                item={i}
                dispatch={dispatch}
                snap={state.snap}
                width={width}
              />
            );
          })}
        </CorredorImagenes>

        <Navigation>
          {state.items.map((i, index) => {
            return (
              <NavigationItem
                active={index === state.currentIndex}
                onClick={() => dispatch({ type: "GOTO", index })}
                key={"nav" + i.id}
              >
                
              </NavigationItem>
            );
          })}
        </Navigation>
        <div>
          {state.currentIndex > 0 ? (
            <Izquierda onClick={() => dispatch({ type: "PREV" })}>
              Anterior
            </Izquierda>
          ) : (
            ""
          )}
          {state.currentIndex < state.items.length - 1 ? (
            <Derecha onClick={() => dispatch({ type: "NEXT" })}>
              Siguiente
            </Derecha>
          ) : (
            ""
          )}
        </div>
      </Contenedor>
    </div>
  );
};
function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length)
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length)
      };
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index
      };
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 };

    default:
      return state;
  }
}

const Slide = ({ item, width }) => {
  return (
    <Item width={width} style={{alignItems:'center',justifyContent:'center',alignContent:'center'}}>
      <img src={item.img} style={{width:1400}}></img>
    </Item>
  );
};

export default Slider;