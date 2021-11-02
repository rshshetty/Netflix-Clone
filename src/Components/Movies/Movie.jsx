import React from "react";
import { withRouter, Link } from "react-router-dom";
const Movie = props => {
  console.log(props.location.state.movie_rating);
  let {
    id,
    movie_name,
    movie_poster,
    movie_video,
    movie_desc,
    movie_cast,
    movie_year,
    movie_genre,
    movie_rating,
    movie_certificate,
  } = props.location.state;
 
  return (
    <section id="portalBlock">
      <article>
        <header>
<p className="back_button" style={{right:"100%",position:"absolute"}}>
          <Link to="/">
            <i
              className="fas fa-long-arrow-left"
              style={{ fontSize: 40, color: "white" }}
            ></i>
          </Link>
        </p>
          
          <Link
            to={{
              pathname: `/movies/${movie_name}/${id}`,
              state: { ...props.location.state },
            }}
          >
             <button className="popup_play"><i className="fas fa-play"></i><br/>Play</button>
         
          </Link>
          <img src={movie_poster} alt={movie_name} />
           
          <div className="pop-desc">
          <h2>{movie_name} 
         </h2>
         <p>
           <span className="space">{movie_certificate}</span><span className="space">{movie_genre}</span></p>
       
          <p style={{fontSize:"20px"}}>{movie_cast}</p>
          <p>
           
           {movie_desc}
          </p></div>
        </header>
        <main></main>
        <footer></footer>
      </article>
    </section>
  );
};

export default withRouter(Movie);