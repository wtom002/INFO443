import '@testing-library/jest-dom';
import React from 'react';
import SearchBar from './components/SearchBar.js';
import { render } from '@testing-library/react';

describe('SearchBar', () => {
    test('renders component', () => {
        const {getByLabelText} = render(<SearchBar/>);
        const searchBar = getByLabelText('Search Bar');
        expect(searchBar).toBeInTheDocument();
    });
})