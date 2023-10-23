import '@testing-library/jest-dom';
import React from 'react';
import SearchBar from './src/components/SearchBar';

describe('SearchBar', () => {
    test('renders component', () => {
        const {getByLabelText} = render(<SearchBar/>);
        const searchBar = getByLabelText('Search Bar');
        expect(searchBar).toBeInTheDocument();
    });

})