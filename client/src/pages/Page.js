import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { AllCard } from "../components/AllCard";
import Navbar from "../components/Navbar";
import { SelectedCard } from "../components/SelectedCard";

export const Page = () => {
  let { id } = useParams();
  const { state, dispatch } = useContext(UserContext);
  const { originals } = state;

  return (
    <div className="container page">
      <Navbar/>
      {originals.results ? <AllCard originals={state.originals}/> : <SelectedCard item={state.originals}/>}
    </div>
  );
};
