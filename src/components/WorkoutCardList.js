import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {storage} from "./firebase.js";
import {ref, getDownloadURL} from "firebase/storage";
import 'firebase/storage';

function ImageComponent(props) {
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      const storageRef = ref(storage, props.picturePath);
        getDownloadURL(storageRef)
        .then((url) => {
        setImageUrl(url);
      });
    }, [props.picturePath]);
  
    return <img src={imageUrl} alt="My Image" />;
}

function WorkoutCard(props) {
    const username = props.username;
    const picturePath = props.picturePath;
    const title = props.title;
    const tag1 = props.tag1;
    const tag2 = props.tag2;
    const description = props.description;

    return (
    
    <section className="featured-workouts">
        <Link to='/Article' aria-label="Article Page">
        <div className="cards">
            <div className="card-header">
                <p>{username}</p>
            </div>

            <div className="featured-workouts__img">
            <ImageComponent picturePath = {picturePath}/>
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>Tag 1: {tag1}</p>
                <p>Tag 2: {tag2}</p>
                <p>{description}</p>
            </div>
        </div>
        </Link>
    </section>
    )
}

export default function WorkoutCardList(props) {  
    const componentArray =  props.renderedCardsArray.map((jobObj) => {
    
        const element = (
        <WorkoutCard
            username={jobObj.username}
            picturePath={jobObj.picturePath}
            title={jobObj.postTitle}
            tag1={jobObj.category}
            tag2={jobObj.subCategory}
            description={jobObj.content}
            key={jobObj.username}
            /> 
        )
        return <div >{element}</div>;
    })

    return (
        <div className="card-container" aria-label="Workout Card List">
            {componentArray}
        </div>
    )
}