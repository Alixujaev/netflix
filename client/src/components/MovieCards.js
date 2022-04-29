import React from "react";
import { Movies } from "./Movies";

export const MovieCards = ({ movie }) => {
  return (
      <div className="movie_cards">
        {movie.length ? movie.map((item) => (
          <Movies key={item.id} item={item} />
        )) : <Movies key={movie.id} item={movie} />}
    </div>
  );
};
