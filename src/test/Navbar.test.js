import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeContextProvider } from '../context/ThemeContext'; 
import Navbar from '../components/navbar/Navbar';

test('renders Navbar without errors', () => {
    const { getByText } = render(
        <MemoryRouter>
            <ThemeContextProvider> 
                <Navbar />
            </ThemeContextProvider>
        </MemoryRouter>
    );

    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
});

test('renders icons', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <ThemeContextProvider> 
                <Navbar/>
            </ThemeContextProvider>
        </MemoryRouter>
    );

    const logIcon = getByTestId('log-icon');
    const cartIcon = getByTestId('cart-icon');

    expect(logIcon).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
});
