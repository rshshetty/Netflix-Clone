import React, {
  useState,
  useContext,
  Fragment,
} from "react";
import "./slider.css";
import { MovieContext } from "./../../ContextApi/MovieContext";
import Spinner from "./../Spinner/Spinner";

const PreLoadedVideo = () => {
  let MOVIES = useContext(MovieContext);

 let [Info,setInfo]=useState(false) 
 

  console.log(MOVIES);

  let info = e => {
  
  setInfo(!Info)
}




  let VIDEOBLOCK = () => (
    <section id="preLoadedBlock">
      <article>
        <aside className="videoDesc">
          <h2>Watch Season 2 now</h2>
          {Info && <p>
            Kota Factory is a story set in Kota, a hub for many coaching centres where students come from all over India to prepare for various entrance exams. It follows the life of 16-year-old Vaibhav who moves to Kota from Itarsi and shows the life of students in the city, and their efforts to get into IIT. It also stars Jitendra Kumar, Ahsaas Channa, Alam Khan and Ranjan Raj in prominent roles.
          </p>}
          <span>
            

       


            
            <button onClick={info}>
              <i class="far fa-info-circle"></i>
              More Info
            </button>
          </span>
        </aside>
        <video
      
          src={MOVIES[0].movie_video}
         
          loop
          muted
          autoPlay



        ></video>
      </article>
    </section>
  );
  return (
    <Fragment>{MOVIES.length > 0 ? <VIDEOBLOCK /> : <Spinner />}</Fragment>
  );
};

export default PreLoadedVideo;
