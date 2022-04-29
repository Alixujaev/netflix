import React, {useContext, useRef} from "react";
import { UserContext } from "../App";

export const Header = () => {
  const {state, dispatch} = useContext(UserContext)
  const {originals} = state
  const inputRef = useRef()

  
  const handleSearch = (str) => {
    originals.results.map(item => {
      if(item.name.toLowerCase().includes(str.toLowerCase())){
        return dispatch({type: 'CHANGE_ORIGINALS', payload: item})
      }
    })
    console.log(state.originals);
  }

  // console.log(originals);
  

 
  return (
    <div className="header_content">
      <h1>Фильмы, сериалы и многое другое без ограничений.</h1>
      <h5>Смотрите где угодно. Отменить подписку можно в любое время.</h5>
      <p>
        Готовы смотреть? Введите адрес электронной почты, чтобы оформить или
        возобновить подписку.
      </p>
      <div className="header_content_search">
        <input ref={inputRef} type="text" placeholder="Название фильма.." />
        <button onClick={() => handleSearch(inputRef?.current?.value)}>Искать</button>
      </div>
    </div>
  );
};
