import { useParams } from "react-router-dom";

export const AllCard = ({originals}) => {
  let { id } = useParams();

  return (
    originals.results.length
    ? originals.results.map((item) => {
        if (item.id.toString() == id) {
          return (
            <div className="page_card">
              <h1>{item.name}</h1>
              <img
                className="card_img"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="img"
              />
              <div className="page_card_desc">
                <p><i>Premiera: </i>{item.first_air_date}</p>
                <div>
                  <p><i>Country:</i> {item.origin_country.join()}</p>
                  <p><i>Language:</i> {item.original_language}</p>
                </div>
              </div>
              <h3>{item.overview}</h3>
              <img
                className="card_img"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="img"
              />
            </div>
          );
        }
      })
    :  <h1>Nothing found</h1>
  )
}
