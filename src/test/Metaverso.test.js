import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Metaverso from '../components/Metaverso/Metaverso';

test('renders Metaverso component with provided props', () => {

    const props = {
        title: 'Título de ejemplo',
        text: 'Texto de ejemplo',
        href: 'https://ejemplo.com',
        buttonText: 'Botón de ejemplo',
        showButton: true,
        video: 'https://ejemplo.com/video.mp4',
    };

    const { getAllByText } = render(
        <MemoryRouter>
            <Metaverso {...props} />
        </MemoryRouter>
    );

    expect(getAllByText(props.title)[0]).toBeInTheDocument();
    expect(getAllByText(props.text)[0]).toBeInTheDocument();

    
    if (props.showButton) {
        const button = getAllByText(props.buttonText)[0]; 
        expect(button).toBeInTheDocument();
        expect(button.getAttribute('href')).toBe(props.href);
    }
});