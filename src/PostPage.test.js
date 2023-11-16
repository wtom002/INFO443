import '@testing-library/jest-dom';
import {React} from 'react';
import {render, screen   } from '@testing-library/react';
import Weight from './components/Weight.js';
import WorkoutCardList from './components/WorkoutCardList.js';

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
        const renderedCardsArray = [];
        render(<WorkoutCardList renderedCardsArray={renderedCardsArray} />);
        const workoutCardListElement = screen.getByLabelText("Workout Card List");
        expect(workoutCardListElement).toBeInTheDocument();
      });

      
});