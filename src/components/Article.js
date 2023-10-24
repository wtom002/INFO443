import React, { useReducer } from "react";
import { NavDropdown } from "react-bootstrap";

// Right now we are linking all of the cards to this article page however, once we set up the WorkoutCardList page, it will render
// all of the cards to create new aritcle pages so this is just temporary. We already set up Firebase that stores all of the user
// data from the Upload page. 

export default function Article() {
  return(
    <main style={{backgroundColor: '#1d4b52'}}>
    <div className="article-body">
      <img src="/img/legPress.jpeg" alt="Leg Press Image"></img>
      <div className="article-text">
        <h2>Quad Crusher</h2>
        <b> Posted By: FitFury</b>
        <h6>Leg press workout focused on building quadriceps strength and power.</h6>

        <ul>
          <b> Step 1:</b>
          <li> Brace your abdominal muscles and push the platform away with your heels and forefoot. Your heels should remain flat on the footplate. The front of your foot or toes should never be used exclusively to move the pad forward.</li>
          <b> Step 2:</b>
          <li>While exhaling, extend your legs and keep your head and back flat against the seat pad. Extend with slow control rather than with an explosive movement.</li>
          <b> Step 3:</b>
          <li>While inhaling, return the footplate to the starting position by gradually bnding the knees. Keep the feet and back flat throughout.</li>
        </ul>

        <b>
          Exercise Tags:
        </b>

        <ul>
          <a href="#"className="card-link" aria-label="Legs">Legs</a>
          <a href="#"className="card-link" aria-label="Machine">Machine</a>
          <a href="#"className="card-link" aria-label="High Intensity">High Intensity</a>
        </ul>

      </div>
    </div>
    </main>
  );
}