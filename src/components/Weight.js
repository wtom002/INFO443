import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import { WorkoutCardList } from "./WorkoutCardList";
import { getDatabase, ref, child, get } from "firebase/database";

// We will add a filter where the WorkoutCardList will only show cards that have Cardio as the first tag. 
export default function Weight() { 
    const [weightSnapshotArray, setWeightSnapshotArray] = useState([]);

useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Weight Training')).then((snapshot) => {
        const weightSnapshot = snapshot.val();
        const weightSnapshotKeys = Object.keys(weightSnapshot);
        const weightSnapshotArray = weightSnapshotKeys.map((key) => {
            const singlePostCopy = {...weightSnapshot[key]};
            singlePostCopy.key = key;
            return singlePostCopy;
        });
        setWeightSnapshotArray(weightSnapshotArray);
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
        <h2>Weight</h2>
        <SearchBar aria-label="SearchBar"array={weightSnapshotArray} setArray={setWeightSnapshotArray} category={"Weight Training"}/>
        <WorkoutCardList aria-label="Workout Cards" renderedCardsArray={weightSnapshotArray}/>
      </section>
    </main>
    </body>
  );
}