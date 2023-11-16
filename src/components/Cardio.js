import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import WorkoutCardList from "./WorkoutCardList";
import { getDatabase, ref, child, get } from "firebase/database";

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