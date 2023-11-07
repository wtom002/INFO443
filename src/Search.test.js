import '@testing-library/jest-dom';
import {React, Router} from 'react';
import SearchBar from './components/SearchBar.js';
import {render, fireEvent} from '@testing-library/react';
import NavBar from './components/Navbar.js';
import Upload from './components/Upload.js';
import WorkoutCardList from './components/WorkoutCardList.js';
import Home from './components/Home.js';
import * as firebase from './components/firebase.js';
import {searchBarSort} from './components/SearchBar.js';


describe('SearchBar', () => {

    test('renders SearchBar component', () => {
        const {getByLabelText} = render(<SearchBar/>);
        const searchBar = getByLabelText("Search Bar");
        expect(searchBar).toBeInTheDocument();
    });

    test('should handle input change', () => {
        const { getByLabelText } = render(<SearchBar category="example" />);
        const searchBarInput = getByLabelText('Search Bar Input');
    
        fireEvent.change(searchBarInput, { target: { value: 'test' } });
    
        expect(searchBarInput.value).toBe('test');
    });

    test('should filter the array correctly with searchBarSort', () => {
        const sampleArray = [
          { postTitle: 'Workout 1' },
          { postTitle: 'Workout 2' },
          { postTitle: 'Exercise 1' },
        ];
    
        const resultArray = searchBarSort(sampleArray, 'workout');
    
        expect(resultArray).toEqual([
          { postTitle: 'Workout 1' },
          { postTitle: 'Workout 2' },
        ]);
      });

})