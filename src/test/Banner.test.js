import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Banner from '../components/banner/Banner';

test('renders Banner component without errors', () => {
    const title = 'Mi Título';
    const text = 'Mi texto de ejemplo';
    const buttonText = 'Mi Botón';
    const image = 'ruta-de-la-imagen.jpg';
    const href = '/mi-enlace';

    const { getByText, getByAltText } = render(
        <MemoryRouter>
            <Banner
                title={title}
                text={text}
                buttonText={buttonText}
                image={image}
                href={href}
                showButton={true}
            />
        </MemoryRouter>
    );
    const titleElement = getByText(title);
    const textElement = getByText(text);
    const buttonElement = getByText(buttonText);
    const imageElement = getByAltText('Imagen');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
});
