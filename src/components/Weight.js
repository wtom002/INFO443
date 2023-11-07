import {React, useState, useEffect} from "react";
import {SearchBar} from "./SearchBar";
import WorkoutCardList from "./WorkoutCardList";
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
  return(
    <div>
    <main>
      <section className="featured-workouts">
        <h2>Weight</h2>
        <SearchBar aria-label="Search Bar" array={weightSnapshotArray} setArray={setWeightSnapshotArray} category={"Weight Training"}/>
        <WorkoutCardList aria-label="Workout Cards" renderedCardsArray={weightSnapshotArray}/>
      </section>
    </main>
    </div>
  );
}