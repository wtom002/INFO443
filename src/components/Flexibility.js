import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import WorkoutCardList from "./WorkoutCardList";
import { getDatabase, ref, child, get } from "firebase/database";

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