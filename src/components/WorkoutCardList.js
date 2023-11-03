//import PostInfo from './PostInfo.json';
//import Article from './Article';
import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {storage} from "./firebase.js";
import {ref, getDownloadURL} from "firebase/storage";
import 'firebase/storage';
//import {getDatabase, ref, child, get} from "firebase/database";

// Right now, we are using WorkoutCard and WorkoutCardList with a temporary json file to test out all of the functions. However our plan
// for the final draft/next step is to render the user information from Firebase to create these cards. This should be a easy step as
// we just have to grab the data and use it to render the cards which will support our second main feature, the SearchBar. 
function ImageComponent(props) {
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      // Create a reference to the image in Firebase Storage
      const storageRef = ref(storage, props.picturePath);
  
      // Download the image and get its URL
        getDownloadURL(storageRef)
        .then((url) => {
        setImageUrl(url);
        // const img = document.getElementById('img');        
        // img.setAttribute('src', url); 
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

    //firebase rtdb references
    //const sRef = storage.ref({picturePath});
   
        //var storageRef = sRef(storage);
        
        // child(storageRef, {picturePath}).getDownloadURL().then(function(url) {
        //     var test = url;
        //     alert(url);
        //     document.querySelector('img').src = test;
        // });
        
        // const storageRef = sRef(storage);    
        // storageRef.child(picturePath).getDownloadURL()      
        // .then((url) => {        
        //     const img = document.getElementById('img');        
        //     img.setAttribute('src', url); 
        //     //document.querySelector('img').src = test;     
        // })      


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
    
    //I want an array of elements, but need to add a key with a unique value
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
        return <div >{element}</div>; //don't forget to return!
    })

    return (
        <div className="card-container" aria-label="Workout Card List">
            {componentArray}
        </div>
    )
}