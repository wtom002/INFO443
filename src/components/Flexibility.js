import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import { WorkoutCardList } from "./WorkoutCardList";
import { getDatabase, ref, child, get } from "firebase/database";

// We will add a filter where the WorkoutCardList will only show cards that have Cardio as the first tag. 
export default function Flexibility() { 
    const [flexSnapshotArray, setFlexSnapshotArray] = useState([]);

useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Flexibility')).then((snapshot) => {
        const flexSnapshot = snapshot.val();
        const flexSnapshotKeys = Object.keys(flexSnapshot);
        const flexSnapshotArray = flexSnapshotKeys.map((key) => {
            const singlePostCopy = {...flexSnapshot[key]};
            singlePostCopy.key = key;
            return singlePostCopy;
        });
        setFlexSnapshotArray(flexSnapshotArray);
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
        <h2>Flexibility</h2>
        <SearchBar aria-label="SearchBar"array={flexSnapshotArray} setArray={setFlexSnapshotArray} category={"Flexibility"}/>
        <WorkoutCardList aria-label="Workout Cards" renderedCardsArray={flexSnapshotArray}/>
      </section>
    </main>
    </body>
  );
}