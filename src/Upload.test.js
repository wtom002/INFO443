import '@testing-library/jest-dom';
import {React} from 'react';
import {render, fireEvent, screen } from '@testing-library/react';
import Upload from './components/Upload.js';

describe('Upload', () => {

    test('renders Upload component', () => {
        const {getByLabelText} = render(<Upload/>);
        const upload = getByLabelText("Upload Form");
        expect(upload).toBeInTheDocument();
    });

    test('handles form input changes', () => {
        render(<Upload />);
        const usernameInput = screen.getByLabelText('Username');
        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(usernameInput, { target: { value: 'TestUser' } });
        fireEvent.change(titleInput, { target: { value: 'TestTitle' } });
        expect(usernameInput.value).toBe('TestUser');
        expect(titleInput.value).toBe('TestTitle');
    });

    test('handles category and subcategory selection', () => {
        render(<Upload />);
        const categorySelect = screen.getByLabelText('First Tag');
        const subcategorySelect = screen.getByLabelText('Second Tag');
        fireEvent.change(categorySelect, { target: { value: 'Cardio' } });
        fireEvent.change(subcategorySelect, { target: { value: 'High Intensity' } });
        expect(categorySelect.value).toBe('Cardio');
        expect(subcategorySelect.value).toBe('High Intensity');
    });

    test('handles file input change', () => {
        render(<Upload />);
        const fileInput = screen.getByLabelText('File Input');
        const previewImage = screen.getByLabelText('Photo Preview');
        const testFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      
        fireEvent.change(fileInput, { target: { files: [testFile] } });
        setTimeout(() => {
          expect(previewImage.src).toContain('test.jpg');
        }, 0);
      });
})

