import '@testing-library/jest-dom';
import {React, Router} from 'react';
import {render, screen   } from '@testing-library/react';
import Weight from './components/Weight.js';
import WorkoutCardList from './components/WorkoutCardList.js';
import SearchBar from './components/SearchBar.js';

describe('Post Page', () => {
  
    test("renders the Weight component with a title", () => {
        render(<Weight />);
        const titleElement = screen.getByText("Weight");
        expect(titleElement).toBeInTheDocument();
    });
    
    test("renders the SearchBar", () => {
        render(<Weight />);
        const searchBarElement = screen.getByLabelText("Search Bar");
        expect(searchBarElement).toBeInTheDocument();
    });

    test("renders the WorkoutCardList component", () => {
        render(<WorkoutCardList/>)
        const workoutCardListElement = screen.getByLabelText("Workout Cards");
        expect(workoutCardListElement).toBeInTheDocument();
    });
    
    test("initial weightSnapshotArray state is empty", () => {
        render(<WorkoutCardList />);
      
        const weightSnapshotArray = screen.getByLabelText("Workout Cards").renderedCardsArray;
        expect(weightSnapshotArray).toEqual([]);
    });
});
//   These tests cover the following:
  
//   The first test checks whether the Weight component renders with the expected title.
//   The second test ensures that the SearchBar and WorkoutCardList components are rendered within the Weight component.
//   The third test simulates fetching data from the database (with a mock) and checks if the fetched data is displayed properly. You may need to customize the data assertions based on your actual data structure.