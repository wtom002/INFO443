import {React, useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { getDatabase, ref, child, get } from "firebase/database";
// set the state of the card list
// export the state to the card list component
// onSearch(); when the 

// Our search bar is our second main feature which is not fully working yet! Our plan is to grab/render the workout cards from Firebase
// and then use the SearchBar to filter through the cards. Below is some code we were working on but we commented it out as it wouldn't
// let the page work/is still a work in progress. 

// import { getDatabase } from 'firebase/database';
// import ref from '';
// const db = getDatabase();

//var ref = firebase.database().ref().child('/scenes/' + projId).orderByChild('wordcount');
// ref.once('value',function(snap) {
//     snap.forEach(function(item) {
//         var itemVal = item.val();
//         keys.push(itemVal);
//     });
//     for (i=0; i < keys.length; i++) {
//         counts.push(keys[i].wordcount);
//     }   
// });

// import * as postInfo from './PostInfo.json'
// const jsonContents = JSON.parse(postInfo);

// useEffect(() => {
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, props.category)).then((snapshot) => {
//         const cardioSnapshot = snapshot.val();
//         const cardioSnapshotKeys = Object.keys(cardioSnapshot);
//         const oldArray = cardioSnapshotKeys.map((key) => {
//             const singlePostCopy = {...cardioSnapshot[key]};
//             singlePostCopy.key = key;
//             return singlePostCopy;
//         });
//         //props.setCardioSnapshotArray(cardioSnapshotArray);
//     });
// }, []);
// let searchInput;
// let searchResult = new Array();
// // unfinished, change to work with firebase db
// for (let i = 0; i < jsonContents.length; i++) {
//     if (jsonContents.title) {
        
//     }
// }
let sortedArray = [];
let oldArray = [];
export const SearchBar = (props) => {
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, props.category)).then((snapshot) => {
            const Snapshot = snapshot.val();
            const SnapshotKeys = Object.keys(Snapshot);
            const SnapshotArray = SnapshotKeys.map((key) => {
                const singlePostCopy = {...Snapshot[key]};
                singlePostCopy.key = key;
                return singlePostCopy;
            });
            oldArray = SnapshotArray;
        });
    }, []);

    const [queryText, setQueryText] = useState('');

    const handleChange = (event) => {
        setQueryText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = encodeURIComponent(queryText);
        searchBarSort(oldArray, query);
    };

    function searchBarSort(array, searchInput){
        
        if (searchInput == "") {
            
            props.setArray(oldArray);
            
        } else {
            for (let i = 0; i< array.length; i++) {
                if (array[i].postTitle == searchInput || array[i].postTitle.includes(searchInput)) {
                    sortedArray.push(array[i]);
                }
            }
            props.setArray(sortedArray);
        }
        console.log(sortedArray);
        console.log(array);
        console.log(oldArray);
        console.log(searchInput);
        //setQueryText('');
        sortedArray = [];
    }

    return (
        <Form id="cover" aria-label="Search Bar" onSubmit={handleSubmit}>
            <Form.Group className="search-bar">
                    <Form.Control 
                    aria-label="Search Bar" 
                    className="form-input" 
                    type="text" 
                    placeholder="Type a workout ... "  
                    value={queryText}
                    onChange={handleChange}
                    >
                    </Form.Control>
                <Button aria-label="Submit" type="submit"><span className="material-icons">search</span></Button>
            </Form.Group>
        </Form>
    );

}



export default SearchBar;
