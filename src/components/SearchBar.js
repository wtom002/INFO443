import {React, useState, useEffect} from "react";
import { getDatabase, ref, child, get } from 'firebase/database';

export function searchBarSort(array, searchInput) {
    if (searchInput === "") {
      return array;
    } else {
      const sortedArray = array.filter((item) =>
        item.postTitle.toLowerCase().includes(searchInput.toLowerCase())
      );
      return sortedArray;
    }
  }

export const SearchBar = (props) => {
    const [queryText, setQueryText] = useState('');
    const [oldArray, setOldArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dbRef = ref(getDatabase());
                const snapshot = await get(child(dbRef, props.category));
                const Snapshot = snapshot.val();
                if (Snapshot) {
                    const SnapshotKeys = Object.keys(Snapshot);
                    const SnapshotArray = SnapshotKeys.map((key) => {
                        const singlePostCopy = { ...Snapshot[key], key };
                        return singlePostCopy;
                    });
                    setOldArray(SnapshotArray);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, [props.category]);

    const handleChange = (event) => {
        setQueryText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = encodeURIComponent(queryText);
        searchBarSort(oldArray, query);
    };

    return (
        <form id="cover" aria-label="Search Bar" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    aria-label="Search Bar Input"
                    className="form-control"
                    type="text"
                    placeholder="Type a workout ..."
                    value={queryText}
                    onChange={handleChange}
                />
                <button className="btn btn-primary" type="submit">
                    <span className="material-icons">search</span>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;