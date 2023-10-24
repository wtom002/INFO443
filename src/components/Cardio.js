import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import { WorkoutCardList } from "./WorkoutCardList";
import { getDatabase, ref, child, get } from "firebase/database";

// We will add a filter where the WorkoutCardList will only show cards that have Cardio as the first tag. 
export default function Cardio() { 
    const [cardioSnapshotArray, setCardioSnapshotArray] = useState([]);

useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Cardio')).then((snapshot) => {
        const cardioSnapshot = snapshot.val();
        const cardioSnapshotKeys = Object.keys(cardioSnapshot);
        const cardioSnapshotArray = cardioSnapshotKeys.map((key) => {
            const singlePostCopy = {...cardioSnapshot[key]};
            singlePostCopy.key = key;
            return singlePostCopy;
        });
        setCardioSnapshotArray(cardioSnapshotArray);
    });
}, []);

    // make the array from getDB object
    //db.ref(db, "Cardio");
    //const [renderedCardsArray, SearchBarSort] = useState(cardioSnapshotArray);
    // pass renderedCardsArray as a prop to workout cardList
    //const [state, setstate] = useState(initialState);
    //function that maps all existing cards to pages from db
    // everything in db folder is initial state
    // search bar is the function that updates state

  return(
    <body>
    <main>
      <section className="featured-workouts">
        <h2>Cardio</h2>
        <SearchBar aria-label="SearchBar" array={cardioSnapshotArray} setArray={setCardioSnapshotArray} category={"Cardio"}/>
        <WorkoutCardList aria-label="Workout Cards" renderedCardsArray={cardioSnapshotArray}/>
      </section>
    </main>
    </body>
  );
}