import '@testing-library/jest-dom';
import {React, Router} from 'react';
import SearchBar from './components/SearchBar.js';
import { render} from '@testing-library/react';
import NavBar from './components/Navbar.js';
import Upload from './components/Upload.js';
import WorkoutCardList from './components/WorkoutCardList.js';
import Home from './components/Home.js';
import { db, storage, ref, child, get } from './components/firebase.js';

describe('SearchBar', () => {
    test('renders SearchBar component', () => {
        const {getByLabelText} = render(<SearchBar/>);
        const searchBar = getByLabelText("Search Bar");
        expect(searchBar).toBeInTheDocument();
    });
})

describe('Upload', () => {
    test('renders Upload component', () => {
        const {getByLabelText} = render(<Upload/>);
        const upload = getByLabelText("Upload Form");
        expect(upload).toBeInTheDocument();
    });
})

describe('Home', () => {
    test('renders Home component', () => {
        const {getByLabelText} = render(<Home/>);
        const nav = getByLabelText("Home Page");
        expect(nav).toBeInTheDocument();
    });
    test('Home Page button scrolls down the page', () => {
        const {getByLabelText} = render(<Button/>)
    })
})

const testData = {
    renderedCardsArray: [
      {
        username: 'user1',
        picturePath: 'path1',
        postTitle: 'Title 1',
        category: 'Category 1',
        subCategory: 'Subcategory 1',
        content: 'Content 1',
      },
      {
        username: 'user2',
        picturePath: 'path2',
        postTitle: 'Title 2',
        category: 'Category 2',
        subCategory: 'Subcategory 2',
        content: 'Content 2',
      },
    ],
  };

  jest.mock('firebase/storage', () => ({
    ref: jest.fn(),
    getDownloadURL: jest.fn(() => Promise.resolve('mocked-image-url')),
  }));

  describe('renders WorkoutCardList component', () => {

    const {getByLabelText}  = render(
        <WorkoutCardList renderedCardsArray={testData.renderedCardsArray} />
    );
  
    // Check if the component has the correct label
    const cardContainer = getByLabelText('Workout Card List');
    expect(cardContainer).toBeInTheDocument();
  
    // Check if the expected number of WorkoutCard components is rendered
    // const workoutCards = getAllByTestId('workout-card');
    // expect(workoutCards).toHaveLength(testData.renderedCardsArray.length);
  });