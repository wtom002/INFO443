import '@testing-library/jest-dom';
import {React} from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import {handleScroll} from './components/Home.js';
import Home from './components/Home.js';
import * as App from "./components/App";



describe('Home', () => {

    test('renders Home component', () => {
        const {getByLabelText} = render(<Home/>);
        const home = getByLabelText("Home Page");
        expect(home).toBeInTheDocument();
    });

    test('scroll button click scrolls down the page', () => {
        const { getByLabelText } = render(<Home />);
        const scrollButton = getByLabelText('Scroll Down');
        const scrollSpy = jest.spyOn(window, 'scroll');
    
        fireEvent.click(scrollButton);
    
        expect(scrollSpy).toHaveBeenCalledWith({
          top: document.body.offsetHeight,
          left: 0,
          behavior: 'smooth',
        });
    });

    test('renders the "About Us" section', () => {
        render(<Home />);
        const aboutUsSection = screen.getByText('About Us');
        expect(aboutUsSection).toBeInTheDocument();
    });
})